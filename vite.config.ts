import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// cors에러로 프록시 설정 추가
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://extory.co",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
