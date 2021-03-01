import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

  const BlogForm = ({createBlog}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleSubmitBlog = async (event) => {
    event.preventDefault()
    try {
      await blogService.create({
        title, author, url, likes:0
      })
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (exception) {
      console.log("error submitting blog")
    }
  }

    return (
    <form onSubmit={handleSubmitBlog}>
      <div>
        title:
        <input
          type="text"
          value={title}
          name="title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author: 
        <input
          type="text"
          value={author}
          name="author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url: 
        <input
          type="text"
          value={url}
          name="url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>      
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired 
}

export default BlogForm
