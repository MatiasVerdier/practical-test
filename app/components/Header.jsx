import React, { Component } from 'react'
import Navigation from './Navigation'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <Navigation />
        <div className='backgroundImage'></div>
      </header>
    )
  }
}

export default Header
