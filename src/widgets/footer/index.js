// FOOTER

// link
import { Link } from 'react-router-dom';

// css
import styles from './index.module.css';

// images
import fbIcon from '../../assets/images/icons/facebook.png';
import instaIcon from '../../assets/images/icons/instagram.png';
import whatsappIconWhite from '../../assets/images/icons/whatsapp.png';



const Footer = () => {
    return (
        <footer className='px-7 py-12'>
          <div className='py-6'>
            <p className='heading-1 text-left white--text mb-6'>About Us</p>
            <p className='small-text text-left white--text'>
              Sell iTunes, Amazon, eBay, Google Play and other Gift Cards instantly for NAIRA.
              <br/>
              KingCards NG is an exchange platform where you can convert your Gift Cards to Naira easily.
              We make exchanging your gift cards very easy.
            </p>
          </div>
          <div className='flex flex-row justify-between gap-12 py-6 mb-12'>
            <div className='basis-1/2'>
              <p className='heading-1 text-left white--text mb-6'>Quick Links</p>
              <ul>
                <li className='flex py-1'>
                  <a className='small-text text-left white--text' href='#contact'>Contact</a>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/how-to-trade'>How to trade?</Link>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/rates'>Rates</Link>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/login'>Login</Link>
                </li>
              </ul>
            </div>

            <div className='basis-1/2'>
              <p className='heading-1 text-left white--text mb-6'>Company</p>
              <ul>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/about'>About</Link>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/how-to-trade'>Privacy Policy</Link>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/terms-of-use'>Terms of use</Link>
                </li>
                <li className='flex py-1'>
                  <Link className='small-text text-left white--text' to='/faq'>FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <hr className='mb-6'></hr>
            <p className='small-text text-left white--text'>Kingcards &copy; 2022. All rights reserved.</p>
            <ul className='flex flex-row mt-6'>
              <li className='pr-1'>
                <a href='https://www.facebook.com/kingcardsng1' target='_blank' rel='noreferrer'>
                  <img src={fbIcon} alt='icon' style={{width: '20px', height: '20px'}} />
                </a>
              </li>
              <li className='px-1'>
                <a href='https://instagram.com/kingcards.ng' target='_blank' rel='noreferrer'>
                  <img src={instaIcon} alt='icon' style={{width: '20px', height: '20px'}} />
                </a>
              </li>
              <li className='pl-1'>
                <a href="https://api.whatsapp.com/send?phone=2349082896000&text=Hi,%20I%20want%20to%20sell%20card" target='_blank' rel='noreferrer'>
                  <img src={whatsappIconWhite} alt='icon' style={{width: '20px', height: '20px'}} />
                </a>
              </li>
            </ul>
          </div>
        </footer>
    )
}

export default Footer;
