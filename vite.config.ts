import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import manifest from "./public/manifest";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest,
            devOptions: { enabled: true },
            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf}"],
                runtimeCaching: [
                    {
                        urlPattern: new RegExp(
                            "^https://api.aladhan.com/v1/timingsByAddress"
                        ),
                        handler: "CacheFirst",
                        options: {
                            cacheName: "api-cache",
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            },
        }),
    ],
});
