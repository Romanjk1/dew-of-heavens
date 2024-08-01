import React from 'react'
import backgroundImg1 from '../../assets/collection-1.jpg'
import backgroundImg2 from '../../assets/collection-2.jpg'
import backgroundImg3 from '../../assets/collection-3.jpg'
const Collection = () => {
  const b1 = {
    backgroundImage: `url(${backgroundImg1})`,
    zIndex: -1,
  }
  const b2 = {
    backgroundImage: `url(${backgroundImg2})`,
    zIndex: -1,
  }
  const b3 = {
    backgroundImage: `url(${backgroundImg3})`,
    zIndex: -1,
  }
  return (
    <section className="section  collection " id="collection" data-section>
      <div className="container">
        <ul className="collection-list">
          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">Summer Collection</h2>
              <p className="card-text">Starting at $17.99</p>
              <a href="" className="btn-link">
                <span className="span">Shop Now</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                <div className="has-bg-image " style={b1}></div>
              </a>
            </div>
          </li>
          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">What’s New?</h2>
              <p className="card-text">Get the glow</p>
              <a href="" className="btn-link">
                <span className="span">Discover Now</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>

                <div className="has-bg-image " style={b2}></div>
              </a>
            </div>
          </li>

          <li>
            <div className="collection-card has-before hover:shine">
              <h2 className="h2 card-title">Buy 1 Get 1</h2>
              <p className="card-text">Starting at $7.99</p>
              <a href="" className="btn-link">
                <span className="span">Discover Now</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>

                <div className="has-bg-image " style={b3}></div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Collection
