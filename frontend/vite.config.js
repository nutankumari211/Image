// vite.config.js
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default {
plugins: [react()],
base: process.env.NODE_ENV === 'production' ? './' : '/',
};
