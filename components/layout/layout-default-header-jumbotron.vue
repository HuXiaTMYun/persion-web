<template>
  <header>
    <div class="jumbotron bg-dark index-jumbotron" style="margin-top: 53px;">
      <div class="container text-white">
        <b-row>
          <b-col cols="4" offset="1">人生是一场游戏</b-col>
        </b-row>
        <b-row>
          <b-col cols="3" offset="4">是一场第一人称游戏</b-col>
          <b-col cols="2" offset="3">————只有一次</b-col>
        </b-row>
      </div>
    </div>
  </header>

</template>

<script>
    export default {
        name: "layout-default-header-jumbotron"
    }
</script>

<style scoped>
  .index-jumbotron {
    background: url("./assets/lx.jpg");
  }
</style>
