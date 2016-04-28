import React, { Component } from 'react'
import Header from '../components/Header'
import TextBlock from '../components/TextBlock'
import TwitterBlock from '../components/TwitterBlock'
import CarrouselBlock from '../components/CarrouselBlock'
import ShareBlock from '../components/ShareBlock'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <TextBlock />
        <TwitterBlock />
        <CarrouselBlock />
        <ShareBlock />
      </div>
    )
  }
}

export default App

