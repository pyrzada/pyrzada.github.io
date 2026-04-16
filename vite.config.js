import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        target: "es2020",
        cssCodeSplit: true,
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (!id.includes("node_modules")) return;
                    if (id.includes("three")) return "vendor-three";
                    if (id.includes("@react-three")) return "vendor-r3f";
                    if (id.includes("framer-motion")) return "vendor-motion";
                    if (id.includes("react-vertical-timeline")) return "vendor-timeline";
                    if (id.includes("@emailjs")) return "vendor-email";
                    if (id.includes("react-icons")) return "vendor-icons";
                    if (id.includes("lenis")) return "vendor-lenis";
                    if (id.includes("react-router") || id.includes("react-dom") || id.includes("/react/")) {
                        return "vendor-react";
                    }
                    return "vendor";
                },
            },
        },
    },
    server: {
        host: true,
    },
});
