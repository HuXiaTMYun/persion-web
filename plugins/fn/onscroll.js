import Vue from 'vue';
Vue.prototype.$onscroll = (fn) => {
  window.onscroll = () => {
    let docscrollTop = document.documentElement.scrollTop;
    let windInnerHeight = window.innerHeight;
    let docOffsetHeight = document.documentElement.offsetHeight;

    let bottomOfWindow = (docscrollTop + windInnerHeight === docOffsetHeight) || ((docOffsetHeight - docscrollTop - windInnerHeight) <= 5)
    if (bottomOfWindow) {
      fn()
    }
  };
}
