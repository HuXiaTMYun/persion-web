<template>
  <div>
    <BlogList></BlogList>
  </div>
</template>

<script>
import BlogList from "../../../../components/blog/blog-list";
import { TITLE_PLF_NAME } from "assets/properties.js";
export default {
  name: "index",
  data() {
    return {};
  },
  head() {
    return {
      title: this.$route.params.frame + TITLE_PLF_NAME
    };
  },
  components: { BlogList }
};
</script>


