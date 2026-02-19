### 一、Lire 框架 README.md
```markdown
# Lire

> 轻一点，快一点，简单一点的前端框架。

## 介绍
Lire 是一个超轻量级的前端框架，核心实现了响应式数据、模板渲染和事件绑定，适合学习前端框架原理，也可用于小型项目。

## 安装
```bash
npm install lire
```

## 快速使用
```html
<!DOCTYPE html>
<html>
<head>
  <title>Lire 示例</title>
</head>
<body>
  <div id="app"></div>

  <script type="module">
    import Lire from 'lire'

    window.app = new Lire({
      el: '#app',
      data: {
        msg: 'Hello Lire!',
        count: 0
      },
      methods: {
        add() {
          this.count++ // 直接用 this 访问数据，更友好
        },
        changeMsg() {
          this.msg = 'Lire 响应式数据生效！'
        }
      },
      template: `
        <div>
          <h1>{{ msg }}</h1>
          <p>计数：{{ count }}</p>
          <button @click="add">+1</button>
          <button @click="changeMsg">修改文案</button>
        </div>
      `
    })
  </script>
</body>
</html>
```

## 核心功能
1. **响应式数据**：修改 `this.xxx` 自动更新视图
2. **模板渲染**：支持 `{{ 变量名 }}` 插值语法
3. **事件绑定**：支持 `@click` 点击事件绑定

## 许可证
MIT
```

### 二、create-lire 脚手架 README.md
```markdown
# create-lire

> 官方脚手架，一键创建 Lire 框架项目

## 使用方法
```bash
# npm
npx create-lire my-lire-app

# yarn
yarn create lire my-lire-app

# pnpm
pnpm create lire my-lire-app
```

## 启动项目
```bash
cd my-lire-app
npm install
npm run dev
```

## 项目说明
- 脚手架生成的项目默认使用 Vite 作为开发服务器
- 项目内置 Lire 框架依赖，开箱即用
- 启动后访问 `http://localhost:5173` 即可看到示例页面

## 许可证
MIT
```

### 总结
1. **Lire 框架文档**：聚焦框架本身的安装、使用和核心功能，面向框架使用者，示例简洁易懂。
2. **create-lire 脚手架文档**：聚焦脚手架的使用方式和项目启动流程，补充了项目相关说明，降低新手使用门槛。
3. 两份文档均保持简洁清晰的风格，符合轻量级框架的定位，同时覆盖了用户最核心的使用需求。