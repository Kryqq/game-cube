import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/shared/components"),
            "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@typography": path.resolve(__dirname, "./src/shared/Typography"),
        },
    },
});
