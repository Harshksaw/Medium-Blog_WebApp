
import { useBlog } from '../hooks'

import FullBlog from '../Components/FullBlog'
import BlogPageSkeleton from '../Components/FullBlogSkeleton';
import { useParams } from 'react-router-dom';



const Blog = () => {

  const {id} = useParams<{id:string}>();

  const {loading , blog} = useBlog({id: id || "1"})
  return (
    <div>
      {loading ? (


<div className='mt-10 p-5'>

          <BlogPageSkeleton/>
</div>
      ) : (

        <div className='mt-10 p-5'>

        <FullBlog  blog={blog} />
        </div>
      )}
    </div>
  )
}

export default Blog
