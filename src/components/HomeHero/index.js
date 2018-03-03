import React, { Component } from 'react'
import 'css/HomeHero.css'
import anime from 'animejs'

export class HomeHero extends Component {
  componentDidMount() {
    // loading anime
    const tl = anime.timeline({
      loop: true,
      direction: 'reverse',
      // autoplay: false
    })
    tl
      .add({
        targets: '.HomeHero-title-logo',
        opacity: 0,
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: '.bg-top',
        width: 0,
        left: '50%',
        duration: 1000,
        easing: 'easeInOutQuart',
        offset: 1000,
      })
      .add({
        targets: '.bg-right',
        height: 0,
        top: '50%',
        duration: 1000,
        easing: 'easeInOutQuart',
        offset: 1000,
      })
      .add({
        targets: '.bg-bottom',
        width: 0,
        duration: 1000,
        easing: 'easeInOutQuart',
        offset: 1000,
      })
      .add({
        targets: '.bg-left',
        height: 0,
        duration: 1000,
        easing: 'easeInOutQuart',
        offset: 1000,
      })
  }

  render() {
    return (
      <div className="HomeHero">
        <div className="HomeHero-visual debug-grid" />
        <div className="HomeHero-title">
          <div className="absolute left-0 top-0 w-100 h-100">
            <div className="HomeHero-title-bg bg-top" />
            <div className="HomeHero-title-bg bg-right" />
            <div className="HomeHero-title-bg bg-bottom" />
            <div className="HomeHero-title-bg bg-left" />
          </div>
          <h1 className="HomeHero-title-logo">
            <img
              src="https://chackathon.com/wp-content/themes/chackathon/assets/img/home/logo_chackathon_vertical.svg"
              alt="茶ッカソン"
            />
          </h1>
        </div>
      </div>
    )
  }
}

export default HomeHero
