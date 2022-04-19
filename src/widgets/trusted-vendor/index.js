// TRUSTED VENDOR

// css
import styles from './index.module.css';

// image
import trustedVendorBg from '../../assets/images/backgrounds/trusted-vendor-bg.png';
import googleLogo from '../../assets/images/logo/google-logo.png';
import uberLogo from '../../assets/images/logo/uber-logo.png';
import stripeLogo from '../../assets/images/logo/stripe-logo.png';
import nikeLogo from '../../assets/images/logo/nike-logo.png';
import airbnbLogo from '../../assets/images/logo/airbnb-logo.png';
import mastercardLogo from '../../assets/images/logo/mastercard-logo.png';


const TrustedVendor = () => {
    return (
        <section className={`${styles.trusted_vendor} py-12`} style={{backgroundImage: `url(${trustedVendorBg})`}}>
          <div className='px-7'>
            <p className='heading-1 mb-4'>Trusted Gift Card Vendor</p>
            <p className='small-text mb-10'>As a demonstration of our quality service in trading giftcards, and digital assets we have been published by some platforms across Nigeria and beyond.</p>
          </div>
          <div>
            <div className='grid grid-cols-4 justify-evenly gap-2 mb-2'>
              <div className={`${styles.company_logo} py-8`} style={{backgroundImage: `url(${googleLogo})`}}></div>
              <div className={`${styles.company_logo} py-8`} style={{backgroundImage: `url(${uberLogo})`}}></div>
              <div className={`${styles.company_logo} py-8`} style={{backgroundImage: `url(${stripeLogo})`}}></div>
              <div className={`${styles.company_logo} py-8`} style={{backgroundImage: `url(${nikeLogo})`}}></div>
            </div>
            <div className='flex flex-row justify-center gap-2'>
              <div className={`${styles.company_logo} basis-1/4 py-8`} style={{backgroundImage: `url(${airbnbLogo})`}}></div>
              <div className={`${styles.company_logo} basis-1/4 py-8`} style={{backgroundImage: `url(${mastercardLogo})`}}></div>
            </div>
          </div>
        </section>
    )
}

export default TrustedVendor;
