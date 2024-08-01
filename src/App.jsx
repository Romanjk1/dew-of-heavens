import './App.css'
import { useEffect } from 'react'
import Banner from './Components/Banner'
import Collection from './Components/collection/Collection'
import Header from './Components/header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/shop/Shop'
import Features from './Components/Features'
import Offer from './Components/Offer'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import BackToTop from './Components/BackToTop'
function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')

    const scrollReveal = () => {
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
          section.classList.add('active')
        } else {
          section.classList.remove('active') // Optional: remove the class if not in view
        }
      })
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', scrollReveal)

    // Call scrollReveal once to check initial positions
    scrollReveal()

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', scrollReveal)
    }
  }, []) // Empty dependency array means this useEffect runs once after the initial render
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero />
          <Collection />
          <Shop />
          <Banner />
          <Features />
          <Offer />
          <Blog />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
