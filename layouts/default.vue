<template>
  <div>
    <LayoutDefaultHeader></LayoutDefaultHeader>
<!--    <div style="margin-top: 53px;"><LayoutDefaultHeaderJumbotron></LayoutDefaultHeaderJumbotron></div>-->
    <div class="container-body" style="margin-top: 95px;">
      <nuxt/>
    </div>
    <LayoutDefaultFooter></LayoutDefaultFooter>
  </div>
</template>

<script>
    import LayoutDefaultHeader from '../components/layout/layout-default-header'
    import LayoutDefaultHeaderJumbotron from '../components/layout/layout-default-header-jumbotron'
    import LayoutDefaultFooter from '../components/layout/layout-default-footer'
    export default {
        components: {
            LayoutDefaultHeader,
            LayoutDefaultHeaderJumbotron,
            LayoutDefaultFooter
        }
    }
</script>
<style>

  .container-body {
    margin-top: 53px;
    min-height: 860px;
  }

  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
