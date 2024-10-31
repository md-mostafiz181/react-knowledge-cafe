import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmarks, handleAddToMarkRead}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data =>setBlogs(data))
    }, [])
  
    return (
        <div className="md:w-2/3">
          

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleAddToMarkRead={handleAddToMarkRead}></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;