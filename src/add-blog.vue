<template>
  <div id="add-blog">
    <h2 style="font-size: 34px;">Add a new Blog</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required/>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="ninja" v-model="blog.categories"/>
        <label>Wizards</label>
        <input type="checkbox" value="wizard" v-model="blog.categories"/>
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories"/>
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories"/>
      </div>

      <label>Authors:</label>
      <select v-model="blog.author">
        <option v-for="author in blog.authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post" style="width: 100px; height: 20px;"><span style="font-size: 13px;">Add Blog</span></button>
    </form>

    <div v-if="submitted">
    <h2>Thank You for submitting your Blog</h2>
    </div>

    <div id="preview">
      <h2>Blog Preview</h2>
      <p>Blog Title:{{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories" v-text="category"></li>
      </ul>
      <p>Blog Authors:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blog:{
          title: '',
          content: '',
          categories:[],
          authors:['The Net Ninja','The Angular Avenger','The Vue Vindicator'],
          author:''
        },
        submitted:false
      }
    },
    methods:
      {
        post()
        {
          this.$http.post('https://vue-blog-94079.firebaseio.com/posts.json',this.blog).then(function (data) {  //posts.json is a collection of javascript objects in which all are posts will be saved...we can name the collection anything
            console.log(data);
            this.submitted=true;
          });
        }
      },
  }
</script>

<style>

  #add-blog *
  {
    box-sizing: border-box;
  }

  #add-blog
  {
    margin: 20px auto;
    max-width: 500px;
  }

  label
  {
    display: block;
    margin: 20px 0 10px;
    font-size: 20px;
  }

  input[type="text"],textarea
  {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 20px;
  }

  #preview
  {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin:30px 0;
    font-size: 20px;
  }

  h3
  {
    margin-top: 10px ;
  }

  #checkboxes input
  {
    display: inline-block;
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }

  #checkboxes label{
    display: inline-block;
  }

 #add-blog select{
    width: 200px;
   height: 30px;
   font-size: 18px;
  }

</style>
