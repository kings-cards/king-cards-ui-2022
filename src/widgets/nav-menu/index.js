// NAV MENU

import { Link } from "react-router-dom";

// css
import styles from './index.module.css';

// image
import logo from '../../assets/images/logo/logo.png';
import closeIcon from '../../assets/images/icons/menu-close.png';


const NavMenu = (props) => {
    const { close } = props;

    return (
        <nav className={`${styles.mobile_nav} kc-app-nav`}>
            <section className={`${styles.mobile_header_content} grid grid-cols-2 content-center justify-between my-3.5 mx-3 px-6`}>
                <div className='flex-row'>
                    <img src={logo} alt='king cards logo' />
                </div>

                <div className='grid flex-row justify-end content-center'>
                    <div className={`${styles.menu_icon_container} flex flex-row content-center justify-center mr-6`}>
                        <div className={`flex content-center justify-center`} onClick={() => close()}>
                            <img className={`${styles.close}`} src={closeIcon} alt='close menu' />
                        </div>
                    </div>
                </div>
            </section>
        
            <ul>
                <li>
                    <Link className='flex flex-row body-text py-2 mx-7 my-1' to='/about'>About</Link>
                </li>
                <li>
                    <Link className='flex flex-row body-text py-2 mx-7 my-1' to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link className='flex flex-row body-text py-2 mx-7 my-1' to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link className='flex flex-row body-text py-2 mx-7 my-1' to='/faq'>FAQs</Link>
                </li>
            </ul>

            <div className='flex flex-col mt-6 mx-7'>
                <button className={`${styles.btn} my-2 py-4 small-text light-blue`}>
                    <Link to='/login'>Sign in</Link>
                </button>
                <button className={`${styles.btn} my-2 py-4 small-text white--text blue`} href='/register'>
                    <Link to='/register'>Register</Link>
                </button>
            </div>
        </nav>
    )
}

export default NavMenu;
