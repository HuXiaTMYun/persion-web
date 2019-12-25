<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="/">虎云博客</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>java</em>
            </template>
            <b-dropdown-item href="/blog/java/SpringBoot">SpringBoot</b-dropdown-item>
            <b-dropdown-item href="/blog/java/SpringCloud">SpringCloud</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Python</em>
            </template>
            <b-dropdown-item href="/blog">Flask</b-dropdown-item>
            <b-dropdown-item href="/blog">Django</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>NodeJs</em>
            </template>
            <b-dropdown-item href="/blog">Express</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>PHP</em>
            </template>
            <b-dropdown-item href="/blog">Flask</b-dropdown-item>
            <b-dropdown-item href="/blog">Django</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Linux</em>
            </template>
            <b-dropdown-item href="/blog">Flask</b-dropdown-item>
            <b-dropdown-item href="/blog">Django</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <img id="id-qq" class="contact-img" src="./assets/qq.png" alt="">
            <b-popover target="id-qq" triggers="hover" placement="left">
              <b-img width="200" height="200" src="./assets/id-qq.JPG" alt="Left image"></b-img>
            </b-popover>
          </b-nav-item>
          <b-nav-item href="#">
            <img id="id-wx" class="contact-img" src="./assets/wx.png" alt="">
            <b-popover target="id-wx" triggers="hover" placement="left">
              <b-img width="200" height="200" src="./assets/id-wx.JPG" alt="Left image"></b-img>
            </b-popover>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>

</template>

<script>
  export default {
    name: 'layout-default-header',
  };
</script>

<style scoped>
  .contact-img {
    opacity: 0.4
  }

  .contact-img:hover {
    opacity: 1;
  }
</style>
