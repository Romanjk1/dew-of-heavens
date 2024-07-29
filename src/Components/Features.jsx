import React from 'react'
import feature1 from './../assets/feature-1.jpg'
import feature2 from './../assets/feature-2.jpg'
import feature3 from './../assets/feature-3.jpg'
const Features = () => {
  return (
    <section className="section feature">
      <div className="container">
        <h2 className="h2-large section-title">
          Why Shop with Dew of Heavens?
        </h2>
        <ul className="flex-list">
          <li className="flex-item">
            <div className="feature-card">
              <img
                src={feature1}
                width={204}
                height={236}
                loading="lazy"
                alt="Guaranteed PURE"
                className="card-icon"
              />
              <h3 className="h3 card-title">Guaranteed PURE</h3>
              <p className="card-text">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </li>

          <li className="flex-item">
            <div className="feature-card">
              <img
                src={feature2}
                width={204}
                height={236}
                loading="lazy"
                alt="Completely Cruelty-Free"
                className="card-icon"
              />
              <h3 className="h3 card-title">Completely Cruelty-Free</h3>
              <p className="card-text">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </li>

          <li className="flex-item">
            <div className="feature-card">
              <img
                src={feature3}
                width={204}
                height={236}
                loading="lazy"
                alt="Ingredient Sourcing"
                className="card-icon"
              />
              <h3 className="h3 card-title">Ingredient Sourcing</h3>
              <p className="card-text">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features
