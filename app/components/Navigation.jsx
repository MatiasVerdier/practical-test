import React, { Component } from 'react'

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  render () {
    return (
      <div className='nav-wrapper'>
        <nav ref='nav' className='navigation'>
          <a href='#text' className='item' onClick={this.handleLinkClick}>Text</a>
          <a href='#twitter' className='item' onClick={this.handleLinkClick}>Twitter</a>
          <a href='#carrousel' className='item' onClick={this.handleLinkClick}>Carrousel</a>
          <a href='#share' className='item' onClick={this.handleLinkClick}>Share</a>
        </nav>

        <a id='menu' href='#' onClick={this.toggleMenu}>
          <i className='fa fa-bars'></i>
        </a>
      </div>
    )
  }

  toggleMenu (event) {
    event.preventDefault()
    let nav = this.refs.nav
    nav.className = nav.className === 'navigation' ? 'navigation open' : 'navigation'
  }

  handleLinkClick () {
    this.refs.nav.className = 'navigation'
  }
}

export default Navigation
