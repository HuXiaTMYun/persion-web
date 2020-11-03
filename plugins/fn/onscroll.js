import Vue from 'vue';
Vue.prototype.$onscroll = (fn) => {
  window.onscroll = () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      fn()
    }
  };
}
