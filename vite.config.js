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
                index: resolve(__dirname, "./index.html"),
                aboutUs: resolve(__dirname, "./about-us.html"),
                contactUs: resolve(__dirname, "./contact-us.html"),
                error: resolve(__dirname, "./not-found.html"),
                FAQ: resolve(__dirname, "./faq.html"),
                blog: resolve(__dirname, "./blog.html"),
                order: resolve(__dirname, "./order.html"),
                product: resolve(__dirname, "./show-product.html"),
                productList: resolve(__dirname, "./product-list.html"),
                showBlog: resolve(__dirname, "./show-blog.html")
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