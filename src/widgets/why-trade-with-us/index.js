// WHY TRADE WITH US

// css
import styles from './index.module.css';

// images
import whySectionBg from '../../assets/images/backgrounds/why-section-mobile.png';
import questionMark from '../../assets/images/icons/question-mark.png';
import incredibleXP from '../../assets/images/icons/incredible-experience.png';
import customerReviews from '../../assets/images/icons/customer-reviews.png';
import instantPayment from '../../assets/images/icons/instant-payment.png';


const WhyTradeUs = () => {
    return (
        <section className={`${styles.why_section} pt-10`} style={{backgroundImage: `url(${whySectionBg})`}}>
          <div className='grid justify-start pl-7 pt-10'>
            <img src={questionMark} alt='question mark icon' className='mb-10' />
            <p className='heading-1 text-left'>Why Trade Your Gift Cards With Us?</p>
            <p className='small-text text-left mt-4 mb-12 mr-7'>
              We are a registered company that has been in business for 4 years
              and our clean records can attest to that. Integrity and excellent customer
              satisfaction are what we stand for.
              <br/>
              <br/>
              We can boast of great referrals which is one of the best avenues for sustaining our business.
            </p>

            <button className={`${styles.why_btn} px-3 py-4 small-text white--text`}>
              Get Started  
            </button> 
          </div>
          <div className='mt-2 pt-12 pb-10 flex flex-col'>
            <div className={`${styles.why_card} mx-7 mb-6 p-8`}>
              <img src={incredibleXP} alt='icon' className='mx-auto' />
              <p className='heading-2 mb-3 mt-7'>
                Incredible Experience
              </p>
              <p className='small-text'>
                We deliver the best gift card exchange experience through our services and simple trading process.
              </p>
            </div>

            <div className={`${styles.why_card} mx-7 mb-6 p-8`}>
              <img src={customerReviews} alt='icon' className='mx-auto' />
              <p className='heading-2 mb-3 mt-7'>
                Customer Reviews
              </p>
              <p className='small-text'>
                Our 20,000+ customers have been trading Amazon, iTunes, Google Play, Steam and other gift cards with us over the internet. 
              </p>
            </div>

            <div className={`${styles.why_card} mx-7 mb-6 p-8`}>
              <img src={instantPayment} alt='icon' className='mx-auto' />
              <p className='heading-2 mb-3 mt-7'>
                Instant Payments
              </p>
              <p className='small-text'>
                Our payment facility is among the best available, you can get cash in exchange for your gift cards in few minutes.
              </p>
            </div>
          </div>
        </section>
    )
}

export default WhyTradeUs;
