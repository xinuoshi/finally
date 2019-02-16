<template>
  <form style="margin:8px" action="#" method="post" >
    <h3 class="demos-title" style="margin-bottom:50px; margin-top:50px">少年程</h3>
    <div class="weui_cell">
      <div class="weui_cell_hd">
        <label class="weui_label">手机号：</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input" type="tel" id="tell" name="tell" placeholder="请输入手机号">
      </div>
    </div>
    <div class="weui_cell">
      <div class="weui_cell_hd">
        <label class="weui_label">验证码：</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input" type="certifycode" id="certifycode" name="certifycode" placeholder="请输入验证码">
      </div>
      <div class="weui_cell_ft">

        <input style="width:117px;" type="button" class="weui_btn weui_btn weui_btn_mini weui_btn_primary" value="获取验证码"  onclick="clickButton(this)"/>  </div>
    </div>
    <div class="weui_cell">
      <div class="weui_cell_hd">
        <label class="weui_label">新密码：</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input" type="password" id="newpassword" name="newpassword" placeholder="请输入新密码">
      </div>
    </div>
    <div class="weui_cell">
      <div class="weui_cell_hd">
        <label class="weui_label">确认密码：</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input" type="password" id="r_password" name="r_password" placeholder="请重复新密码">
      </div>
    </div>
    <div class="weui_cell"></div>
    <div class="weui_btn_area" style="margin-top:80px"> <a class="weui_btn weui_btn_primary" type="submit" @click="Nav">修改并登录</a> </div>
    <div class="reg-bar" style="padding: 4%">
      <a class="login" @click="login">立即登陆</a>
      <a class="reg" @click="reg">立即注册</a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Forget',
  data: function () {
    return {
      return: {
        input: ''
      }
    }
  },
  methods: {
    reg: function () {
      this.$router.push({path: '/Register'})
    },
    login: function () {
      this.$router.push({path: '/Login'})
    },
    Nav: function () {
      this.$router.push({path: '/NavMenu'})
    }
  }
}
</script>

<style scoped>
  @import "../../css/demos.css";
  @import "../../css/jquery-weui.css";
  @import "../../css/phone.css";
  @import "../../css/weui.min.css";
  .reg-bar { width: 360px; margin: 5% auto 0; font-size: 14px; overflow: hidden;}
  .reg-bar a { color: #f50; text-decoration: none; }
  .reg-bar a:hover { text-decoration: underline; }
  .reg-bar .reg { float: right; }
  .reg-bar .login { float: left; }
  @media screen and (max-width: 500px) {
    * { box-sizing: border-box; }
    .reg-bar { width: 100%; }
  }
</style>
