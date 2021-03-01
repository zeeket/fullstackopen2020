import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleDetailsButton = async (event) => {
    event.preventDefault()
    setShowDetails(!showDetails)
  }

 return (
    <form onSubmit={handleDetailsButton}>
  <div>
    {blog.title} {blog.author} <button type="submit">{showDetails?"hide":"view"}</button>
    <div style={{display:showDetails?"inline":"none"}}>
      <p>{blog.url}</p>
      <p>likes {blog.likes}</p>
      <p>{blog.user.name}</p>
    </div>
  </div>
    </form>
)
}

export default Blog
