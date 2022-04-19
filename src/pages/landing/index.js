// LANDING PAGE

// hero section
import HeroSection from '../../widgets/hero-section';

// cards we buy
import CardsWeBuy from '../../widgets/cards-we-buy';

// testimonial section
import Testimonials from '../../widgets/testimonials';

// do more
import DoMore from '../../widgets/do-more';

// why trade with us
import WhyTradeUs from '../../widgets/why-trade-with-us';

// join us
import JoinUs from '../../widgets/join-us';

// ask section
import AskSection from '../../widgets/ask-anything';

// trusted vendor
import TrustedVendor from '../../widgets/trusted-vendor';

// sell unwanted
import SellUnwantedCards from '../../widgets/sell-unwanted';

// need hand
import NeedHand from '../../widgets/need-a-hand';

// contact
import Contact from '../../widgets/contact';

// footer
import Footer from '../../widgets/footer';



const Landing = () => {

  return (
    <main className='kc-landing'>
      <HeroSection />
      <CardsWeBuy />
      <Testimonials />
      <DoMore />
      <WhyTradeUs />
      <JoinUs />
      <AskSection />
      <TrustedVendor />
      <SellUnwantedCards />
      <NeedHand />
      <Contact />
      <Footer />
    </main>
  )
}

export default Landing;
  