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
        devSourcemap: true,
        postcss: "./postcss.config.js",
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "./index.html")
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
                        return 'images/[name][extname]';
                    }
                    return 'assets/[name][extname]';
                },
            },
        },
        assetsInlineLimit: 0,
    },
});
