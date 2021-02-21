import React from 'react'

const ThreadForm = ({ thread, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      required
      maxLength='50'
      placeholder='Enter Thread Title'
      name='title'
      value={thread.title}
      onChange={handleChange}
    />
    <label>Post</label>
    <input
      required
      maxLength='80'
      placeholder='Enter Description'
      name='post'
      value={thread.post}
      onChange={handleChange}
    />
    <label>Category</label>
    {/* // <input
    //   required
    //   placeholder='Choose a category'
    //   name='category'
    //   value={thread.category}
    //   onChange={handleChange}
    // /> */}
    <select required placeholder='Choose a Category' name='category' value={thread.category} onChange={handleChange}>
      <option value="Premier League">Premier League</option>
      <option value="Serie A">Serie A</option>
      <option value="La Liga">La Liga</option>
      <option value="Ligue 1">Ligue 1</option>
      <option value="Bundesliga">Bundesliga</option>
      <option value="Other Leagues">Other Leagues</option>
      <option value="International">International</option>
      <option value="Bootroom">Bootroom</option>
      <option value="Off Topic">Off Topic</option>
    </select>
    <button type='submit'>Submit</button>
  </form>
)

export default ThreadForm
