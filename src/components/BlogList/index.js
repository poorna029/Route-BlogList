import BlogItem from '../BlogItem'
import './index.css'

const BlogList = p => {
  const {list} = p
  return (
    <div>
      {list.map(x => (
        <BlogItem y={x} key={x.id} />
      ))}
    </div>
  )
}

export default BlogList
