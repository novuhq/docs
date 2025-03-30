import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types';
import { ImageResponse } from 'next/og';
import type { ReactElement, ReactNode } from 'react';

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  primaryTextColor?: string;
}

export function generateOGImage(options: GenerateProps & ImageResponseOptions): ImageResponse {
  const { title, description, primaryTextColor, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    }
  );
}

export function generate({
  primaryTextColor = 'rgb(255,150,255)',
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        color: 'white',
        backgroundColor: 'rgb(10,10,10)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '4rem',
        }}
      >
        <p
          style={{
            fontWeight: 600,
            fontSize: '76px',
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: '48px',
            color: 'rgba(240,240,240,0.7)',
          }}
        >
          {props.description}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '24px',
            marginTop: 'auto',
            color: primaryTextColor,
          }}
        >
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 2000 2000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1540 801.609C1540 855.379 1474.72 882.004 1437.11 843.57L667.229 56.7032C771.33 19.9793 883.332 0 1000 0C1198.91 0 1384.25 58.0733 1540 158.19V801.609ZM1820 427.485V801.609C1820 1106.31 1450.07 1257.18 1236.98 1039.39L409.055 193.205C161.022 375.186 0 668.789 0 1000C0 1212.94 66.5559 1410.33 180 1572.51V1200.39C180 895.692 549.933 744.819 763.025 962.612L1589.81 1807.63C1838.48 1625.71 2000 1331.72 2000 1000C2000 787.061 1933.44 589.667 1820 427.485ZM562.887 1158.43L1331.32 1943.81C1227.63 1980.21 1116.12 2000 1000 2000C801.093 2000 615.749 1941.93 460 1841.81V1200.39C460 1146.62 525.282 1120 562.887 1158.43Z"
              fill="white"
            />
          </svg>

          <p
            style={{
              fontSize: '46px',
              fontWeight: 600,
            }}
          >
            Novu
          </p>
        </div>
      </div>
    </div>
  );
}
