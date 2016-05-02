import React, { Component } from 'react'

class CarrouselBlock extends Component {
  constructor (props) {
    super(props)
    this.render = this.render.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    this.isActive = this.isActive.bind(this)
    this.state = {page: 1}
  }
  render () {
    return (
      <div id='carrousel' className='content-block'>
        <h2 className='title'>Carrousel</h2>
        <div className='content'>
          <div className='control' onClick={this.prev}>
            <i className='fa fa-arrow-circle-o-left fa-3'></i>
          </div>
          <div className='slides'>
            <div id='page1' className={'page ' + this.isActive(1)}>
              <div id='image1' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen1&w=200&h=200' />
              </div>
              <div id='image2' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen2&w=200&h=200' />
              </div>
              <div id='image3' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen3&w=200&h=200' />
              </div>
            </div>

            <div id='page2' className={'page ' + this.isActive(2)}>
              <div id='image4' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen4&w=200&h=200' />
              </div>
              <div id='image5' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen5&w=200&h=200' />
              </div>
              <div id='image6' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen6&w=200&h=200' />
              </div>
            </div>

            <div id='page3' className={'page ' + this.isActive(3)}>
              <div id='image7' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen7&w=200&h=200' />
              </div>
              <div id='image8' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen8&w=200&h=200' />
              </div>
              <div id='image9' className='image'>
                <img src='https://placeholdit.imgix.net/~text?txtsize=30&txt=Imagen9&w=200&h=200' />
              </div>
            </div>
          </div>
          <div className='control' onClick={this.next}>
            <i className='fa fa-arrow-circle-o-right fa-3'></i>
          </div>
        </div>
      </div>
    )
  }

  isActive (page) {
    return page === this.state.page ? 'active' : ''
  }

  prev (event) {
    let actualPage = this.state.page
    this.setState({
      page: actualPage === 1 ? 3 : actualPage - 1
    })
  }

  next (event) {
    let actualPage = this.state.page
    this.setState({
      page: actualPage === 3 ? 1 : actualPage + 1
    })
  }
}

export default CarrouselBlock
