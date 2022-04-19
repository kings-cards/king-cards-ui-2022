// SELL UNWANTED CARDS

// css
import styles from './index.module.css';

// images
import sellUnwantedBg from '../../assets/images/backgrounds/sell-unwanted-bg.png';
import sellUnwantedBgOverlay from '../../assets/images/backgrounds/sell-unwanted-overlay.png';
import googlePlaystoreLogoBlack from '../../assets/images/icons/playstore-black.png';
import appleAppstoreLogo from '../../assets/images/icons/appstore.png';



const SellUnwantedCards = () => {
    return (
        <section className={`${styles.sell_unwanted_cards} pt-12`} style={{backgroundImage: `url(${sellUnwantedBg})`}}>
          <div className='px-8'>
            <p className='heading-1 white--text'>Sell Your Unwanted Gift Cards for cash</p>
            <p className='small-text white--text mt-4 mb-10'>Trading giftcards with us is completely safe and secure. Your giftcards are safe because we redeem them directly. We don't give out cards to any third party.</p>
          </div>
          <div className={`${styles.app_btn_container} grid grid-cols-2 gap-2 px-8 mt-5 mb-10`}>
              <button className={`${styles.app_button_white} flex flex-row px-2 py-2`}>
                <div className='grid justify-center content-center basis-1/4' style={{height: '100%'}}>
                  <img src={googlePlaystoreLogoBlack} alt='google playstore logo' style={{width: '20px'}} />
                </div>
                <div className='grid content-center basis-3/4' style={{height: '100%'}}>
                  <p className='x-small-text text-left'>Get it on</p>
                  <p className='bold-text text-left'>Google Play</p>
                </div>
              </button>

              <button className={`${styles.app_button_blue} flex flex-row px-2 py-2`}>
                <div className='grid justify-center content-center basis-1/4' style={{height: '100%'}}>
                  <img src={appleAppstoreLogo} alt='google playstore logo' />
                </div>
                <div className='grid content-center basis-3/4' style={{height: '100%'}}>
                  <p className='x-small-text text-left white--text'>Download on</p>
                  <p className='bold-text text-left white--text'>App Store</p>
                </div>
              </button>
            </div>
            <div className={`${styles.sell_unwanted_overlay}`} style={{backgroundImage: `url(${sellUnwantedBgOverlay})`}}>
              
            </div>
        </section>
    )
}

export default SellUnwantedCards;
