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

- **Core**: React 18 (Hooks & Functional Components)
- **Styling**: Tailwind CSS (Utility-first)
- **Language**: TypeScript
- **Icons**: Font Awesome 6
- **Build Tool**: Vite 5

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

**🔥 Universal Configuration**: This project is configured with `base: './'` in `vite.config.ts`. This means it works out-of-the-box for **both** root domains (e.g., `example.com`, Cloudflare Pages) and subdirectories (e.g., `username.github.io/repo/`) without needing to modify the code.

### GitHub Pages Deployment

**Method 1: GitHub Actions (Recommended & Configured)**
The repository includes a pre-configured workflow in `.github/workflows/deploy.yml`.
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push your code to the `main` branch.
4. GitHub will automatically install dependencies, build the project, and deploy it.

**Method 2: The `gh-pages` package (Manual)**
If you prefer manual deployment from your local machine:
1. Install the package: `npm install gh-pages --save-dev`
2. Update `package.json`:
   ```json
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
3. Deploy. No extra configuration is needed.

### Custom Domain Setup

1. Register at [dynv6](https://dynv6.com).
2. Add a new domain and configure DNS settings.
3. Point domain to your deployment URL (CNAME/A Record).
4. Update DNS settings in your deployment platform.

## ⚙️ Customization

### Managing Links

Edit `constants.ts` to manage content.

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

- **核心**: React 18 (Hooks & 函数式组件)
- **样式**: Tailwind CSS (原子化 CSS)
- **语言**: TypeScript
- **图标**: Font Awesome 6
- **构建工具**: Vite 5

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

**🔥 通用配置说明**：本项目在 `vite.config.ts` 中已配置为相对路径 (`base: './'`)。这意味着无论你将其部署在根域名（如 Cloudflare Pages）还是子目录（如 GitHub Pages 的 `/repo/`），**都不需要修改代码**，直接构建即可使用。

### GitHub Pages 部署

**方式 A：使用 GitHub Actions (推荐 - 已配置)**
本项目已包含 `.github/workflows/deploy.yml` 配置文件。
1. 进入 GitHub 仓库页面，点击顶部的 **Settings** (设置)。
2. 点击左侧侧边栏的 **Pages**。
3. 在 **Build and deployment** 区域，将 **Source** 设置为 **GitHub Actions**。
4. 推送代码到 `main` 分支，GitHub 将自动触发构建并部署。

**方式 B：使用 gh-pages 分支 (手动)**
如果你习惯在本地手动发布：
1. 安装发布工具：`npm install gh-pages --save-dev`
2. 修改 `package.json` 的 `scripts`：
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. 运行 `npm run deploy` 即可自动打包并推送到 `gh-pages` 分支。

### Cloudflare Pages 部署

1. 将您的 GitHub 仓库连接到 Cloudflare Pages。
2. 设置构建选项：
   - **框架预设**: Vite / React
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
3. 点击部署。由于使用了相对路径配置，无需额外设置环境变量。

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
