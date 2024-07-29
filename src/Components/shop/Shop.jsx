import React from 'react'
import img1 from '../../assets/product-01.jpg'
import img2 from '../../assets/product-02.jpg'
import img3 from '../../assets/product-03.jpg'
import img4 from '../../assets/product-04.jpg'
import img5 from '../../assets/product-05.jpg'
import img6 from '../../assets/product-06.jpg'
import img7 from '../../assets/product-07.jpg'
import img8 from '../../assets/product-08.jpg'
import img9 from '../../assets/product-09.jpg'
import img10 from '../../assets/product-10.jpg'
import img11 from '../../assets/product-11.jpg'

const Shop = () => {
  return (
    <>
      <section className="section shop" id="shop">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Our Bestsellers</h2>
            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>
              <i class="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="shop-card">
                <div
                  className="card-banner img-holder"
                  style={{ width: '540', height: '720' }}
                >
                  <img
                    src={img1}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img2}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img3}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img4}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img5}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img6}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                    <del className="del"></del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section shop" id="shop">
        <div className="container">
          <div className="title-wrapper">
            <h2 className="h2 section-title">Under $25</h2>
            <a href="#" className="btn-link">
              <span className="span">Shop All Products</span>
              <i class="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <ul className="has-scrollbar">
            <li className="scrollbar-item">
              <div className="shop-card">
                <div
                  className="card-banner img-holder"
                  style={{ width: '540', height: '720' }}
                >
                  <img
                    src={img7}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$39.00</del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img8}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img9}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img10}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />
                  <span className="badge">-20%</span>
                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                  </div>

                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img11}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <del className="del">$39.00</del>
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="scrollbar-item">
              <div className="shop-card">
                <div className="card-banner img-holder">
                  <img
                    src={img1}
                    width={540}
                    height={720}
                    loading="lazy"
                    alt="Facial cleanser"
                    className="img-cover"
                  />

                  <div className="card-actions">
                    <button className="action-btn">
                      <i class="bx bx-shopping-bag"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-star"></i>
                    </button>
                    <button className="action-btn">
                      <i class="bx bx-git-compare"></i>
                    </button>
                  </div>
                </div>

                <div className="card-content">
                  <div className="price">
                    <span className="span">$29.00</span>
                  </div>
                  <h3>
                    <a href="#" className="card-title">
                      Facial cleanser
                    </a>
                  </h3>
                  <div className="card-rating">
                    <div className="rating-wrapper">
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </div>
                    <p className="rating text">5170 reviews</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Shop
