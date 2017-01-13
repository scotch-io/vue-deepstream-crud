import Vue from 'vue'
import App from './App.vue'
import * as ds from 'deepstream.io-client-js';

new Vue({
  el: '#app',
  created: function(){
    ds('localhost:6020').login({}, () => {
      console.log('logged in');
    })
  },
  render: h => h(App)
})
