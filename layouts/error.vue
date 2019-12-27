<template>
  <!--404-->
  <Error404 v-if="error.statusCode"></Error404>
</template>

<script>
  import Error404 from './error/error_404';

  export default {
    components: {
      Error404,
    },
    name: 'error',
    // statusCode
    props: ['error'],
  };
</script>

<style scoped>

</style>
