import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 这里的 base 必须和你的 GitHub 仓库名称一致，且前后都要有斜杠
  // 如果你的仓库名是 'ps'，这里就填 '/ps/'
  base: '/ps/', 
  plugins: [react()],
})