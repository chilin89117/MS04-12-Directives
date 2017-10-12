import Vue from 'vue'
import App from './App.vue'

// Globally register custom directives
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    // Used in App.vue as: <p v-highlight:bg.delayed="'blue'">Color this</p>
    // 'lime' is the value
    // 'bg' is the argument
    // 'delayed' is the modifier

    var delay = 0;
    if(binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'bg') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
