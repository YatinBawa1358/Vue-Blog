//A mixin is that chunk of code that can be used again and again in any component by just importing the mixin file
export default {
  computed:{
    filteredBlogs()
    {
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      });
    }
  }
}
