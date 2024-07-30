// @ts-check

import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tailwind from "eslint-plugin-tailwindcss";

const dirname = import.meta.dirname;

export default ts.config(
	js.configs.recommended,
	...ts.configs.strictTypeChecked,
	...svelte.configs['flat/recommended'],
	...tailwind.configs["flat/recommended"],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				projectService: {
          allowDefaultProject: [`./*.{ts,js,mjs,cjs}`],
          defaultProject: './tsconfig.json',
        },
				extraFileExtensions: ['.svelte'],
				tsconfigRootDir: dirname,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			}
		}
	},
  {
    files: ['**/*.js'],
    ...ts.configs.disableTypeChecked,
  },
	{
		ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/', '.github/', '.vscode/',]
	}
);
