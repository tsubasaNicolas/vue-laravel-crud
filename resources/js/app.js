

require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('tareas-component', require('./components/TareasComponent.vue').default);

const app = new Vue({
    el: '#app',
});
