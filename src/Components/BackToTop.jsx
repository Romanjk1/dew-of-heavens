import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isTop, setIsTop] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 150) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a href="#top" className={`back-top-btn ${isTop ? 'active' : ''}`}>
      <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  )
}

export default BackToTop
