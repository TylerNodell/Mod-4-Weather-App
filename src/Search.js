import React from 'react'


const Search = (props) => {
  return (
    <div>
      <form  onSubmit={props.handleSubmit}>
      <input type="text"  onChange={props.handleChange} />
      <input type="submit"/>
      </form>
    </div>
  )
}

export default Search