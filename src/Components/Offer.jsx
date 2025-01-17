import React from 'react'
import offer1 from './../assets/offer-banner-1.jpg'
import offer2 from './../assets/offer-banner-2.jpg'

const Offer = () => {
  return (
    <section className="section offer reveal" id="offer">
      <div className="container">
        <figure className="offer-banner">
          <img
            src={offer1}
            width={305}
            height={408}
            loading="lazy"
            alt="offer products"
            className="w-100"
          />
          <img
            src={offer2}
            width={450}
            height={625}
            loading="lazy"
            alt="offer products"
            className="w-100"
          />
        </figure>
        <div className="offer-content">
          <p className="offer-subtitle">
            <span className="span">Special Offer</span>
            <span className="badge">-20%</span>
          </p>
          <h2 className="h2-large section-title">Mountain Pine Bath Oil</h2>
          <p className="section-text">
            Made using clean, non-toxic ingredients, our products are designed
            for everyone.
          </p>

          <div className="countdown">
            <span className="time">15</span>
            <span className="time">21</span>
            <span className="time">46</span>
            <span className="time">08</span>
          </div>
          <a href="#" className="btn btn-primary">
            Get Only $39.00
          </a>
        </div>
      </div>
    </section>
  )
}

export default Offer
