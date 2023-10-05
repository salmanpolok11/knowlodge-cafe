import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Booksmark from "../Bookmarks/Booksmark";


const Blogs = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() =>{
     fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json ')
     .then(res => res.json())
     .then(data => setBlogs(data))
    
  },[])

  return (
    <div className="md:w-2/3" >
     
   
   <div className="md:flex justify-between">
   <h1>Blog: { blogs.length} </h1>
   <Booksmark></Booksmark>
   </div>
  

        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} ></Blog>)
        }
    </div>
  );
};

export default Blogs;