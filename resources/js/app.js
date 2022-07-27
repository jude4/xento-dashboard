import Vue from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue";
import { InertiaProgress } from "@inertiajs/progress";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "boxicons/css/boxicons.min.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "boxicons/css/boxicons.min.css";
// import "@mdi/font/css/materialdesignicons.css";
// import "material-design-icons-iconfont/dist/material-design-icons.css";
// import "material-icons/iconfont/material-icons.css";

Vue.use(Vuetify);

Vue.use(Vuesax, {});
Vue.component("inertia-link", Link);
Vue.component("inertia-head", Head);
Vue.mixin({ methods: { route } });

InertiaProgress.init({
    color: "#00B5E2",

    includeCSS: true,

    showSpinner: true,
});
createInertiaApp({
    title: (title) => `${title} - Easycare`,
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        Vue.use(plugin);
        new Vue({
            vuetify: new Vuetify({
                theme: { dark: false },
            }),

            render: (h) => h(App, props),
        }).$mount(el);
    },
});
