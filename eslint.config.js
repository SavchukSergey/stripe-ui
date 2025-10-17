import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx,mjs}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "indent": ["error", 2, {
        "SwitchCase": 1
      }],
      "linebreak-style": ["error", "unix"],
      "no-multiple-empty-lines": "error",
      "no-trailing-spaces": "error",
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
]);
