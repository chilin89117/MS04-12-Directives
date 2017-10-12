<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <hr>
        <button class="btn btn-success" v-custom:click="clicked">Custom Directives</button>
        <hr>
        <div class="ex" v-custom:mouseenter="mouseEnter" v-custom:mouseleave="mouseLeave">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'custom' : {
        bind(el, binding) {
          let arg = binding.arg;
          let val = binding.value;
          el.addEventListener(arg, val);
        },
      },
    },
    methods: {
      clicked() {
        alert('Executing custom function!');
      },
      mouseEnter() {
        console.log('Mouse entered!');
      },
      mouseLeave() {
        console.log('Mouse left!');
      },
    },
  };
</script>

<style lang="css">
  .ex {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
  }
</style>
