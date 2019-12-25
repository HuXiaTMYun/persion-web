<template>
  <div class="container">
    <timeline :model="dataSource">
      <template v-slot:title="{item}">
        <b-link class="text-white" href="/blog/java/springboot/nihao">{{item.title}}</b-link>
      </template>
    </timeline>
  </div>
</template>

<script>
  export default {
    props: {
      dataSource: {
        type: Array,
        default () {
          return [];
        },
      },
    },
    name: 'blog-list',
  };
</script>

<style scoped>

</style>
