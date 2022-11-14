import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// #region 匯入Icon

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// /* import specific icons */
// import { faCheck, fas } from "@fortawesome/free-solid-svg-icons";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// /* add icons to the library */
library.add(fas, fab);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// #endregion

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
}).$mount("#app");
