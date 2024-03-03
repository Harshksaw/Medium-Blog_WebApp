import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div
      className="group bg-slate-200 rounded-lg shadow-md overflow-hidden mb-6 md:mb-8 lg:mb-12 animate-pulse"
    >
      <div className="flex items-center p-4">
        <div className="h-6 w-6 bg-slate-300 rounded-full animate-pulse"></div>
        <div className="pl-2 text-sm animate-pulse"></div>
        <div className="pl-2 flex justify-center flex-col animate-pulse">
          <div className="h-2 w-2 bg-slate-300 rounded-full animate-pulse"></div>
        </div>
        <div className="ml-3 text-sm animate-pulse"></div>
      </div>

      <div className="px-4 mb-2">
        <div className="h-4 bg-slate-300 animate-pulse rounded-lg"></div>
        <div className="h-4 mt-2 bg-slate-300 animate-pulse rounded-lg"></div>
        <div className="h-4 mt-2 bg-slate-300 animate-pulse rounded-lg"></div>
      </div>

      <div className="inline-flex items-center py-2 text-sm font-medium text-center text-white bg-slate-300 rounded-lg px-4 animate-pulse">
        <div className="mr-2 animate-pulse"></div>
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
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
