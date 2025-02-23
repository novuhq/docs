import type { Root } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

const INLINE_COMPONENTS = ['Tooltip', 'Method', 'Link'];

export const remarkPreserveInline: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'jsx', (node: any) => {
      // Check if the node starts with any of our inline components
      const isInlineComponent = INLINE_COMPONENTS.some((component) => {
        const componentStart = `<${component}`;
        return node.value.startsWith(componentStart);
      });

      if (isInlineComponent) {
        // Add a special marker that Prettier will respect
        node.data = {
          ...node.data,
          // This tells prettier to treat this as inline
          jsxType: 'inline',
          // Ensure no extra spaces are added
          whitespace: 'inline',
        };
      }
    });
  };
};
