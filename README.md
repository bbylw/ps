# WebNav Hub - PornNav (React Edition)

[English](#english) | [中文](#中文)

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/bbylw/PicGo@master/20241220015300647.png" alt="WebNav Hub Preview" width="100%">
</div>

<a name="english"></a>

## 🎨 Design Inspiration

This project's UI design and color scheme is directly inspired by Pornhub's iconic black and orange theme. The choice was deliberate, leveraging the instantly recognizable color palette that has become a cultural phenomenon.

- Primary Theme Color: `#ff9000` (Pornhub Orange)
- Background: `#0d0d0d` (Dark Black)
- Card Background: `#1a1a1a`
- Text: `#ffffff` (White)

## 🛠 Tech Stack

- **Core**: React 19 (Hooks & Functional Components)
- **Styling**: Tailwind CSS (Utility-first)
- **Language**: TypeScript
- **Icons**: Font Awesome 6
- **Build Tool**: Vite (Implicit)

## 🌟 Features

### Modern Architecture
- **Component-Based**: Clean separation of concerns with modular components (`Navbar`, `LinkCard`).
- **Data-Driven**: Content is decoupled from structure. Manage all links easily in `constants.ts`.
- **Type Safety**: Fully typed with TypeScript for robust development.

### Visual & Performance
- **Responsive Design**: Fluid grid layout powered by Tailwind CSS.
- **Smooth Animations**: CSS transitions and hover effects optimized for performance.
- **Dark Mode**: Native dark theme with carefully selected contrast ratios.
- **Security**: External links automatically include `rel="noopener noreferrer"`.

## 🚀 Deployment Options

### GitHub Pages Deployment (Detailed)

**Prerequisite: Configure Base Path**
If you are deploying to a subdirectory (e.g., `https://username.github.io/repo-name/`), you must update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repo-name/', // Your repository name with slashes
  // ...
})
```

**Method 1: GitHub Actions (Recommended)**
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. GitHub will guide you to create a workflow or use the "Static HTML" preset.
4. Once configured, every push to `main` will automatically build and deploy.

**Method 2: The `gh-pages` package (Manual)**
1. Install the package: `npm install gh-pages --save-dev`
2. Update `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`.

### Cloudflare Pages Deployment

1. Connect your GitHub repository to Cloudflare Pages.
2. Set build settings:
   - **Framework preset**: Vite / React
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Deploy and access via Cloudflare's URL.

### Custom Domain Setup

1. Register at [dynv6](https://dynv6.com).
2. Add a new domain and configure DNS settings.
3. Point domain to your deployment URL (CNAME/A Record).
4. Update DNS settings in your deployment platform.

## ⚙️ Customization

### Managing Links

Unlike the static HTML version, you don't need to touch the markup. Edit `constants.ts` to manage content.

**Add a new link:**
```typescript
// Inside constants.ts
{
  title: 'My New Site',
  url: 'https://example.com',
  iconClass: 'fa-solid fa-star' // FontAwesome class
}
```

### Modifying Categories

**Add a new category:**
```typescript
// Inside constants.ts
{
  id: 'new-section',
  title: 'New Section',
  links: []
}
```

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📄 License

This project is open-source and available under the MIT License.

---

<a name="中文"></a>

## 🎨 设计灵感

本项目的界面设计和配色方案直接借鉴自 Pornhub 的标志性黑橙配色。这是一个刻意的设计选择，利用了这个已成为文化现象的即时可识别配色方案。

- 主题主色：`#ff9000`（Pornhub 橙）
- 背景色：`#0d0d0d`（深黑色）
- 卡片背景：`#1a1a1a`
- 文字颜色：`#ffffff`（白色）

## 🛠 技术栈

- **核心**: React 19 (Hooks & 函数式组件)
- **样式**: Tailwind CSS (原子化 CSS)
- **语言**: TypeScript
- **图标**: Font Awesome 6
- **构建工具**: Vite

## 🌟 功能特点

