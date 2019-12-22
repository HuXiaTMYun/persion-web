<template>
  <div class="container">
    <timeline :model="dataSource">
      <template v-slot:title="{item}">
        <b-link class="text-white" href="/blog/details">{{item.title}}</b-link>
      </template>
    </timeline>
  </div>
</template>

<script>
    export default {
        name: "blog-list",
        data() {
            return {
                dataSource: [{
                    title: '第一章 初识JAVA',  time: '2019-08-07', content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程'
                },{
                    title: '第二章 Hello Word!', time: '2019-08-07', content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程'
                },{
                    title: '第三章 变量', time: '2019-08-07', content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程'
                },{
                    title: '第四章 函数', time: '2019-08-07', content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程'
                }]
            }
        }
    }
</script>

<style scoped>

</style>
