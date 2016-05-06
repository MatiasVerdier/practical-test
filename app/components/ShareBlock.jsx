import React, { Component } from 'react'

class ShareBlock extends Component {
  render () {
    return (
      <div id='share' className='content-block'>
        <h2 className='title'>Share</h2>
        <div className='content'>
          <div className='share-image'>
            <img src={this.props.imageUrl} />

            <div className='facebook-button'>
              <div id='fb-root'></div>
              <div className='fb-share-button' data-href={this.props.imageUrl} data-layout='button_count' data-mobile-iframe='true'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ShareBlock.propTypes = { imageUrl: React.PropTypes.string }
ShareBlock.defaultProps = {
  imageUrl: 'http://www.planwallpaper.com/static/images/HD-Wallpapers1.jpeg'
}

export default ShareBlock