### 现代架构
- **组件化设计**: 代码结构清晰，包含 `Navbar`、`LinkCard` 等独立组件。
- **数据驱动**: 内容与结构分离。所有链接数据均在 `constants.ts` 中集中管理。
- **类型安全**: 使用 TypeScript 开发，代码更健壮。

### 视觉与性能
- **响应式布局**: 基于 Tailwind CSS 的网格系统，完美适配各类屏幕。
- **平滑交互**: 优化过的过渡动画和悬停效果。
- **安全性**: 组件自动为所有外部链接添加 `rel="noopener noreferrer"`。

## 🚀 部署选项

### GitHub Pages 部署 (详细教程)

由于这是 React 单页应用 (SPA)，直接上传源码无法运行，必须先构建。

#### 第一步：配置路径 (非常重要)
如果你的项目不是部署在根域名（如 `username.github.io`），而是部署在子路径（如 `username.github.io/webnav-hub/`），你必须修改 `vite.config.ts`：
```typescript
// vite.config.ts
export default defineConfig({
  base: '/你的仓库名/', // 注意：前后都需要斜杠，例如 '/webnav-hub/'
  plugins: [react()],
})
```
*如果不配置这个，部署后页面将是白屏，因为资源路径会找不到。*

#### 第二步：选择部署方式

**方式 A：使用 GitHub Actions (推荐 - 自动化)**
这是目前最推荐的方式，配置一次，终身自动更新。
1. 进入 GitHub 仓库页面，点击顶部的 **Settings** (设置)。
2. 点击左侧侧边栏的 **Pages**。
3. 在 **Build and deployment** 区域:
   - **Source** 选择 **GitHub Actions**。
4. GitHub 会根据你的项目类型（Vite/React）建议一个 Workflow，或者你可以手动点击 Configure。
5. 确认并提交生成的 `.yml` 文件。
6. 以后每次你 push 代码到 `main` 分支，GitHub 都会自动构建并部署。

**方式 B：使用 gh-pages 分支 (传统方式)**
如果你习惯在本地手动发布，可以使用这个方法。
1. 在项目根目录安装发布工具：
   ```bash
   npm install gh-pages --save-dev
   ```
2. 修改 `package.json` 文件，添加 `homepage` 字段和 `scripts`：
   ```json
   {
     "homepage": "https://<你的GitHub用户名>.github.io/<仓库名>",
     "scripts": {
       "dev": "vite",
       "build": "tsc && vite build",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. 运行部署命令：
   ```bash
   npm run deploy
   ```
4. 此命令会自动打包项目，并将生成的 `dist` 文件夹推送到远程的 `gh-pages` 分支。
5. 最后去仓库 **Settings** > **Pages**，确保 **Source** 选择的是 `Deploy from a branch`，分支选择 `gh-pages`。

### Cloudflare Pages 部署 (推荐)

1. 将您的 GitHub 仓库连接到 Cloudflare Pages。
2. 设置构建选项：
   - **框架预设**: Vite / React
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
3. 部署并通过 Cloudflare 提供的 URL 访问。

### 自定义域名设置

1. 在 [dynv6](https://dynv6.com) 注册。
2. 添加新域名并配置 DNS 设置。
3. 将域名指向您的部署 URL。
4. 在部署平台更新 DNS 设置。

## ⚙️ 自定义设置

### 管理链接

无需修改 HTML 代码，只需编辑 `constants.ts` 文件即可管理内容。

**添加新链接:**
```typescript
// 在 constants.ts 的 links 数组中添加
{
  title: '新站点',
  url: 'https://example.com',
  iconClass: 'fa-solid fa-star' // FontAwesome 图标类名
}
```

### 修改分类

**添加新分类:**
```typescript
// 在 constants.ts 的 CATEGORIES 数组中添加
{
  id: 'new-section',
  title: '新板块',
  links: []
}
```

## 💻 本地开发

1. **安装依赖**:
   ```bash
   npm install
   ```

2. **本地运行**:
   ```bash
   npm run dev
   ```

3. **构建生产版本**:
   ```bash
   npm run build
   ```

## 📄 许可证

本项目采用 MIT 许可证开源。
