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
    props: {
      rows: {
        type: Array,
        default () {
          return [];
        },
      },
    },
    data () {
      return {};
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
