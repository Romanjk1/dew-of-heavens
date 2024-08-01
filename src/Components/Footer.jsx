import React from 'react'
import logo from './../assets/logo.png'
import pay from './../assets/pay.png'

const Footer = () => {
  return (
    <footer className="footer reveal">
      <div className="container">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <p className="footer-list-text">
                Find a location nearest you. See{' '}
                <a href="" className="link">
                  Our Stores
                </a>
              </p>
            </li>
            <li>
              <p className="footer-list-text bold">+391 (0)35 2568 4593</p>
            </li>
            <li>
              <p className="footer-list-text ">hello@domain.com</p>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Useful Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                New Products
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Bundle & Save
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Online Gift Card
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Start a Return
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Shipping FAQ
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms & Conditions
              </a>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="newsletter-title">Good emails.</p>
            <p className="newsletter-text">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                id=""
                placeholder="Enter your email address"
                required
                className="email-field"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="wrapper">
            <p className="copyright">&copy; 2022 Rmcapitals Corp</p>

            <ul className="social-list">
              <li>
                <a href="" className="social-link">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" className="social-link">
                  <i class="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li>
                <a href="" className="social-link">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="" className="social-link">
                  <i class="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <a href="#" className="logo">
            <img
              src={logo}
              alt="Glowing"
              width={179}
              height={26}
              loading="lazy"
            />
          </a>
          <img
            src={pay}
            alt="available all payment method"
            width={313}
            height={28}
            className="w-100"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
