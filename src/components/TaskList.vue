<template>
  <div>
    <div v-for="item in taskList" :key="item.id" class="weui-panel__bd main-list">
      <div class="weui-cells" @click="showDetail(item.id)">
        <div class="weui-cell">
          <div href="javascript:" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="http://img.quanchonger.com/header.jpg">
            </div>
            <div class="weui-media-box__bd" style="width: 37vw;">
              <h4 class="weui-media-box__title">{{ item.task_title }}</h4>
              <p class="weui-media-box__desc">剩余数量：<span class="remain">{{ item.task_remain }}</span>/{{ item.task_total }}</p>
            </div>
          </div>
          <div class="weui-cell__ft gold-coins">+{{item.task_price}}金币</div>
          <span v-show="item.showBadge" class="weui-badge">{{ item.task_badge }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: ['taskList'],
  methods: {
    showDetail: function(itemId){
      this.$router.push({
        name: 'TaskDetail',
        params: {
          taskId: itemId
        }
      })
    }
  }
}
</script>

<style scoped>
.main-list {
  width: 92vw;
  margin: .06rem auto;
  border-radius: .1rem;
}

.main-list div.weui-cells {
  border-radius: .1rem;
}

.main-list div.weui-cells img {
  border-radius: 50%;
}

.main-list div.weui-cells .weui-cell {
  padding: .08rem;
}

.main-list div.weui-cells .weui-cell h4 {
  color: #000;
}

.main-list div.weui-cells .weui-cell p {
  color: #888;
}

.main-list div.weui-cells .weui-cell .gold-coins {
  right: -0.15rem;
  position: relative;
  font-size: .14rem;
  font-weight: 600;
  color: rgb(252, 54, 75);
}

.main-list div.weui-cells .weui-cell .remain {
  color: rgb(252, 54, 75);
}

.main-list div.weui-cells .weui-cell .weui-badge {
  position: absolute;
  right: 0rem;
  top: .1rem;
  border-radius: unset;
  background: linear-gradient(to bottom, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}
</style>
