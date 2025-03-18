import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 5173,
    },

    plugins: [Inspect()],
    base: "./",
    css: {
        devSourcemap: false,
        postcss: "./postcss.config.js",
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./index.html")
            },
            output: {
                entryFileNames: "assets/[name]-[hash].js",
                chunkFileNames: "assets/[name]-[hash].js",
                assetFileNames: (assetInfo) => {
                  if (/\.(css)$/.test(assetInfo.name)) {
                    return 'assets/[name]-[hash][extname]';
                  }
                  if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
                    return 'images/[name][extname]';
                  }
                  return 'assets/[name]-[hash][extname]';
                },
            },
        },
        assetsInlineLimit: 0,
    },
});