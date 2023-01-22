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
  const isProduction = mode === "production";
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
      proxy: isProduction ? undefined : {
        [env.VITE_BASE_URL || "/dev"]: {
          ws: true,
          changeOrigin: true,
          target: env.VITE_PROXY_TARGET,
          rewrite: path => path.replace(env.VITE_BASE_URL, "")
        }
      }
    },
    css: {
      postcss: {
        plugins: [ createPostcssPxtoremPlugin(), createAutoPrefixerPlugin() ]
      }
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames({ name }) {
            if(/\.(jpe?g|png|gif|webp|svg)$/i.test(name)) {
              return "images/[name]-[hash].[ext]";
            }
            if(/\.svg$/i.test(name)) {
              return "svg/[name]-[hash].[ext]";
            }
            if(/\.(woff|woff2|eot|ttf|otf)$/i.test(name)) {
              return "fonts/[name]-[hash].[ext]";
            }
            if(/\.css$/i.test(name)) {
              return "css/[name]-[hash].[ext]";
            }
            return "[name]-[hash].[ext]";
          },
          manualChunks: (filePath) => {
            filePath = filePath.split("?")[0];
            if(/[\\/]vant[\\/]/i.test(filePath)) {
              return "vant";
            }
            if(/[\\/]@?vue[\\/]/i.test(filePath)) {
              return "vue";
            }
            if(/[\\/]vue-router[\\/]/i.test(filePath)) {
              return "vue-router";
            }
            if(/[\\/]pinia[\\/]/i.test(filePath)) {
              return "pinia";
            }
            /* index文件取上级目录 */
            const IndexVueFileRegExp = /[\\/](?<name>[^\\/]+)[\\/]index\.vue$/i;
            const result = filePath.match(IndexVueFileRegExp);
            if(result) {
              const filename = result.groups.name[0].toLowerCase() + result.groups.name.substring(1).replace(/[A-Z]/g, letter => `-${ letter.toLowerCase() }`);
              return filename;
            }
            /* 其他依赖处理 */
            if(/[\\/]node_modules[\\/]/i.test(filePath)) {
              return "vendor";
            }
          }
        }
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
