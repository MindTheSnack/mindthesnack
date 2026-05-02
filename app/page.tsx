import BackgroundOrbs from '@/components/BackgroundOrbs'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Partnership from '@/components/Partnership'
import Products from '@/components/Products'
import Machines from '@/components/Machines'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-dark-bg">
      <BackgroundOrbs />
      <Navigation />

      <Hero />
      <AboutUs />
      <Partnership />
      <Products />
      <Machines />
      <Carousel />

      <Footer />
    </main>
  )
}
