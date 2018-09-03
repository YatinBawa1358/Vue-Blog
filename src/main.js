import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const routers=new VueRouter({
      routes:Routes,  //Registering routes in Vue router instance
      mode:'history'
});

//Directives declared globally
//Custom Directives
/* Vue.directive('rainbow',{
  //Life-Cycle Hook Fxn
bind(el,binding,vnode) //Initiated when it is binded to an element
{
el.style.color="#"+Math.random().toString().slice(2,8);
}
});

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide')
    {
      el.style.maxWidth="2500px";
    }
    else if(binding.value=='narrow')
    {
      el.style.maxWidth="900px";
    }
    if(binding.arg=='column')
    {
      el.style.background="#ddd";
      el.style.padding="20px";
    }
  }
}); */

// Filters declared globally
/*Vue.filter('to-uppercase',function (value) {
  return value.toUpperCase();
});

Vue.filter('snippet',function (value) {
  return value.slice(0,90) + '...';
}) */

new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})
