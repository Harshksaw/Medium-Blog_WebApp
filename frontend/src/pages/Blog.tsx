import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogPageSkeleton from "../Components/FullBlogSkeleton";
import FullBlog from "../Components/FullBlog";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, blog } = useBlog({ id: id || "1" });
  return (
    <div>
      {loading ? (
        <div className="mt-20 p-5">
          <BlogPageSkeleton />
        </div>
      ) : (
        <div className="mt-10 p-5">
          {blog !== undefined && <FullBlog blog={blog} />}
        </div>
      )}
    </div>
  );
};

export default Blog;
