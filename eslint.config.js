// eslint.config.js

import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Основные настройки для браузерного JS
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      ...eslintConfigPrettier.rules,
    },
  },

  // Подключаем рекомендованные правила ESLint
  pluginJs.configs.recommended,

  // Отдельный блок для Node.js конфигов и скриптов
  {
    files: ['vite.config.js', '.eslintrc.{js,cjs}'],
    languageOptions: {
      sourceType: 'script',
      globals: {
        ...globals.node,
      },
    },
  },

  // Исключаем ненужные папки из линтинга
  {
    ignores: ['node_modules', 'dist'],
  },
]);
