import React from 'react'

const CommentForm = ({ comment, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Body</label>
    <input
      required
      maxLength='200'
      placeholder='Enter comment'
      name='body'
      value={comment.body}
      onChange={handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)

export default CommentForm
