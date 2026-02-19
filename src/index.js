/**
 * Lire 轻量级前端框架
 * 核心功能：响应式数据、模板渲染、事件绑定
 * Slogan: 轻一点，快一点，简单一点。
 */
class Lire {
    /**
     * 构造函数
     * @param {Object} options 配置项
     * @param {string} options.el 挂载节点选择器
     * @param {Object} options.data 响应式数据
     * @param {Object} options.methods 方法集合
     * @param {string} options.template 模板字符串
     */
    constructor(options) {
        // 初始化核心属性
        this.$el = document.querySelector(options.el)
        this.$data = options.data || {}
        this.$methods = options.methods || {}
        this.$template = options.template || ''

        // 绑定方法的 this 指向
        this._bindMethods()
        // 数据响应式处理
        this._reactive()
        // 首次渲染视图
        this._render()
    }

    /**
     * 私有方法：绑定 methods 中方法的 this 指向
     */
    _bindMethods() {
        for (const key in this.$methods) {
            this[key] = this.$methods[key].bind(this)
        }
    }

    /**
     * 私有方法：实现响应式数据
     */
    _reactive() {
        const that = this
        for (const key in this.$data) {
            Object.defineProperty(this, key, {
                get() {
                    return that.$data[key]
                },
                set(newVal) {
                    if (that.$data[key] === newVal) return
                    that.$data[key] = newVal
                    that._render() // 数据变更自动重新渲染
                }
            })
        }
    }

    /**
     * 私有方法：编译模板（替换 {{}} 和 @click）
     * @param {string} template 原始模板
     * @returns {string} 编译后的 HTML
     */
    _compile(template) {
        let html = template
        // 替换 {{ 变量 }} 为实际数据
        html = html.replace(/\{\{(.+?)\}\}/g, (_, exp) => {
            const key = exp.trim()
            return this.$data[key] ?? ''
        })
        // 替换 @click="方法名" 为原生 onclick
        html = html.replace(/@click="(.+?)"/g, (_, methodName) => {
            const name = methodName.trim()
            return `onclick="app.${name}()"`
        })
        return html
    }

    /**
     * 私有方法：渲染视图
     */
    _render() {
        if (!this.$el) return
        const compiledHtml = this._compile(this.$template)
        this.$el.innerHTML = compiledHtml
    }
}

// 暴露给外部使用
export default Lire