<template>
  <div v-show="showBotTab" class="tab">
    <div class="weui-panel">
      <div class="weui-panel__bd">
        <div class="weui-flex activity">
          <div class="weui-flex__item tab-list">
            <router-link to="/">
              <i class="iconfont icon-viewgallery" :class="{active: curPath=='/'}"></i>
              <p :class="{active: curPath=='/'}">首页</p>
            </router-link>
          </div>
          <div class="weui-flex__item tab-list">
            <i class="iconfont icon-hot"></i>
            <p>热门</p>
          </div>
          <div class="weui-flex__item tab-list">
            <router-link to="/task">
              <div class="circle">
                <i class="iconfont icon-add"></i>
                <p>发布任务</p>
              </div>
            </router-link>
          </div>
          <div class="weui-flex__item tab-list">
            <i class="iconfont icon-favorite"></i>
            <p>喜欢</p>
          </div>
          <div class="weui-flex__item tab-list" @click="toUser">
              <i class="iconfont icon-atm" :class="{active: curPath=='/user'}"></i>
              <p :class="{active: curPath=='/user'}">我的</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BotTab",
  data() {
    return {
      showBotTab: true,
      curPath: '/'
    }
  },
  created() {
    let curPath = this.$router.history.current.path;
    this.showBotTab = curPath !== '/task' && curPath.indexOf('/taskDetail')<0;
    this.curPath = this.$router.history.current.path;
  },
  watch: {
    $route(to) {
      // 监听当前路由地址，如果不是跳转到发布任务页面，则显示底部tab
      this.showBotTab = to.path !== '/task' && to.path.indexOf('/taskDetail')<0;
      this.curPath = this.$router.history.current.path;
    }
  },
  methods: {
    toUser: function(){
      this.$router.push("/user");
    }
  }
}
</script>

<style scoped>
@import "../../static/css/tab.css";
</style>
