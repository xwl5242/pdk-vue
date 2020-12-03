<template>
  <div class="main">
    <div class="weui-panel" style="min-height: 100vh;">
      <Search />
      <div class="weui-panel__bd banner">
        <MSwiper :swiperList="swiperList"/>
      </div>
      <TaskList :taskList="taskList"/>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import MSwiper from "./MSwiper";
import TaskList from "./TaskList";

export default {
  name: "Home",
  components: {Search, MSwiper, TaskList},
  data() {
    return {
      swiperList: [
        {
          url: 'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01xKQbdn2JJi3QUZZYI_!!2053469401.jpg'
        },
        {
          url: 'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01QmKHuc2JJi3QzOQ8D_!!2053469401.jpg'
        },
        {
          url: 'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01mOgpvy2JJi3ZdYmyP_!!2053469401.jpg'
        }
      ],
      taskList: []
    }
  },
  created() {
    this.$http.get('task/list/0').then(res=>{
      this.taskList = res.data['task_list']
    })
  }
}
</script>

<style scoped>
.banner {
  top: 0;
  width: 92vw;
  height: 20vh;
  margin: 0 auto;
  font-size: .16rem;
}

.main {
  width: 100vw;
  height: 100%;
  position: fixed;
  overflow: scroll;
  font-size: .18rem;
}

.main > div{
  background: linear-gradient(to bottom, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}
</style>
