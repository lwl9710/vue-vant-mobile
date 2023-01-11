import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createPostcssPxtoremPlugin, createAutoPrefixerPlugin } from "./postcss.plugins";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [ createPostcssPxtoremPlugin(), createAutoPrefixerPlugin() ]
    }
  },
  plugins: [vue()],
})
