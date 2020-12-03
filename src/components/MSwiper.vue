<template>
  <swiper :options="swiperOptions" ref="mySwiper">
    <swiper-slide class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
      <img :src="item.url"/>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import {Swiper as swiper2, Autoplay} from 'swiper'
swiper2.use([Autoplay])
import 'swiper/swiper-bundle.css'
export default {
  name: "MSwiper",
  props: ['swiperList'],
  data() {
    return {
      swiperOptions: {
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true
      }
    }
  },
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

.swiper-container {
  height: 100%;
}
.swiper-slide {
  width: 92vw;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: .05rem;
  background-size: cover;
}
</style>
