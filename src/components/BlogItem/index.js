import './index.css'

const BlogItem = p => {
  const {y} = p
  const {description, title, publishedDate} = y
  return (
    <div>
      <div className="first-line">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr className="hr-line" />
    </div>
  )
}

export default BlogItem
