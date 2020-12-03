<template>
  <div class="weui-search-bar" style="background: none;">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
        <a href="javascript:" class="weui-icon-clear"></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      focusing: false
    }
  },
  methods: {
    focusState: function(){
      this.focusing = !this.focusing;
    }
  }
}
</script>

<style scoped>
.cancel_btn{
  color: #fff;
  font-size: .15rem;
}
</style>
