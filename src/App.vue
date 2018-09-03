<template>
  <div>
 <!-- <add-blog></add-blog> -->
 <!-- <show-blog></show-blog> -->
    <header-links></header-links>
    <router-view></router-view> <!-- place where the components with the specified route will be loaded -->
  </div>
</template>

<script>
  import AddBlog from './add-blog.vue';
  import ShowBlog from './show-blog.vue';
  import Header from './header.vue';
export default {
  components:{
    'add-blog':AddBlog,
    'show-blog':ShowBlog,
    'header-links':Header,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
