<template>
  <div class="container" v-html="getMarkdownValue">
  </div>
</template>

<script>
  const md = require('markdown-it')({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {
        }
      }
      return ''; // 使用额外的默认转义
    },
  });
  export default {
    components: {},
    name: 'blog-details',
    props: {
      value: {
        type: String,
        default () {
          return '';
        },
      },
    },
    computed: {
      getMarkdownValue () {
        return md.render(this.value);
      },
    },
  };
</script>

<style scoped>

</style>
