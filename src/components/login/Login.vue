<template>
    <!--<el-row type="flex" justify="center">-->
      <!--<el-col :span="6" ><div class="grid-content bg-purple-light">-->
        <!--<el-input v-model="input" placeholder="请输入内容"></el-input>-->
        <!--<el-input v-model="input" type="password" placeholder="请输入密码"></el-input>-->
        <!--<el-button type="primary" @click="go">主要按钮</el-button>-->
        <!--&lt;!&ndash;<router-link to="/Register">切换到注册组件</router-link>&ndash;&gt;-->
      <!--</div></el-col>-->
    <!--</el-row>-->
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
        <label class="weui_label">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <input class="weui_input" type="password" id="password" name="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="weui_cell"></div>
    <div class="weui_btn_area" style="margin-top:80px"> <a class="weui_btn weui_btn_primary" type="submit">登&nbsp;&nbsp;&nbsp;&nbsp;录</a> </div>
    <div class="reg-bar" style="padding: 4%">
      <a class="reg" @click="reg">立即注册</a>
      <a class="forget" @click="forget">忘记密码</a>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Login',
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
    forget: function () {
      this.$router.push({path: '/Forget'})
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
  .reg-bar .forget { float: left; }
  @media screen and (max-width: 500px) {
    * { box-sizing: border-box; }
    .reg-bar { width: 100%; }
  }
</style>
