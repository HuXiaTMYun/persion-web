<template>
  <div class="container">
    <IndexBlog :rows="rows"></IndexBlog>
  </div>
</template>

<script>
  import IndexBlog from '../components/index/index-blog';

  export default {
    layout: 'error',
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
        }],
      };
    },
    // 当请求的资料获取失败时跳入使用404 layout
    asyncData ({ error }) {
      return error({ statusCode: 404, message: '您找的资料好像飞升了.....' });
    },
    mounted () {
    },
    beforeUpdate () {
      localStorage.setItem('close', Math.round(Math.random() * 100).toString());
    },
    components: {
      IndexBlog,
    },
  };
</script>

<style>

</style>
