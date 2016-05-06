import React, { Component } from 'react'

class TwitterBlock extends Component {
  constructor () {
    super()

    const ajax = new window.XMLHttpRequest()
    ajax.open('get', 'http://tweets.matiasverdier.com/tweets')

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          this.setState({
            tweets: JSON.parse(ajax.responseText)
          })
        }
      }
    }.bind(this)

    this.state = {
      tweets: []
    }
    ajax.send(null)
  }

  render () {
    return (
      <div id='twitter' className='content-block'>
        <h2 className='title'>Twitter</h2>
        <div className='content'>
          <div className='tweets'>
            {this.state.tweets.map((tweet) => {
              return (
                <div className='tweet-box'>
                  <img src={tweet.user.profile_image_url.replace('_normal', '')} />
                  <h3>{tweet.user.name}</h3>
                  <h4>@{tweet.user.screen_name}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default TwitterBlock
