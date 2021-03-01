import React, { useState } from 'react'

const Blog = ({ blog, doLike }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleDetailsButton = async (event) => {
    event.preventDefault()
    setShowDetails(!showDetails)
  }

  const handleLikeButton = async (event) => {
    event.preventDefault()
    doLike(blog)
    blog.likes+=1
  }

 return (
   <div>
    <form onSubmit={handleDetailsButton}>
  <div>
    {blog.title} {blog.author} <button className="detailsButton" type="submit">{showDetails?"hide":"view"}</button>
  </div>
    </form>
    <div className="details" style={{display:showDetails?"inline":"none"}}>
      <p>{blog.url}</p>
    <form onSubmit={handleLikeButton}>
      <p>likes {blog.likes} <button type="submit">like</button>
</p>
    </form>
      <p>{blog.user.name}</p>
    </div>
   </div>
)
}

export default Blog
