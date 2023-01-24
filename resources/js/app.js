import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { InertiaProgress } from '@inertiajs/progress';


import Nav from  './components/Nav.vue';
import CLink from './components/CLink.vue'
 

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob('./pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(plugin)

      .component('CLink', CLink)
      .component('Nav', Nav)
      .mount(el)
  },
});

// InertiaProgress.init();

