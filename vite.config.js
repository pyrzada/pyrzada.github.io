import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        target: "es2020",
        cssCodeSplit: true,
        chunkSizeWarningLimit: 800,
        rollupOptions: {
            output: {
                // Only split out the truly heavy isolated libs.
                // React + react-dom + react-router and any lib that consumes
                // them (react-vertical-timeline, use-sync-external-store) stay
                // in the main bundle so default-export interop is correct
                // across chunks. Splitting React causes
                // `Cannot read properties of undefined (reading 'useLayoutEffect')`.
                manualChunks: (id) => {
                    if (!id.includes("node_modules")) return;
                    if (id.includes("three") || id.includes("@react-three")) return "vendor-three";
                    if (id.includes("framer-motion")) return "vendor-motion";
                    if (id.includes("react-icons")) return "vendor-icons";
                    if (id.includes("lenis")) return "vendor-lenis";
                    if (id.includes("@emailjs")) return "vendor-email";
                    // Everything else (React, react-dom, react-router,
                    // react-vertical-timeline, helpers, etc) goes to main.
                    return undefined;
                },
            },
        },
    },
    server: {
        host: true,
    },
});
