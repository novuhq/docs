import markdown from "eslint-plugin-markdown";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
    ...markdown.configs.recommended,
    {
        // Enable the Markdown processor for all .mdx files.
        files: ["**/*.mdx"],
        processor: "markdown/markdown",
    },
    {
        // Enable Prettier for all JavaScript and Markdown files.
        files: ["**/*.js", "**/*.mdx"],
        plugins: {
            prettier: prettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
    eslintConfigPrettier,
];
