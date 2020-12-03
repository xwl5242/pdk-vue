<template>
  <div id="app">
    <router-view />
    <BotTab />
  </div>
</template>

<script>
import BotTab from "./components/BotTab";

export default {
  name: 'App',
  data() {
    return {
      showBotTab: false
    }
  },
  components: {
    BotTab
  },
  methods: {

  }
}
</script>

<style>
  @import "../static/fonts/iconfont.css";
  @import "../static/css/weui.min.css";
  html {
    font-size: 100px;
  }
  body {
    background-color: #F9F9F9;
  }
</style>
