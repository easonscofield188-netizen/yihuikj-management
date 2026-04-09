import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
// 导入 Element Plus 的中文语言包，确保日期选择器等组件显示中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 导入 Element Plus 的暗黑模式变量
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import './index.css'

const app = createApp(App)

// 全局注册 Element Plus 的所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 插件安装：Element Plus（配置中文）和 路由
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#root')
