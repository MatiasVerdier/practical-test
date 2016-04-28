import React, { Component } from 'react'

class Navigation extends Component {
  render () {
    return (
      <nav className='navigation'>
        <a href='#text' className='item'>Text</a>
        <a href='#twitter' className='item'>Twitter</a>
        <a href='#carrousel' className='item'>Carrousel</a>
        <a href='#share' className='item'>Share</a>
      </nav>
    )
  }
}

export default Navigation
