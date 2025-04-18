import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/support-chat-widget/',
  build: {
    lib: {
      entry: 'src/widget.tsx',
      name: 'SupportChatWidget',
      fileName: 'support-chat-widget',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'support-chat-widget.css';
          return assetInfo.name;
        },
      },
    },
  },
});