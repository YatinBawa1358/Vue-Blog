import showBlog from './show-blog.vue';
import addBlog from './add-blog.vue';
import singleBlog from './single-blog.vue';

export default [
  {path:'/',component:showBlog},
  {path:'/add-blog',component:addBlog},
  {path:'/blog/:id',component:singleBlog}  // :id is a route parameter
]
