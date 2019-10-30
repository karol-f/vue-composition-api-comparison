import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueCompositionApi from "@vue/composition-api";
import vClickOutside from "v-click-outside";

import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// styles
import "@/styles/main.scss";

Vue.use(VueCompositionApi);
Vue.use(vClickOutside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
