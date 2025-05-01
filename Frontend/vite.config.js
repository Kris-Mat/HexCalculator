import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT) || 5173, 
  },
  plugins: [react()],
})
