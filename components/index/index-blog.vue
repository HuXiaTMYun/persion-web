<template>
  <div>
    <b-card v-for="item in rows" :key="item.id" style="margin-top: 30px;" @click="hrefDetail(item)">
      <b-media>
        <template v-slot:aside>
          <b-img :src="require(`../../assets/${item.type}-64.png`)" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">{{item.title}}</h5>
        <p>
          {{item.content}}
        </p>
      </b-media>
    </b-card>
  </div>
</template>

<script>

  export default {
    components: {},
    name: 'index-blog',
    data () {
      return {
        rows: [{
          id: '1',
          type: 'java',
          frame: 'springboot',
          blog_code: 'chushijava',
          title: '第一章 初识JAVA',
          content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程',
        }, {
          id: '2',
          type: 'java',
          frame: 'springcloud',
          blog_code: 'feign',
          title: '第二章 Hello World!',
          content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程',
        }, {
          id: '3',
          type: 'python',
          frame: 'django',
          blog_code: 'api',
          title: '第一章 初识Python',
          content: 'Python是一种跨平台的计算机程序设计语言。是一种面向对象的动态类型语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、大型项目的开发',
        }, {
          id: '4',
          type: 'java',
          frame: 'django',
          blog_code: 'api',
          title: '第三章 变量',
          content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程',
        }]
      };
    },
    methods: {
      hrefDetail (item) {
        window.open(`/blog/${item.type}/${item.frame}/${item.blog_code}`);
      },
    },
  };
</script>

<style scoped>

</style>
