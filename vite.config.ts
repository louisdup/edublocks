import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import I18nHotReload from 'vite-plugin-i18n-hot-reload';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    I18nHotReload({
      folder: "public/languages"
    })

  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
