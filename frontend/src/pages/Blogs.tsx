import BlogCard from "../Components/BlogCard";
import BlogCardSkeleton from "../Components/Blogskeleton";
import { useBlogs } from "../hooks";
import { Blog } from "../hooks";
// interface Blog {
//   id: number;
//   title: string;
//   content: string;

//   author: {
//     name: string;
//   };
// }
// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   author: {
//     name: string;
//   };
// }

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <div className=" w-[50%]">
          {[1,1,1,1,1].map(() => (
          <BlogCardSkeleton />
        ))}
        </div>
      </div>
    );
    
  } else {
    return (
      <div className="flex justify-center mt-10 ">
        <div className=" max-w-xxl mt-20">
          {(blogs as Blog[]).map((blog) => (
            <BlogCard
              key={blog.title}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Blogs;
