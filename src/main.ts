import { createApp } from "vue";
// import './style.css'

// 引入 ant-design-vue 组件库
import Antd from "ant-design-vue";

// 引入组件库样式表文件
import "ant-design-vue/dist/reset.css";

// 引入路由
import router from "./router";

// 引入 uno.css
import "virtual:uno.css";

import App from "./App.vue";

const app = createApp(App);
app.use(Antd);
app.use(router).mount("#app");
