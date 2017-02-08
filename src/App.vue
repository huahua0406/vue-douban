<template>
  <div id="app">
    <v-header></v-header>
    <main id="main" v-show="!this.$store.state.searchFlag"><router-view></router-view></main>
    <v-footer></v-footer>
    <search></search>
  </div>
</template>

<script>
import vHeader from './components/header'
import vFooter from './components/footer'
import search from './components/search'

export default {
  name: 'app',
  components: {
    vHeader,
    vFooter,
    search
  }
}
</script>

<style lang="scss">
@import url(./assets/css/reset.css);
html,
body {
  height: 100%;
}
body {
  color: #111;
  //font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
}
#app {
  padding-bottom: 30px;
}
#main{
  padding-top: 48px;
  max-width: 580px;
  margin: auto;
  overflow: hidden;
}
$active-bg: #f8f8f8;
.line-spacing { line-height: 22px; word-wrap: break-word;}
.inline-close { letter-spacing: -3px; font-size: 0;}
.icon-box { display: inline-block; margin: 10px 15px 0 0; font-size: 12px; color: #d4d4d4;}
</style>
