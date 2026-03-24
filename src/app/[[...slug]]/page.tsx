import { openapi, source } from '@/lib/source';
import { APIPage } from 'fumadocs-openapi/ui';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Accordion, Accordions } from '../../components/accordion';
import { Callout } from '../../components/callout';
import { CodeBlock, Pre } from '../../components/codeblock';
import { Step, Steps } from '../../components/steps';
import { Tab, Tabs } from '../../components/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../components/ui/hover-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../components/ui/tooltip';
import { metadataImage } from '../../lib/metadata-image';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';
import { PageActions } from '../../components/page-actions';
import { getRawMarkdownContent } from '../../lib/get-markdown-content';
import {
  JsonLd,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildVideoSchema,
} from '../../lib/json-ld';
import { extractFaqItems } from '../../lib/extract-faq';
import { createMetadata } from '../../lib/metadata';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ full?: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;

  const isOverviewPage =
    page.file.path === 'platform/index.mdx' || page.slugs.join('/') === 'platform';

  const isFullWidth = page.data.full || searchParams.full === 'true';

  const rawMarkdownContent = getRawMarkdownContent(page.file.path);

  // Breadcrumb JSON-LD
  const breadcrumbItems = getBreadcrumbItems(page.url, source.pageTree, {
    includeRoot: { url: '/' },
    includePage: true,
  });
  const breadcrumbLd = breadcrumbItems
    .filter((item) => item.url)
    .map((item) => ({
      name: String(item.name),
      url: item.url!,
    }));

  // FAQ JSON-LD
  const faqItems = extractFaqItems(rawMarkdownContent);

  // Video JSON-LD — extract YouTube embeds from raw markdown
  const videoItems: { name: string; embedUrl: string }[] = [];
  const iframeRegex =
    /<iframe[^>]*src="(https:\/\/www\.youtube\.com\/embed\/[^"]+)"[^>]*title="([^"]*)"[^>]*>/g;
  let iframeMatch;
  while ((iframeMatch = iframeRegex.exec(rawMarkdownContent)) !== null) {
    videoItems.push({ embedUrl: iframeMatch[1], name: iframeMatch[2] });
  }

  // GitHub URL for editing this page
  const githubUrl = `https://github.com/novuhq/docs/edit/main/content/docs/${page.file.path}`;

  return (
    <DocsPage
      {...(!isOverviewPage && { toc: page.data.toc })}
      full={isFullWidth}
      tableOfContent={{
        enabled: !isOverviewPage,
        single: false,
        style: 'clerk',
        footer: isOverviewPage ? null : (
          <PageActions
            pageContent={rawMarkdownContent}
            title={page.data.pageTitle ?? page.data.title}
            githubUrl={githubUrl}
            path={page.file.path}
          />
        ),
      }}
      article={{
        className: 'max-sm:pb-16 max-w-[770px] !px-0',
      }}
      container={{
        className: '[&>article]:gap-4',
      }}
      breadcrumb={{
        enabled: true,
      }}
    >
      <JsonLd
        data={buildArticleSchema({
          title: page.data.pageTitle ?? page.data.title,
          description: page.data.description,
          url: page.url,
          slug: page.slugs.join('/'),
        })}
      />
      {breadcrumbLd.length > 1 && <JsonLd data={buildBreadcrumbSchema(breadcrumbLd)} />}
      {faqItems.length > 0 && <JsonLd data={buildFaqSchema(faqItems)} />}
      {videoItems.map((video, i) => (
        <JsonLd
          key={`video-${i}`}
          data={buildVideoSchema({
            name: video.name,
            description: page.data.description ?? video.name,
            thumbnailUrl: `https://img.youtube.com/vi/${video.embedUrl.split('/embed/')[1]?.split('?')[0]}/hqdefault.jpg`,
            uploadDate: '2024-01-01T00:00:00Z',
            embedUrl: video.embedUrl,
          })}
        />
      ))}
      {!isOverviewPage && (
        <>
          <DocsTitle className="max-w-[640px]">{page.data.pageTitle ?? page.data.title}</DocsTitle>
          <DocsDescription className="mb-4">{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            pre: (props) => {
              // Extract language and title from className if available
              const className = props.className || '';
              const match = /language-(\w+)/.exec(className);
              const lang = match ? match[1] : '';

              return (
                <CodeBlock title={lang} {...props}>
                  <Pre {...props} />
                </CodeBlock>
              );
            },
            a: ({ href, ...props }) => {
              const found = source.getPageByHref(href ?? '', {
                dir: page.file.dirname,
              });

              if (!found) return <Link href={href} {...props} />;

              return (
                <HoverCard openDelay={500}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={found.hash ? `${found.page.url}#${found.hash}` : found.page.url}
                      {...props}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    <p className="font-medium">{found.page.data.title}</p>
                    <p className="text-fd-muted-foreground">{found.page.data.description}</p>
                  </HoverCardContent>
                </HoverCard>
              );
            },
            CodeBlock: CodeBlock,
            Callout: Callout,
            APIPage: (props) => (
              <div id="api-page">
                <APIPage {...openapi.getAPIPageProps(props)} />
              </div>
            ),
            Accordions: Accordions,
            Accordion: Accordion,
            Steps: Steps,
            Step: Step,
            Popup,
            PopupContent,
            PopupTrigger,
            TypeTable: TypeTable,
            Tabs: Tabs,
            Tab: Tab,
            Tooltip: ({ children, content }: { children: React.ReactNode; content: string }) => (
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger
                    asChild
                    className="text-sm inline-block bg-zinc-100 dark:bg-zinc-800 hover:cursor-pointer text-zinc-700 dark:text-zinc-300 leading-[20px] text-[.8125rem] rounded-md px-1 py-[.25rem] px-[.375rem] decoration-dotted decoration-zinc-400 dark:decoration-zinc-500 underline underline-offset-4"
                  >
                    {children}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{content}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ),
            Method: (props) => (
              <Link href={props.href} className="no-underline">
                <span className="text-sm bg-[#f3f0ff] dark:bg-[#2d2a3f] hover:cursor-pointer border border-[#e4defc] dark:border-[#4a4273] text-[#5746af] dark:text-[#a89ade] leading-[20px] text-[.8125rem] rounded-md px-1 py-[.25rem] px-[.375rem] whitespace-nowrap">
                  {props.children}
                </span>
              </Link>
            ),
            img: (props) => <ImageZoom {...props} alt={props.alt || ''} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const title = page.data.pageTitle || page.data.title;
  const description = page.data.description;

  return createMetadata(
    await metadataImage.withImage(page.slugs, {
      title,
      description,
      alternates: {
        canonical: page.url,
      },
      openGraph: {
        type: 'article',
        url: `https://docs.novu.co${page.url}`,
        title,
        description: description ?? undefined,
      },
    })
  );
}

export const revalidate = false;
