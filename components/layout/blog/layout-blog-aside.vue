<template>
  <div class="sidebar">
    <p class="sidebar-tab">
      <span></span>相关导读
    </p>

    <a class="active" href="#home">第一章 初识java</a>
    <a href="#">第二章 Hello Word!</a>
    <a href="#">第三章 变量</a>
    <a href="#">第四章 函数</a>
  </div>
</template>

<script>
    export default {
        head () {
          return {
          }
        },
        name: "layout-blog-aside",
        mounted() {
        },
    }
</script>

<style scoped>
  body {
    margin: 0;
    font-family: "Lato", sans-serif;
  }

  .sidebar-tab {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
  }

  .sidebar-tab span{
    width:3px;
    height: 20px;
    background: #333;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    margin-top: -3px;
  }

  .sidebar {
    margin: 0;
    width: 300px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    padding-top: 20px;
  }

  .sidebar a {
    display: block;
    color: rgba(0, 0, 0, 0.35);
    padding: 16px;
    text-decoration: none;
    width: 180px;
    vertical-align:middle;
    margin-left: auto;
    margin-right: auto;
    /*text-align: center;*/
    border-bottom: 2px solid #f1f1f1;
  }

  .sidebar a.active {
    /*background-color: #4CAF50;*/
    color: black;
    border-bottom: 2px solid var(--dark);
  }

  .sidebar a:hover:not(.active) {
    /*background-color: #555;*/
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    /*color: white;*/

  }


  div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
  }

  /*屏幕小于700*/
  @media screen and (max-width: 700px) {
    .sidebar {
      display: none;
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }

  /*屏幕小于400*/
  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }
</style>
