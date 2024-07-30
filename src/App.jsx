import './App.css'
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
