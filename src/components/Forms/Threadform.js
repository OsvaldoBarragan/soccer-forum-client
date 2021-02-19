import React from 'react'

const ThreadForm = ({ thread, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      required
      placeholder='Enter Thread Title'
      name='title'
      value={thread.title}
      onChange={handleChange}
    />
    <label>Post</label>
    <input
      required
      placeholder='Enter Description'
      name='post'
      value={thread.post}
      onChange={handleChange}
    />
    <label>Category</label>
    <input
      required
      placeholder='Choose a category'
      name='category'
      value={thread.category}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)

export default ThreadForm
