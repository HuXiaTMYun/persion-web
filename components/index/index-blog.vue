<template>
  <div class="main" id="scrollDiv">
    <b-card v-for="item in rows" :key="item.id" style="margin-top: 30px;" @click="hrefDetail(item)">
      <b-media>
        <template v-slot:aside>
          <b-img :src="require(`../../assets/${item.type}-64.png`)" width="64" alt="placeholder"></b-img>
        </template>
        <h5 class="mt-0">{{item.title}}</h5>
        <p>
          {{item.content}}
        </p>
        <p class="text-muted">
            {{item.publish_date}}
        </p>
      </b-media>
    </b-card>

  </div>
</template>

<script>

  const $ = require('jquery');
  export default {
    components: {},
    name: 'index-blog',
    data() {
      return {
        rows: []
      };
    },
    mounted() {
      this.queryData();
      this.$onscroll(this.load)
    },
    methods: {
      queryData() {
        for (let i = 0; i < 10; i++) {
          this.rows.push({
            id: i,
            type: 'java',
            frame: 'springboot',
            blog_code: 'chushijava',
            title: '第一章 初识JAVA',
            publish_date: '2020-12-01 16:56:01',
            content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程',
          })
        }
      },
      load() {
        for (let i = 0; i < 2; i++) {
          this.rows.push({
            id: '1',
            type: 'java',
            frame: 'springboot',
            blog_code: 'chushijava',
            title: '第一章 初识JAVA',
            publish_date: '2020-12-01 16:56:01',
            content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程',
          })
        }
      },
      hrefDetail(item) {
        window.open(`/blog/${item.type}/${item.frame}/${item.blog_code}`);
      },
    },
  };
</script>

<style scoped>

</style>
