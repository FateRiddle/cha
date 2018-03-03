import React, { Component } from 'react'
import 'tachyons'
import 'css/App.css'
import SvgAsset from './components/SvgAsset'
import PageHeader from './components/PageHeader'
import HomeHero from './components/HomeHero'
import PageContent from './components/PageContent'
import PageLoading from './components/PageLoading'

class App extends Component {
  render() {
    return (
      <div className="App vh-100">
        <SvgAsset />
        <PageHeader />
        <div className="pageContainer">
          <main className="w-100">
            <HomeHero />
            <PageContent />
          </main>
          <footer>footer</footer>
        </div>
        <PageLoading />
      </div>
    )
  }
}

export default App
