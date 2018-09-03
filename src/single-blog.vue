<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author:{{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        blog:{

        }
      }
    },
    created(){
      this.$http.get('https://vue-blog-94079.firebaseio.com/posts/' + this.id+ '.json').then(function (data) {
        return data.json();
      }).then(function (data) {
        this.blog=data;
      });
    },
  }
</script>

<style scoped>
 #single-blog{
   max-width: 960px;
   margin: 0 auto;
 }

h1{
  font-size: 35px;
  text-transform: uppercase;
}

  article{
    font-size: 22px;
    text-transform: capitalize;
  }

 p{
   font-size: 22px;
   text-transform: capitalize;
 }

 li{
   font-size: 22px;
   text-transform: capitalize;
 }
</style>
