<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h2 style="font-size: 34px;">Show Blog's</h2>
    <input type="text" v-model="search" placeholder="Search Blogs" style="width: 900px; height: 30px; font-size: 20px;"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
     <!-- <h1 v-rainbow>{{ blog.title | to-uppercase }}</h1> -->
      <router-link v-bind:to="'/blog/'+ blog.id" class="link-style"><h1>{{ blog.title | to-uppercase}}</h1></router-link>
      <p style="font-size: 22px;">{{ blog.content | snippet }}</p>
    </div>
  </div>
</template>

<script>
  import searchMixin from './mixins/searchMixin';
  export default {
    data () {
      return {
         blogs:[],
         search:''
      }
    },
    created()
    {
      this.$http.get('https://vue-blog-94079.firebaseio.com/posts.json').then(function (data) {
        return data.json()
      }).then(function (data) {
        var allBlogs=[]
        for(let key in data)
        {
          data[key].id=key;  // here we are referencing the current object and we are adding a property of id to it and the value of that id will be the
          allBlogs.push(data[key]);//value stored in key,then we are pushing that object to an array and displaying it in console
        }
        this.blogs=allBlogs;
      });
    },
    computed:{

    },
//Directives declared locally
    directives:
      {
        'rainbow':{
          bind(el,binding,vnode) //Initiated when it is binded to an element
          {
            el.style.color="#"+Math.random().toString().slice(2,8);
          }
        },
        'theme':{
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
        }
      },

    //Filters declared locally
    filters:{
      toUppercase(value){
        return value.toUpperCase();
      },
      snippet(value) {
        return value.slice(0,90) + '...';
      }
    },
    mixins:[searchMixin]
  }
</script>

<style>

  #show-blogs
  {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog
  {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
  }

  input::-webkit-input-placeholder {
    font-size: 20px;
  }

  .link-style
  {
    color: black;
    text-decoration: none;
    font-size: 14px;
  }

</style>
