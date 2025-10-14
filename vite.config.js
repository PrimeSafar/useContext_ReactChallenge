import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // React Compiler configuration (if needed)
          ['babel-plugin-react-compiler', { 
            // Add any React Compiler options here
          }]
        ],
      },
    }),
    // Tailwind CSS as a separate Vite plugin
    tailwindcss(),
  ],
})