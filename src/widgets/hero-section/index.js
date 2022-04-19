// HERO SECTION

// header
import Header from '../header';

// css
import styles from './index.module.css';

// images
import background from '../../assets/images/backgrounds/hero-bg-mobile.png';
import appleAppstoreLogo from '../../assets/images/icons/appstore.png';
import googlePlaystoreLogo from '../../assets/images/icons/playstore.png';
import phoneImage from '../../assets/images/graphics/phone.png';



const HeroSection = () => {
  return (
    <div className={`${styles.hero_section} kc-hero-section`}>
      <div className={`${styles.background}`}>
        <div style={{backgroundImage: `url(${background})`}} className={`${styles.background_image}`}></div>
      </div>

      <div className={`${styles.foreground}`}>
        <Header />

        <div className={`${styles.hero_text_container} mb-5`}>
            <p className='hero-text mx-11'>
              The best and most trusted website to trade your gift cards for instant cash.
            </p>

            <p className='body-text mx-11 mt-5'>
              Join thousands who have already discovered the smarter way to sell gift cards.
              We'll make sure you get the best price when you sell your gift cards to us.
            </p>

            <div className='grid grid-cols-2 gap-2 mx-11 mt-5 mb-10'>
              <button className={`${styles.app_button} flex flex-row`}>
                <div className='grid justify-center content-center basis-1/4' style={{height: '100%'}}>
                  <img src={googlePlaystoreLogo} alt='google playstore logo' />
                </div>
                <div className='grid content-center basis-3/4' style={{height: '100%'}}>
                  <p className='x-small-text text-left white--text'>Get it on</p>
                  <p className='bold-text text-left white--text'>Google Play</p>
                </div>
              </button>

              <button className={`${styles.app_button} flex flex-row`}>
                <div className='grid justify-center content-center basis-1/4' style={{height: '100%'}}>
                  <img src={appleAppstoreLogo} alt='google playstore logo' />
                </div>
                <div className='grid content-center basis-3/4' style={{height: '100%'}}>
                  <p className='x-small-text text-left white--text'>Download on</p>
                  <p className='bold-text text-left white--text'>App Store</p>
                </div>
              </button>
            </div>
        </div>

        <div className={`${styles.phone_image} mx-7`} style={{backgroundImage: `url(${phoneImage})`}}></div>
      </div>
    </div>
  )
}

export default HeroSection;
