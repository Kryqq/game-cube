import { defineConfig } from "vite"

import react from "@vitejs/plugin-react";
import path from "path";


 
export default defineConfig({
  plugins: [react()],
  base: '/game-cube/',
  preview: {
	port: 3005,
   },
 
   server: {
	port: 3001,
   },
  resolve: {
	alias: {
		"@":path.resolve(__dirname, "./src"),
		"@components":path.resolve(__dirname, "./src/shared/components"),
		"@hooks":path.resolve(__dirname, "./src/shared/hooks"),
		"@widgets":path.resolve(__dirname, "./src/widgets"),
		"@typography": path.resolve(__dirname, "./src/shared/Typography"),
		"@api": path.resolve(__dirname, "./src/shared/api"),
		"@pages": path.resolve(__dirname, "./src/pages"),
		"@store": path.resolve(__dirname, "./src/shared/store"),
	},
   },
})
