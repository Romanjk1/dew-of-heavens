import Logo from '../../assets/logo.png'
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [Toggle, showMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [lastScrolledPos, setLastScrolledPos] = useState(0)

  const handleScroll = () => {
    const scrollY = window.scrollY

    // Handle header activation based on scroll position
    if (scrollY > 150) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    // Handle sticky header based on scroll direction
    if (lastScrolledPos >= scrollY) {
      document.querySelector('[data-header]').classList.remove('header-hide')
    } else {
      document.querySelector('[data-header]').classList.add('header-hide')
    }

    setLastScrolledPos(scrollY)
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrolledPos]) // Dependency array with lastScrolledPos to handle updates

  return (
    <>
      <header className="header">
        <div className="alert">
          <div className="container">
            <p className="alert-text">Free Shipping On All U.S. Orders $50+</p>
          </div>
        </div>
        <div data-header className={`header-top ${isActive ? 'active' : ''}`}>
          <div className="container">
            <button
              className="nav-open-btn"
              aria-label="open menu"
              data-nav-toggle
              onClick={() => showMenu(!Toggle)}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>
            <div className="input-wrapper">
              <input
                type="search"
                name="search"
                placeholder="Search product"
                className="search-field"
              />
              <button className="search-submit" aria-label="search">
                <i className="bx bx-search"></i>
              </button>
            </div>
            <a href="#" className="logo">
              <img src={Logo} alt="Glowing" width={179} height={40} />
            </a>
            <div className="header-actions">
              <button className="header-action-btn" aria-label="user">
                <i class="bx bx-user"></i>
              </button>
              <button className="header-action-btn" aria-label="star">
                <i class="bx bx-star"></i>
                <span className="btn-badge">0</span>
              </button>
              <button className="header-action-btn" aria-label="favorite item">
                <data value="0" className="btn-text">
                  $0.00
                </data>
                <i class="bx bx-shopping-bag"></i>
                <span className="btn-badge">0</span>
              </button>
            </div>

            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link has-after">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#collection" className="navbar-link has-after">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#shop" className="navbar-link has-after">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#offer" className="navbar-link has-after">
                    Offer
                  </a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link has-after">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="sidebar">
        <div
          className={Toggle ? 'mobile-navbar active ' : 'mobile-navbar'}
          data-navbar
        >
          <div className="wrapper">
            <a href="#" className="logo">
              <img src={Logo} alt="Glowing" width={179} height={26} />
            </a>
            <button
              className="nav-close-btn"
              data-nav-toggle
              onClick={() => showMenu(!Toggle)}
            >
              <i class="bx bx-x"></i>
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>
            <li>
              <a href="#collection" className="navbar-link" data-nav-link>
                Collection
              </a>
            </li>
            <li>
              <a href="#shop" className="navbar-link" data-nav-link>
                Shop
              </a>
            </li>
            <li>
              <a href="#offer" className="navbar-link" data-nav-link>
                Offer
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={Toggle ? 'overlay active' : 'overlay'}></div>
      </div>
    </>
  )
}

export default Header
