<template>
  <nav>
      <ul>
        <li><router-link to="/" exact>Blog List</router-link></li> <!-- router link is provided by vue router and is used in alternative to <a> tag plus it itself interprets
         the click event -->
        <li><router-link to="/add-blog" exact>Add Blog</router-link></li>
      </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }

  li{
    display: inline-block;
    margin: 0 10px;
    font-size: 24px;
    font-family:AppleMyungjo;
    font-weight: bold;
  }

  a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }

  nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }

  .router-link-active
  {
    background: #eee;
    color: #444;
  }

</style>
