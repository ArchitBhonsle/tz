import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // 'svelte/rule-name': 'error'
    }
  },
  ...eslintConfigPrettier
);