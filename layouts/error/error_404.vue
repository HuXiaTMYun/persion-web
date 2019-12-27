<template>
  <div id="bg">
    <b-button id="go-home">回首页</b-button>
  </div>
</template>

<script>
  export default {
    name: 'error_404',
  };
</script>

<style scoped>
  #bg {
    width: 897px;
    height: 404px;
    margin: 0 auto;
    padding: 40px 0 60px;
    background: url('./assets/404_bg.jpg') no-repeat center center;
    position: relative;
  }

  #go-home {
    position: absolute;
    display: block;
    width: 172px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    background: #43B4E8;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    right: 240px;
    bottom: 114px;
  }
</style>
