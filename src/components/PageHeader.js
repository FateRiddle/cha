import React, { Component } from 'react'
import 'css/PageHeader.css'

export class PageHeader extends Component {
  render() {
    return (
      <div className="PageHeader debug debug-grid">
        <div className="PageHeader-logo fixed z-3">
          <a href="">
            <svg viewBox="0 0 46 52">
              <title id="PageHeader-logoSymbol-title">茶ッカソン</title>
              <use xlinkHref="#logo_symbol" />
            </svg>
          </a>
        </div>
        <div className="PageHeader-btnMenu fixed z-3">
          <img src="" alt="hamburg" />
        </div>
        <nav className="PageNav fixed z-1">
          <ul className="PageNav-list">
            <li className="PageNav-list-item">1</li>
            <li className="PageNav-list-item">2</li>
            <li className="PageNav-list-item">3</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default PageHeader
