<template>
  <div>
    <div class="header weui-panel">
      <div class="title weui-flex">
        <div class="left weui-flex__item">
          <router-link to="/">
            <span style="color: #fff;"><i class="iconfont icon-back" style="font-size: .2rem;"></i></span>
          </router-link>
        </div>
        <div class="center weui-flex__item">
          <span>发布任务</span>
        </div>
        <div class="right weui-flex__item">
          <span>任务教程</span>
        </div>
      </div>
      <div class="info weui-flex">
        <div :class="'left weui-flex__item ' + (translucent?'':'info-translucent')" @click="changeStep('1')">
          <span>1 填写任务需求</span>
        </div>
        <div :class="'left weui-flex__item ' + (!translucent?'':'info-translucent')" @click="changeStep('2')">
          <span>2 设置任务详情</span>
        </div>
      </div>
    </div>
    <div class="main" v-show="!secondStep">
      <div class="main-panel weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_text">
            <div class="weui-media-box__title">
              <i class="weui-icon-warn weui-icon_msg" style="width: .25rem;height: .25rem;"></i>
              <span style="font-size: .16rem;">任务类型：拼夕夕</span>
            </div>
          </div>
          <div class="weui-media-box weui-media-box_text">
            <div class="weui-flex">
              <div class="task-type weui-flex__item">
                <div class="weui-cells_checkbox">
                  <input type="checkbox" class="weui-check" name="checkbox1" checked="checked">
                  <i class="weui-icon-checked"></i><span>砍价任务</span>
                </div>
              </div>
              <div class="task-type weui-flex__item">
                <div class="weui-cells_checkbox">
                  <input type="checkbox" class="weui-check" name="checkbox1">
                  <i class="weui-icon-checked"></i><span>领现金任务</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-panel weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-cells">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">任务单数</label></div>
              <div class="weui-cell__bd">
                <input id="taskNum" class="weui-input" placeholder="需要多少人帮你完成" v-model="taskNum">
              </div>
            </div>
            <div class="weui-cell weui-cell_active weui-cell_access weui-cell_select weui-cell_select-after">
              <div class="weui-cell__hd"><label class="weui-label">有效时间</label></div>
              <div class="weui-cell__bd" @click="showDatePicker" :style="validTimeColor">{{dateStr}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-panel">
        <span class="intro">由于拼夕夕规则，以金额判断新老用户并不准确，大于0元即视为完成任务，0.01元也要通过！</span>
      </div>
      <div class="next-btn">
        <a @click.prevent="goSetTaskDetail" class="weui-btn_cell weui-btn_cell-default">下一步</a>
      </div>
    </div>
    <div class="main_2" v-show="secondStep">
      <div class="main-panel weui-panel">
        <div class="task-passwd weui-panel__bd">
          <textarea placeholder="请添加任务链接和完整任务口令(删除文字口令会失效)" v-model="taskPasswd"></textarea>
        </div>
      </div>
      <div class="main-panel weui-panel">
        <div class="task-passwd weui-panel__bd">
          <div class="weui-flex">
            <div class="weui-flex__item" style="text-align: center;">添加示例验证图</div>
          </div>
          <div class="weui-flex">
            <div class="weui-flex__item" style="text-align: center;color: #888;">下图为系统示例图，请替换</div>
          </div>
          <div class="weui-flex" style="margin-top: .2rem;">
            <div class="weui-flex__item" style="text-align: center;color: #888;">
              <img style="width: 80%;height: 80%;" src="../../static/img/test.jpeg" />
            </div>
          </div>
        </div>
      </div>
      <div class="next-btn">
        <a @click.prevent="doPublish" class="weui-btn_cell weui-btn_cell-default">发布</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      taskNum: '',
      validTime: '',
      taskPasswd: '',
      secondStep: false,
      translucent: true,
      dateStr: '选择任务的有效时间',
      validTimeColor: 'color: #B2B2B2;'
    }
  },
  methods: {
    goSetTaskDetail: function(){
      if(this.taskNum && this.validTime){
        this.secondStep = !this.secondStep
        this.translucent = !this.translucent
      }else{
        showMsg('请填写完整信息!')
      }
    },
    doPublish: function(){
      this.$http.post('task/add', {
        'mem_id': '1',
        'task_passwd': this.taskPasswd,
        'task_valid_url': 'http://img.quanchonger.com/XWL.jpeg',
        'task_title': '测试',
        'task_type': '0',
        'task_remain': '100',
        'task_total': '100',
        'task_price': '100',
        'task_valid_time': this.validTime
      }).then(res=>{
        if(res.data.data.code===1000){
          this.$router.push('/')
        }
      });
    },
    showDatePicker: function(){
      let _this = this;
      weui.datePicker({
        start: 1990,
        end: new Date().getFullYear(),
        onChange: function(result) {
          // 时间选择框改变事件
        },
        onConfirm: function(result) {
          _this.validTime = result[0] + '-' + result[1] + '-' + result[2];
          _this.dateStr = result[0] + '年' + result[1] + '月' + result[2] + '日';
          _this.validTimeColor = 'color: #000;'
        },
        title: '日期选择'
      });
    },
    changeStep: function(step) {
      if(step === '1'){
        this.secondStep = false;
        this.translucent = true;
      }else if(step === '2'){
        if(this.taskNum && this.validTime) {
          this.secondStep = true;
          this.translucent = false;
        }else{
          showMsg('请填写完整信息!');
        }
      }
    }
  }
}
</script>

