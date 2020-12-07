<template>
  <div class="main">
    <div class="user-bg weui-panel">
      <div class="title weui-flex">
        <div class="left weui-flex__item">
          <router-link to="/">
            <span style="color: #fff;"><i class="iconfont icon-back" style="font-size: .2rem;"></i></span>
          </router-link>
        </div>
        <div class="center weui-flex__item">
          <span>做任务前必看</span>
        </div>
        <div class="right weui-flex__item">
          <span>举报</span>
        </div>
      </div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_appmsg">
          <TaskList :taskList="taskList"/>
        </div>
      </div>
      <div class="opt-step weui-panel weui-panel_access">
        <div class="weui-panel__hd">任务步骤<em style="color: #aaa;">(请参照以下步骤完成任务)</em></div>
        <div class="weui-panel__bd" style="padding: .15rem;">
          <p style="color: #FE3539;">1.点击复制链接/口令按钮，打开拼夕夕去完成。</p>
          <textarea class="task-passwd">{{ curTask['task_passwd'] }}</textarea>
          <a href="javascript:" class="weui-btn weui-btn_primary">复制链接/口令</a>
        </div>
        <div class="weui-panel__bd step2">
          <p style="color: #FE3539;">2.参照示例验证图，按照示例图的提示和要求上传正确的截图。</p>
          <div class="weui-flex imgs">
            <div class="left weui-flex__item">
              <img :src="validSimpleUrl" @click="showGallery(validSimpleUrl)"/>
            </div>
            <div class="left weui-flex__item">
              <div class="uploader weui-uploader__input-box" v-show="!uploadValidImg">
                <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
              </div>
              <img v-show="uploadValidImg" :src="taskValidUrl" @click="showGallery(taskValidUrl)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="next-btn">
      <a @click.prevent="assist" class="weui-btn_cell weui-btn_cell-default">报名</a>
    </div>
    <div class="weui-gallery" v-show="isShowImg" @click="hideGallery">
      <span class="weui-gallery__img" :style="'background-image: url('+showImgUrl+');'"></span>
    </div>
  </div>
</template>

<script>
import TaskList from './TaskList'

export default {
  name: 'TaskDetail',
  components: {TaskList},
  data () {
    return {
      taskId: '',
      curTask: {},
      taskList: [],
      isShowImg: false,
      showImgUrl: '',
      taskValidUrl: '',
      uploadValidImg: false,
      validSimpleUrl: 'http://img.quanchonger.com/simple.jpg'
    }
  },
  created () {
    this.taskId = this.$route.params.taskId
    this.$http.get('task/detail/' + this.taskId).then(res => {
      this.curTask = res.data['task_detail']
      this.taskList.push(res.data['task_detail'])
    })
  },
  methods: {
    assist: function () {
      if (this.taskValidUrl) {

      } else {
        showMsg('请上传验证图！')
      }
    },
    hideGallery: function () {
      this.showImgUrl = ''
      this.isShowImg = false
    },
    showGallery: function (url) {
      this.isShowImg = true
      this.showImgUrl = url
    }
  }
}
</script>

<style scoped>
.weui-gallery {
  display: block;
}

.main {
  font-size: .14rem;
}

.main .user-bg {
  min-height: 100vh;
  background: url('../../static/img/user_bg.png') no-repeat #f6f6f6;
  background-size: 100% 1.25rem;
}

.user-bg .title {
  color: #fff;
  height: .55rem;
  text-align: center;
  align-items: center;
}

.user-bg .title .left {
  text-align: left;
  padding-left: .1rem;
  font-size: .18rem;
}

.user-bg .title .center {
  justify-content: center;
  font-size: .16rem;
  white-space: nowrap;
}

.user-bg .title .right {
  text-align: right;
  justify-content: flex-end;
  font-size: .14rem;
  margin-right: .1rem;
}

.user-bg .opt-step {
  width: 92vw;
  margin: -.1rem auto;
  border-radius: .1rem;
}

.user-bg .task-passwd {
  width: 88%;
  color: #000;
  resize: none;
  border: none;
  outline: none;
  padding: .2rem;
  font-weight: 400;
  font-size: .16rem;
  margin-top: .2rem;
  word-break: normal;
  background: #F8F9FB;
  word-wrap: break-word;
  white-space: pre-wrap;
  vertical-align: baseline;
  font-family: Arial, Helvetica, sans-serif, Microsoft YaHei !important;
}

.user-bg .opt-step a {
  width: auto;
  color: #FF334D;
  margin-right: 0;
  margin-top: .1rem;
  background: #F9D5D3;
}

.user-bg .opt-step .step2 {
  padding: .15rem;
  margin-bottom: .6rem;
}

.user-bg .opt-step .step2 .imgs {
  margin-top: .1rem;
}

.user-bg .opt-step .step2 .imgs div {
  text-align: center;
}

.user-bg .opt-step .step2 .imgs div img {
  width: 95%;
  height: 95%;
  background-size: cover;
  border-radius: .1rem;
}

.user-bg .opt-step .step2 .uploader {
  width: 95%;
  height: 95%;
  margin-left: .05rem;
  border-radius: .1rem;
}

.main .next-btn {
  padding: 0 .1rem;
}

.main .next-btn a {
  bottom: 0rem;
  position: fixed;
  width: 95vw;
  color: #fff;
  border-radius: .15rem;
  background: linear-gradient(to right, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}
</style>
