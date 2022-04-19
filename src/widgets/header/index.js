// HEADER

// internal state
import { useState } from 'react';

// css
import styles from './index.module.css';

// image
import logo from '../../assets/images/logo/logo.png';

// nav
import NavMenu from '../nav-menu';

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const openMenu = () => setOpen(true);
  
  return (
    <header className={`${styles.mobile_header} row-auto py-3.5 px-3`}>
      <section className={`${styles.mobile_header_content} grid grid-cols-2 content-center justify-between px-6`}>
        <div className='flex-row'>
          <img src={logo} alt='king cards logo' />
        </div>

        <div className='grid flex-row justify-end content-center'>
          <div className={`${styles.menu_icon_container} grid flex-row content-center justify-center`} onClick={() => openMenu()}>
            <div className={`grid flex-col content-center justify-center`}>
              <div className={`${styles.dash} mb-1.5`}></div>
              <div className={`${styles.dash}`}></div>
            </div>
          </div>
        </div>

        {open && <NavMenu close={closeMenu} />}

        {/* <nav>
          <ul>
            <li>
              <a href='about'>About</a>
            </li>
            <li>
              <a href='blog'>Blog</a>
            </li>
            <li>
              <a href='contact'>Contact</a>
            </li>
            <li>
              <a href='faq'>FAQs</a>
            </li>
          </ul>

          <div>
            <button>Sign in</button>
          </div>

          <div>
            <button>Register</button>
          </div>
        </nav> */}
      </section>
    </header>
  )
}

export default Header; 
