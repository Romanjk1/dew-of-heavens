import React from 'react'
import banner1 from './../assets/banner-1.jpg'
import banner2 from './../assets/banner-2.jpg'

const Banner = () => {
  const bannerStyle1 = {
    backgroundImage: `url(${banner1})`,
    zIndex: -1,
  }
  const bannerStyle2 = {
    backgroundImage: `url(${banner2})`,
    zIndex: -1,
  }
  return (
    <section className="section banner reveal">
      <div className="container">
        <ul className="banner-list">
          <li>
            <div className="banner-card banner-card-1 has-before hover:shine">
              <p className="card-subtitle">New Collection</p>
              <h2 className="h2 card-title">Discover Our Autumn Skincare</h2>
              <a href="" className="btn btn-secondary">
                Explore More
              </a>
              <div className="has-bg-image" style={bannerStyle1}></div>
            </div>
          </li>

          <li>
            <div className="banner-card banner-card-2 has-before hover:shine">
              <h2 className="h2 card-title">25% off Everything</h2>

              <p className="card-text">
                Makeup with extended range in colors for every human.
              </p>
              <a href="" className="btn btn-secondary">
                Shop Sale
              </a>
              <div className="has-bg-image" style={bannerStyle2}></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Banner
