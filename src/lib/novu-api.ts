export class NovuApiError extends Error {
  constructor(
    public message: string,
    public status: number,
    public rawError?: unknown
  ) {
    super(message);
  }
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const API_HOSTNAME = process.env.NEXT_PUBLIC_NOVU_API_URL || 'http://localhost:3000';

type ErrorData = {
  message?: string | { message?: string };
};

const request = async <T>(
  endpoint: string,
  options?: {
    environment?: { _id: string };
    body?: unknown;
    method?: HttpMethod;
    headers?: HeadersInit;
    version?: 'v1' | 'v2';
    signal?: AbortSignal;
    token?: string;
  }
): Promise<T> => {
  const {
    body,
    environment,
    headers,
    method = 'GET',
    version = 'v1',
    signal,
    token,
  } = options || {};

  if (!token) {
    throw new Error('No authentication token provided');
  }

  try {
    const config: RequestInit = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...(environment && { 'Novu-Environment-Id': environment._id }),
        ...headers,
      },
      signal,
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_HOSTNAME}/${version}${endpoint}`, config);

    if (!response.ok) {
      const errorData = await response.json();
      throw new NovuApiError(parseErrorMessage(errorData), response.status, errorData);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof NovuApiError) {
      throw error;
    }
    if (typeof error === 'object' && error && 'message' in error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
    throw new Error(`Fetch error: ${JSON.stringify(error)}`);
  }
};

type RequestOptions = {
  body?: unknown;
  environment?: { _id: string };
  signal?: AbortSignal;
  token?: string;
};

export const get = <T>(endpoint: string, { environment, signal, token }: RequestOptions = {}) =>
  request<T>(endpoint, { method: 'GET', environment, signal, token });

function parseErrorMessage(errorData: ErrorData): string {
  const DEFAULT_ERROR = 'Novu API error';

  if (!errorData?.message) {
    return DEFAULT_ERROR;
  }

  if (typeof errorData.message !== 'string') {
    return errorData.message?.message || DEFAULT_ERROR;
  }

  try {
    const parsedMessage = JSON.parse(errorData.message) as { message?: string };
    return parsedMessage?.message || DEFAULT_ERROR;
  } catch {
    return errorData.message || DEFAULT_ERROR;
  }
}
