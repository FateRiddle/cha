import React, { Component } from 'react'
import 'css/PageContent.css'
import { summary, elements, teasers } from 'data.js'

export class PageContent extends Component {
  render() {
    return (
      <div className="pageContent debug">
        <section className="HomeAbout">
          <div className="HomeAbout-bg" />
          <div className="HomeAbout-body page-content-small">
            <p className="HomeAbout-summary">
              {summary.map((s, i) => (
                <span className="HomeAbout-summary-item" key={i}>
                  <span>{s}</span>
                  <span className="mask" />
                </span>
              ))}
            </p>
            <div className="HomeAbout-elements ">
              {elements.map((e, i) => (
                <section className="HomeAbout-element" key={i}>
                  <div className="HomeAbout-element-visual">
                    <img src={e.src} alt={e.title} />
                  </div>
                  <div className="HomeAbout-element-body">
                    <h3>{e.title}</h3>
                    <p>{e.p}</p>
                  </div>
                </section>
              ))}
            </div>
            <div className="HomeAbout-titles">
              <h2 className="HomeAbout-title">茶ッカソンとは</h2>
              <a href="https://chackathon.com/about" className="HomeAbout-more">
                詳しくみる
              </a>
            </div>
          </div>
        </section>
        <section className="HomeReport">
          <div className="HomeReport-bg">
            <div className="HomeReport-bg-pattern1" />
            <div className="HomeReport-bg-pattern2" />
          </div>
          <div className="HomeReport-body page-content-small">
            <div className="HomeReport-titles">
              <h2 className="HomeReport-title">レポート一覧</h2>
              <a href="https://chackathon.com/report" className="HomeReport-more">
                詳しくみる
              </a>
            </div>
            <div className="HomeReport-teasers">
              {teasers.map((t, i) => (
                <section className="HomeReport-teaser" key={i}>
                  <a href={t.link}>
                    <div className="HomeReport-teaser-visual">
                      <img alt={t.title} src={t.img} />
                      <div className="HomeReport-teaser-frame" />
                    </div>
                    <div className="HomeReport-teaser-body">
                      <h3 className="HomeReport-teaser-title">{t.title}</h3>
                      <p className="HomeReport-teaser-description">{t.desc}</p>
                      <div className="HomeReportTeaser-more">レポートを読む</div>
                    </div>
                  </a>
                </section>
              ))}
            </div>
          </div>
        </section>
        <section className="HomeSpecial">
          <div className="HomeSpecial-body">
            <h2 className="HomeSpecial-title">畳分け</h2>
            <p className="HomeSpecial-text">
              ともにつくる、ともに育む。
              <br /> 茶ッカソンでは、企業、自治体、
              <br /> 教育機関の皆さまとの共同開催を
              <br /> 実施しています。
            </p>
            <a href="https://chackathon.com/tatamiwake" className="HomeSpecial-more">
              詳しくみる
            </a>
          </div>
          <div className="HomeSpecial-visual">
            <div className="HomeSpecial-visual-img">
              <img
                src="https://chackathon.com/wp-content/themes/chackathon/assets/img/home/tatamiwake.jpg"
                alt="畳分け"
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default PageContent
