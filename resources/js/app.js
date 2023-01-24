

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


import Nav from  './components/Nav.vue';
import CLink from './components/CLink.vue'
import Layout from  './shared/Layout.vue';


createInertiaApp({
  async resolve(name) {
    const page = await resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob("./pages/**/*.vue")
    );

    if (!page.default.layout) {
      page.default.layout = Layout;
    }

    return page;
  },
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('CLink', CLink)
      .component('Nav', Nav)
      .mount(el)
  },
});




// InertiaProgress.init();