<style scoped>
.header {
  top: 0;
  left: 0;
  width: 100vw;
  color: #fff;
  height: 1.1rem;
  font-size: .18rem;
  position: absolute;
  background: linear-gradient(to bottom, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}

.header .title,
.header .info {
  height: .55rem;
  text-align: center;
  align-items: center;
}

.header .title .left {
  text-align: left;
  padding-left: .1rem;
  font-size: .18rem;
}

.header .title .center {
  justify-content: center;
  font-size: .16rem;
  white-space: nowrap;
}

.header .title .right {
  text-align: right;
  justify-content: flex-end;
  font-size: .14rem;
  margin-right: .1rem;
}

.header .info .left,
.header .info .right {
  justify-content: center;
  font-size: .14rem;
  white-space: nowrap;
}

.info-translucent {
  opacity: 0.7;
}

.main,
.main_2 {
  padding: 0 .1rem;
  font-size: .16rem;
  margin-top: 1.1rem;
  position: absolute;
  min-height: calc(100vh - 1.1rem);
}

.main .next-btn, .main_2 .next-btn {
  bottom: .3rem;
  position: fixed;
  width: calc(95vw);
}

.main .next-btn a, .main_2 .next-btn a {
  color: #fff;
  border-radius: .15rem;
  background: linear-gradient(to right, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}

.main-panel {
  width: calc(95vw);
  margin-top: .1rem !important;
  border-radius: .05rem;
}

.main-panel .intro {
  color: #666;
  font-size: .14rem;
}

.main-panel .task-type i {
  color: #FF3151 !important;
}

.main-panel .task-type span {
  padding: 0 .05rem;
}

.weui-cells {
  font-size: .16rem;
  margin-top: 0;
}

.weui-cells::before {
  border: none;
}

.weui-picker__btn {
  background: linear-gradient(to right, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}

.main_2 .task-passwd {
  min-height: 1rem;
  padding: .1rem .1rem 0 .1rem;
}

.main_2 .task-passwd textarea {
  width: 100%;
  color: #888;
  resize: none;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: .16rem;
  min-height: .9rem;
  line-height: .24rem;
  word-break: normal;
  word-wrap: break-word;
  white-space: pre-wrap;
  vertical-align: baseline;
  font-family: Arial, Helvetica, sans-serif, Microsoft YaHei !important;
}

</style>
