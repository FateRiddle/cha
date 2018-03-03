import React, { Component } from 'react'

export class PageLoading extends Component {
  render() {
    return (
      <div className="fixed dn">
        <div className="PageLoading-line line-top">1</div>
        <div className="PageLoading-line line-right">2</div>
        <div className="PageLoading-line line-bottom">3</div>
        <div className="PageLoading-line line-left">4</div>
      </div>
    )
  }
}

export default PageLoading
