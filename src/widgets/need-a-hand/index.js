// NEED A HAND

// css
import styles from './index.module.css';

// images
import contactBg from '../../assets/images/backgrounds/contact-bg-mobile.png';
import phoneIcon from '../../assets/images/icons/phone.png';
import emailIcon from '../../assets/images/icons/email.png';
import addressIcon from '../../assets/images/icons/map.png';


const NeedHand = () => {
    return (
        <section className={`${styles.need_a_hand} px-7 py-12`} style={{backgroundImage: `url(${contactBg})`}}>
          <div className='grid justify-start'>
            <p className='heading-1 text-left'>Need a hand?</p>
            <p className='small-text text-left my-4'>
              We are always open and we welcome any questions you have for our team.
              If you wish to get in touch please fill out the form below, someone from our team will get back to you shortly
            </p>
            <ul>
              <li className='flex flex-row my-6'>
                <span className='basis-1/6'>
                  <img src={phoneIcon} alt='icon' />
                </span>
                <span className='grid body-text content-center'>
                  +234 908 289 6000
                </span>
              </li>

              <li className='flex flex-row my-6'>
                <span className='basis-1/6'>
                  <img src={emailIcon} alt='icon' />
                </span>
                <span className='grid content-center body-text'>
                  info@kingcards.ng
                </span>
              </li>

              <li className='flex flex-row my-6'>
                <span className=''>
                  <img src={addressIcon} alt='icon' style={{width: '65px'}} />
                </span>
                <span className='body-text text-left ml-3'>
                  No. 2 Turnbull road, Jabita close, Ikoyi Lagos.
                </span>
              </li>
            </ul>

            <button className={`${styles.why_btn} px-3 py-4 mt-6 small-text white--text`}>
              Get Started  
            </button> 
          </div>
        </section>
    )
}

export default NeedHand;
