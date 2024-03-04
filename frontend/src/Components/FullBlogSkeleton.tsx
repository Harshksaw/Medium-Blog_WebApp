

const BlogPageSkeleton = () => {
  return (
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
      <div className="col-span-8">
        {/* Title skeleton */}
        <div className="h-10 w-full bg-gray-300 animate-pulse rounded mb-2"></div>
        {/* Post date skeleton */}
        <div className="h-6 w-24 bg-gray-300 animate-pulse rounded mb-4"></div>
        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-16 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-16 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-20 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="text-slate-600 text-lg">Author</div>
        <div className="flex w-full">
          {/* Avatar skeleton */}
          <div className="pr-4 animate-pulse h-16 w-16 rounded-full bg-gray-300"></div>
          <div>
            {/* Name skeleton */}
            <div className="h-6 w-24 bg-gray-300 animate-pulse rounded mb-2"></div>
            {/* Description skeleton */}
            <div className="h-8 w-full bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogPageSkeleton;
