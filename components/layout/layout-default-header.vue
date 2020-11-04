<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="/"><svg t="1583830580583" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1347" width="32" height="32"><path d="M321.805934 79.378455C354.864886 50.803535 388.236426-0.40712 420.928894 0.002479c33.112846 0.431157 65.557399 51.943622 98.303762 81.057488l-8.138085 13.68923H334.762198l-12.956264-15.370742zM586.374557 751.368744c65.287926-23.034555 116.164435-39.030474 165.521115-58.820573 101.645228-40.744322 141.904499-129.045245 103.305181-230.830599-53.851491-142.044625-168.884138-205.284556-309.710745-233.687013-126.954135-25.589159-248.389462 8.159643-370.988912 32.002617-17.116927 3.341466-35.77524-1.218018-53.722144-2.112669 8.062633-17.472631 11.921487-39.386178 24.877751-51.706485 82.685105-78.599894 187.35921-90.144119 294.609476-91.038769 182.411685-1.509049 350.681425 36.734564 469.6376 188.814364 63.768098 81.553318 100.739798 175.329933 58.109164 279.960922-31.528345 77.381876-100.340978 113.91164-175.373049 137.970192-61.224273 19.649973-123.591111 35.893808-185.720813 52.644252-150.118037 40.453292-186.410664 92.52626-180.643942 247.915189l-32.487669-132.117238v109.686303c-58.141501-72.24033-56.783357-155.873981 2.834857-220.439719 33.97516-36.788458 73.512243-70.14922 100.136178-111.71274 87.848208-137.161773 41.100027-306.487847-102.270405-386.241086-8.838715-4.915188-17.515747-10.132186-29.642033-17.160043 131.287261-18.690649 249.273333 43.525284 303.211055 156.057223 53.46345 111.529498 28.07909 227.21966-81.682665 330.805093z m-236.672775-5.561923a473607.153162 473607.153162 0 0 1-88.699743-105.256166c51.45857-0.711409 114.062545 6.305669 140.147535-58.087607 9.485451-23.411817 13.937145-52.568799 9.614797-77.155519-12.395759-70.601934-70.817513-110.677964-145.720236-104.900461-39.66643 3.050435-78.147179 15.413857-86.985895 58.173838-7.178762 34.578779-1.465933 71.830731-1.465933 94.240108-26.020316-15.381521-59.984697-32.520005-90.392034-54.573678C68.231811 485.237178 45.811655 465.705773 43.440292 446.84266c-3.503149-28.165321-21.48239-69.868968 32.067291-81.154498 13.430536-2.824077 23.842974-20.663192 35.300967-31.959501 95.770716-94.498803 246.373804-89.206352 338.910843 11.975381 84.269607 92.138219 75.711143 250.717709-18.528966 333.327362-26.48381 23.217796-54.487447 44.732523-81.488645 66.786196z m328.886446-53.441892c110.548617-170.511756 42.382718-350.810772-161.252662-438.292497 117.748936-15.068932 309.247251 113.178673 321.977157 261.345726 7.405119 86.091244-51.66337 153.502618-160.724495 176.946771z" fill="#d81e06" p-id="1348"></path></svg>北风吹虎云</b-navbar-brand>
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
