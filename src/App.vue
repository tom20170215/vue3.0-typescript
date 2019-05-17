<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss" scoped>
@import './style/mixin.scss';
#app {
  height: 100vh;
  max-width: 100vw;
  @include flex-layout(space-between, center, column);
  color: $font;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
