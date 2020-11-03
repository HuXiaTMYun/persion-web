<template>
  <div class="container">
    <IndexBlog></IndexBlog>
  </div>
</template>

<script>
import IndexBlog from "../components/index/index-blog";
import { PLF_NAME } from "assets/properties.js";
export default {
  layout: "error",
  data() {
    return {};
  },
  head() {
    return {
      title: PLF_NAME
    };
  },
  // 当请求的资料获取失败时跳入使用404 layout
  // asyncData ({ error }) {
  //   return error({ statusCode: 404, message: '您找的资料好像飞升了.....' });
  // },
  mounted() {},
  beforeUpdate() {
    localStorage.setItem("close", Math.round(Math.random() * 100).toString());
  },
  components: {
    IndexBlog
  }
};
</script>

<style>
</style>
