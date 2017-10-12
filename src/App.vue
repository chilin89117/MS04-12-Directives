<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <h3 v-text="'Some text'"></h3>
        <h3 v-html="'<em>Hello World!</em>'"></h3>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- Globally-registered custom directive -->
        <h3 v-highlight:bg.delayed="'lime'">Color this!</h3>
        <!-- Locally-registered custom directive -->
        <h3 v-local-highlight:bg.delayed.blink="{mainColor: 'lightblue',
                                                 altColor: 'red',
                                                 delay: 5000,
                                                 blinkRate: 500,}">Color this too!</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          var delay = 0;
          if(binding.modifiers['delayed']) {    // Set delay
            delay = binding.value.delay;
          }
          if(binding.modifiers['blink']) {      // If 'blink' modifier, alternate colors
            let mainColor = binding.value.mainColor;
            let altColor = binding.value.altColor;
            let currentColor = mainColor;

            setTimeout(() => {
              setInterval(() => {
                currentColor == mainColor ? currentColor = altColor : currentColor = mainColor;
                if(binding.arg == 'bg') {
                  el.style.backgroundColor = currentColor;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.blinkRate);
            }, delay);
          } else {                             // If no 'blink' modifier, just set color
            setTimeout(() => {
              console.log('hello');
              if(binding.arg == 'bg') {
                el.style.backgroundColor = binding.value.mainColor;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        },
      },
    },
  };
</script>
