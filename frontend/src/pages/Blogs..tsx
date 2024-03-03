import BlogCard from "../Components/BlogCard";
import BlogCardSkeleton from "../Components/Blogskeleton";
import { useBlogs } from "../hooks";

interface Blog {
  content: string;

  title: string;
  id: number;
  author: {
    name: string;
  };
}

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <div className=" w-[50%]">
          <BlogCardSkeleton />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mt-10">
        <div className=" max-w-xl mt-20">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.title}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Blogs;
