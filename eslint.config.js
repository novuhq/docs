import mdx from 'eslint-plugin-mdx'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
    rules: {
      ...mdx.flat.rules,
      /**
       * Disabled to allow for Mintlify JSX snippets, which are not expressions.
       * 
       * @example the following code snippet is valid Mintlify MDX
       * 
       * ```mdx
       * import ApikeyWarning from "/snippets/apikey-warning.mdx";
       * 
       * <ApikeyWarning />
       * ```
       */
      'no-unused-expressions': 'off',
      "prettier/prettier": [
        "error",
        {
          // Tells prettier to use `mdx` parser for .mdx files
          "parser": "mdx",
        }
      ]
    },
  },
  mdx.flatCodeBlocks,
  eslintPluginPrettierRecommended,
]
