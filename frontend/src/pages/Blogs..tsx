import { useState } from "react";
import BlogCard from "../Components/BlogCard";
import BlogCardSkeleton from "../Components/Blogskeleton";

const Blogs = () => {
  const [loading, setLoading] = useState(false);


   
      if(loading){
        return (

            <div className="flex justify-center mt-10">
            <div className=" w-[50%]">

        <BlogCardSkeleton/>
        </div>
        </div>
            )

      }else
      {
        return(
        <div className="flex justify-center">
        <div className=" max-w-xl">
          <BlogCard
            authorName="John Doe"
            title="My first blog"
            content="This is my first blog. I am so excited to share my thoughts with you all."
            publishedDate="2021-12-01"
          />
          <BlogCard
            authorName="John Doe"
            title="My first blog"
            content="This is my first blog. I am so excited to share my thoughts with you all."
            publishedDate="2021-12-01"
          />
          <BlogCard
            authorName="John Doe"
            title="My first blog"
            content="This is my first blog. I am so excited to share my thoughts with you all."
            publishedDate="2021-12-01"
          />
          <BlogCard
            authorName="John Doe"
            title="My first blog"
            content="This is my first blog. I am so excited to share my thoughts with you all."
            publishedDate="2021-12-01"
          />
          <BlogCard
            authorName="John Doe"
            title="My first blog"
            content="This is my first blog. I am so excited to share my thoughts with you all."
            publishedDate="2021-12-01"
          />
        </div>
        </div>
        )
      }

};

export default Blogs;
