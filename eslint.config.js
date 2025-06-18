// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactNativeRecommended = require("eslint-plugin-react-native/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  reactNativeRecommended,
  {
    ignores: ["dist/*"],
    rules: {
      "react-native/no-inline-styles": "warn",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "no-console": "warn",
    }
  },
]);
