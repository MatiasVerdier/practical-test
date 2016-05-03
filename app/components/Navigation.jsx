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
          <i ref='menuIcon' className='fa fa-bars'></i>
        </a>
      </div>
    )
  }

  toggleMenu (event) {
    event.preventDefault()
    let nav = this.refs.nav
    let icon = this.refs.menuIcon
    nav.className = nav.className === 'navigation' ? 'navigation open' : 'navigation'
    icon.className = icon.className === 'fa fa-bars' ? 'fa fa-close' : 'fa fa-bars'
  }

  handleLinkClick () {
    this.refs.nav.className = 'navigation'
    this.refs.menuIcon.className = 'fa fa-bars'
  }
}

export default Navigation
