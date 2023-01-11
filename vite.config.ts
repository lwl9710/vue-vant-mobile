import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import AutoImportComponent from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { createPostcssPxtoremPlugin, createAutoPrefixerPlugin } from "./postcss.plugins";

function resolvePath(pathname: string): string {
  return path.resolve(process.cwd(), pathname);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    resolve: {
      alias: {
        "@": resolvePath("src")
      }
    },
    server: {
      open: true,
      host: "0.0.0.0",
      proxy: {
        [env.VITE_BASE_URL || "/dev"]: {
          ws: true,
          changeOrigin: true,
          target: "https://www.baidu.com",
          rewrite: path => path.replace(env.VITE_BASE_URL, "")
        }
      }
    },
    css: {
      postcss: {
        plugins: [ createPostcssPxtoremPlugin(), createAutoPrefixerPlugin() ]
      }
    },
    plugins: [
      vue(),
      VueSetupExtend(),
      AutoImport({
        imports: [ "vue", "vue-router" ],
        dts: "types/auto-import.d.ts"
      }),
      AutoImportComponent({
        extensions: [ "vue" ],
        dirs: [ "src/components" ],
        dts: "types/components.d.ts",
        resolvers: [ VantResolver() ]
      })
    ],
  }
})
