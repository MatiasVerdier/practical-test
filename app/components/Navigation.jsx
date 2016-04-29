import React, { Component } from 'react'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.toggleMenu.bind(this)
  }

  render () {
    return (
      <div className='nav-wrapper'>
        <nav className='navigation'>
          <a href='#text' className='item'>Text</a>
          <a href='#twitter' className='item'>Twitter</a>
          <a href='#carrousel' className='item'>Carrousel</a>
          <a href='#share' className='item'>Share</a>
        </nav>

        <a id='menu' href='#' onClick={this.toggleMenu}>
          <i className='fa fa-bars'></i>
        </a>
      </div>
    )
  }

  toggleMenu () {
    // handle menu click
  }
}

export default Navigation
