import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Travel-Booking-App/', // Add this line (replace with your repo name)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
