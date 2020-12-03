<template>
  <div class="main">
    <div class="user-bg weui-panel">
      <div class="weui-panel__bd">
        <a href="javascript:" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd header-img">
            <img class="weui-media-box__thumb" src="../../static/img/header.jpg">
          </div>
          <div class="weui-media-box__bd">
            <div class="user-info">
              <h4 class="weui-media-box__title" style="color: #fff;">快乐生活</h4>
              <div class="rechange">
                <div class="label"><i class="iconfont icon-jewelry"></i></div>
                <span>会员</span>
                <i class="iconfont icon-more" style="height: .16rem; line-height: .16rem;"></i>
              </div>
            </div>
            <div class="user-info">
              <p class="weui-media-box__desc" style="color: #f5c8b8;padding-top: .02rem;">邀请码：viFWE3O92S</p>
              <div onclick="copyInviteCode();" class="copy">复制</div>
            </div>
          </div>
        </a>
      </div>
      <div class="weui-panel__bd">
        <div class="weui-flex activity">
          <div class="weui-flex__item" style="max-width: calc(2vw);margin-top: .08rem;">
            <img src="../../static/img/icons/sub.png"/>
          </div>
          <div class="weui-flex__item">
            <span>邀好友赚99金币</span>
          </div>
          <div class="weui-flex__item">
            <a class="weui-btn_cell weui-btn_cell-default">立即邀请</a>
          </div>
        </div>
      </div>
      <div class="weui-panel sales">
        <div class="user-activity weui-panel__bd">
          <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01n3aGpm2JJi3QIpMPX_!!2053469401.jpg"/>
        </div>
      </div>
      <div class="user-function weui-panel weui-panel_access">
        <div class="weui-panel__hd">功能列表</div>
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells menu-list">
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" href="javascript:">
                <div class="weui-cell__hd"><img src="../../static/img/icons/record.png"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p>我的接单</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" href="javascript:">
                <div class="weui-cell__hd"><img src="../../static/img/icons/folder.png"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p>我的任务</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" href="javascript:">
                <div class="weui-cell__hd"><img src="../../static/img/icons/msg.png"></div>
                <div class="weui-cell__bd weui-cell_primary">
                  <p>我的消息</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
.weui-panel:before {
  border-top: none;
}

.weui-panel:after {
  border-bottom: none;
}

.header-img {
  width: 80px !important;
  height: 80px !important;
}

.header-img img {
  border-radius: 50%;
  border: solid .01rem #FFC45F;
}

.main {
  background-color: #F9F9F9;
}

.main .user-bg {
  min-height: 100vh;
  background: url('../../static/img/user_bg.png') no-repeat #f6f6f6;
  background-size: 100% 1.65rem;
}

.main .activity {
  color: #fd5647;
  margin: 0 auto;
  max-width: 80vw;
  padding: 0 .2rem;
  min-height: .6rem;
  font-size: .15rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  border-radius: .15rem;
  background: #fff;
  /*background: linear-gradient(to right, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);*/
}

.main .activity i {
  margin-right: .05rem;
}

.main .activity a {
  float: right;
  height: .1rem;
  color: #fff;
  font-size: .13rem;
  line-height: 0rem;
  display: inline-flex;
  border-radius: .15rem;
  background: linear-gradient(to right, rgb(252, 54, 75) 0%, rgb(254, 115, 66) 100%);
}

.main .activity img {
  width: .2rem;
  height: .2rem;
}

.user-function {
  width: 92vw;
  margin: .05rem auto;
  border-radius: .05rem;
}

.menu-list {
  font-size: .16rem;
}

.menu-list img {
  width: .2rem;
  height: .2rem;
  margin-right: .16rem;
  display: block;
  background-size: cover;
}

.menu-list a .weui-cell__hd {
  width: .28rem;
}

.user-info {
  width: 100%;
  height: .285rem;
  margin-top: .02rem;
}

.user-info h4,
.user-info p {
  width: 60%;
  float: left;
}

.user-info div {
  float: left;
  font-size: .14rem;
}

.user-info .rechange {
  color: #fff;
  display: flex;
  height: .22rem;
  align-items: center;
  border-radius: .2rem;
  padding-right: .05rem;
  /*background-color: #000;*/
  background: linear-gradient(to right, rgb(255, 161, 0) 0%, rgb(255, 198, 100) 100%);
}

.user-info .rechange .label {
  width: .22rem;
  height: .22rem;
  text-align: center;
  border-radius: 50%;
  padding-left: .02rem;
}

.user-info .rechange .label i {
  color: #fff;
  width: .2rem;
  height: .2rem;
}

.user-info .copy {
  width: 20%;
  color: #d4724f;
  text-align: center;
  border-radius: .1rem;
  background-color: #f5c8b8;
}

.sales {
  width: 92vw;
  margin: 0 auto;
  background: 0 0;
  font-size: .16rem;
}

.sales img {
  width: 100%;
  background-size: cover;
  border-radius: .05rem;
}

.main .user-activity {
  margin-top: .1rem;
}
</style>
