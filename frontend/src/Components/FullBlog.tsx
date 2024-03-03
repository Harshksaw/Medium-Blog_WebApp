import React from "react";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";



const FullBlog = ({ blog  }: {blog: Blog}) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8">


          {/* <div className="text-5xl font-extrabold">{blog.title}</div> */}
          <div className="relative text-5xl font-extrabold h-full w-full overflow-hidden mb-2">
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg ">

            <span className="bg-gradient-to-r from-slate-400 to-slate-200 inline-block py-1 px-2 relative z-10 rounded-lg">
              {blog.title || "Blog Title"}
            </span>
            </div>
          </div>


          <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-4 ml-2 pl-2">
          <div className="text-slate-600 text-2xl ml-10 m-5 p-5">Author</div>
          <div className="flex w-full">
            {/* Author avatar with styling */}
            <div className="pr-4 flex flex-col justify-center">
              <div className="h-16 w-16 rounded-full bg-gray-300 animate-pulse  flex items-center justify-center">

              <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="text-slate-500">
                Random catch phrase about the author's ability to grab the user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
