<template>
  <div class="footer">
<!--<div class="line"></div>-->
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#f50"
  text-color="#fff"
  active-text-color="#ffd04b"
>
  <el-menu-item index="1" class="el-menu-item">处理中心</el-menu-item>
  <el-menu-item index="2">我的工作台</el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4"><a target="_blank">订单管理</a></el-menu-item>
</el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu-item{width: 25%;}
.footer{
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
