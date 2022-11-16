import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { ghPages } from "vite-plugin-gh-pages";
//import legacy from '@vitejs/plugin-legacy';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;


export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/js-travel/' : './',
  plugins: [
    vue(),
    ghPages(),
  ],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
    cors:false,
  },
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          // substr 是被淘汰語法，因此要改 slice
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      },
    },
  },
})
