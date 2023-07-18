import React from 'react'
import BlogCard from './BlogCard';

const BlogCardList = ({data}) => {
 return (
   <div className="lg:w-4/6 w-5/6 mx-auto flex  flex-col">
     {data.map((blog, i) => (
       <BlogCard key={i} blog={blog}  />
     ))}
   </div>
 );
}

export default BlogCardList