// CONTACT FORM

// css
import styles from './index.module.css';

// images
import personIcon from '../../assets/images/icons/user.png';
import greyEmailIcon from '../../assets/images/icons/email-grey.png';
import greyPhoneIcon from '../../assets/images/icons/phone-grey.png';


const Contact = () => {
    return (
        <section className={`${styles.contact_form} py-12 px-7`} id='contact'>
          <div>
            <p className='heading-1 text-left mb-6'>Contact Us</p>

            <form className='grid justify-start grid-cols-1'>
              <div className={`${styles.input_container} grid grid-cols-1 my-2`}>
                <input className='pl-12 pr-3 py-3 basis-1' type='text' name='Fullname' maxLength='30' placeholder='Full Name' />
                <span className='-mt-8 ml-4' style={{width: '20px'}}>
                  <img src={personIcon} alt='icon' />
                </span>
              </div>

              <div className={`${styles.input_container} grid grid-cols-1 my-2`}>
                <input className='pl-12 pr-3 py-3 basis-1' type='text' name='Email' maxLength='30' placeholder='Email' />
                <span className='-mt-8 ml-4' style={{width: '20px'}}>
                  <img src={greyEmailIcon} alt='icon' />
                </span>
              </div>

              <div className={`${styles.input_container} grid grid-cols-1 my-2`}>
                <input className='pl-12 pr-3 py-3 basis-1' type='text' name='Phone' maxLength='30' placeholder='Phone Number' />
                <span className='-mt-8 ml-4' style={{width: '20px'}}>
                  <img src={greyPhoneIcon} alt='icon' style={{width: '20px'}} />
                </span>
              </div>

              <div className='grid grid-cols-1 my-2'>
                <textarea className='px-4 py-3 basis-1' name='Message' rows='5' maxLength='600' placeholder='Message' />
              </div>

              <div className='grid grid-cols-1 justify-center mt-3'>
                <button className={`${styles.submit_btn} py-3 basis-1 white--text`}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
    )
}

export default Contact;
