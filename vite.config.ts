import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Travel-Booking-App/', 
=======
  base: '', // Add this line (replace with your repo name)
>>>>>>> 6a73ce5 (Major Improvements)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
