import type { Root } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

interface DirectiveNode {
  type: 'textDirective' | 'leafDirective' | 'containerDirective';
  name: string;
  attributes?: Record<string, string>;
  children?: Array<{
    type: string;
    value: string;
  }>;
  data?: Record<string, unknown>;
}

function isDirectiveNode(node: unknown): node is DirectiveNode {
  return (
    typeof node === 'object' &&
    node !== null &&
    'type' in node &&
    ['textDirective', 'leafDirective', 'containerDirective'].includes(
      (node as DirectiveNode).type
    ) &&
    'name' in node
  );
}

export const remarkTooltip: Plugin<[], Root> = () => {
  return (tree, file: VFile) => {
    visit(tree, (node) => {
      if (isDirectiveNode(node) && node.name === 'tooltip') {
        const text = node.children?.[0]?.value;
        const label = node.attributes?.label;

        if (!text) {
          file.fail('Missing tooltip text in square brackets [text]', node);
        }

        if (!label) {
          file.fail('Missing label attribute in curly braces {label="..."}', node);
        }

        // Convert to MDX JSX elements
        Object.assign(node, {
          type: 'mdxJsxFlowElement',
          name: 'Tooltip',
          attributes: [],
          children: [
            {
              type: 'mdxJsxFlowElement',
              name: 'TooltipTrigger',
              attributes: [],
              children: [
                {
                  type: 'mdxJsxFlowElement',
                  name: 'span',
                  attributes: [
                    {
                      type: 'mdxJsxAttribute',
                      name: 'className',
                      value:
                        'text-sm inline-block bg-zinc-100 hover:cursor-pointer text-zinc-700 leading-[20px] text-[.8125rem] rounded-md px-1 py-0 px-[.375rem] decoration-dotted decoration-zinc-400 underline underline-offset-4',
                    },
                  ],
                  children: [{ type: 'text', value: text }],
                },
              ],
            },
            {
              type: 'mdxJsxFlowElement',
              name: 'TooltipContent',
              attributes: [],
              children: [
                {
                  type: 'mdxJsxFlowElement',
                  name: 'p',
                  attributes: [],
                  children: [{ type: 'text', value: label }],
                },
              ],
            },
          ],
        });
      }
    });
  };
};
