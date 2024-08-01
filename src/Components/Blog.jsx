import React from 'react'
import blog1 from './../assets/blog-1.jpg'
import blog2 from './../assets/blog-2.jpg'
import blog3 from './../assets/blog-3.jpg'
const Blog = () => {
  return (
    <section className="section blog reveal" id="blog">
      <div className="container">
        <h2 className="h2-large section-title">More to Discover</h2>
        <ul className="flex-list">
          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ width: '700', height: '450' }}
              >
                <img
                  src={blog1}
                  alt="Find a Store"
                  width={700}
                  height={450}
                  loading="lazy"
                  className="img-cover"
                />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Find a Store
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </li>

          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ width: '700', height: '450' }}
              >
                <img
                  src={blog2}
                  alt="From Our Blog"
                  width={700}
                  height={450}
                  loading="lazy"
                  className="img-cover"
                />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  From Our Blog
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </li>

          <li className="flex-item">
            <div className="blog-card">
              <figure
                className="card-banner img-holder has-before hover:shine"
                style={{ width: '700', height: '450' }}
              >
                <img
                  src={blog3}
                  alt="Our Story"
                  width={700}
                  height={450}
                  loading="lazy"
                  className="img-cover"
                />
              </figure>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Our Story
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Our Store</span>
                <i class="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Blog
