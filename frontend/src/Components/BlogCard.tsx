import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (

    <Link to={`/blog/${id}`} className="group bg-slate-400  border-black border-[2px]  rounded-lg shadow-md overflow-hidden mb-6 md:mb-8 lg:mb-12 transition duration-300 hover:shadow-lg cursor-pointer">

    <div
      className="group bg-white rounded-lg shadow-md overflow-hidden mb-6 md:mb-8 lg:mb-12 transition duration-300 hover:shadow-lg cursor-pointer"
    >
    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 md:mb-8 lg:mb-12"> */}
      <div className="flex items-center p-4">
        <Avatar name={authorName} />
        <div className="pl-2 text-sm flex  font-medium">{authorName}</div>
        <div className="flex justify-center flex-col pl-2 ">
          <Circle />
        </div>
        {/* <div className="flex justify-center flex-col pl-2 "> */}
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-3">
            {publishedDate}
          </p>
      </div>

      <h2 className="text-xl font-bold leading-tight text-gray-800 px-4 mb-2">
        {title}
      </h2>
      <p className="text-gray-700 px-4 mb-4">
      {content.slice(0, 100) + "..."}
        </p>
      <a
        //   href={link}
        className="inline-flex items-center py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-4"
      >
       {`${Math.ceil(content.length / 100)} minute(s) read`}
        <svg
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 01-1-1V3a1 1 0 011-1h7.293z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
    </Link>
  
  );
};

export default BlogCard;

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>

  );
}
