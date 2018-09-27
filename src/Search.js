import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <input onSubmit={this.handleSubmit}></input>
      </div>
    )
  }
}
