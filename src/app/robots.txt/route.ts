export const revalidate = false;

export async function GET() {
  return new Response(
    String(`User-agent: *
Allow: /

Host: https://docs.novu.co

Sitemap: https://docs.novu.co/sitemap.xml`)
  );
}
