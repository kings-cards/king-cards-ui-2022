// TESTIMONIALS

// css
import styles from './index.module.css';

// images
import testimonialBg from '../../assets/images/backgrounds/testimonial-bg-mobile.png';
import person1 from '../../assets/images/graphics/person1.png';
import twitterIcon from '../../assets/images/icons/twitter.png';


const Testimonials = () => {
    return (
      <section className={`${styles.testimonial_section} py-12`} style={{backgroundImage: `url(${testimonialBg})`}}>
        <p className='heading-1 text-left ml-7'>Testimonials</p>

        <div className={`${styles.sliding_section} no-scrollbar`}>
          <div className={`${styles.carousel_container} flex justify-start mt-6 pl-7`}>
            <div className={`${styles.carousel_content} mr-4 px-6 pt-7`}>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                  <div className={`${styles.profile_pic} basis-1/4`} style={{backgroundImage: `url(${person1})`}}></div>
                  <div className='ml-2'>
                    <p className='heading-3 text-left'>Dany Monson</p>
                    <p className='small-text text-left grey--text'>CEO &amp; Founder</p>
                  </div>
                </div>
                <div className=''>
                  <img src={twitterIcon} alt='twitter logo' style={{width:'15px'}} />
                </div>
              </div>
              <div className='flex flex-row mt-7'>
                <p className='small-text'>
                  Some text here...
                </p>
              </div>
            </div>

            <div className={`${styles.carousel_content} mr-4 px-6 pt-7`}>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                  <div className={`${styles.profile_pic} basis-1/4`} style={{backgroundImage: `url(${person1})`}}></div>
                  <div className='ml-2'>
                    <p className='heading-3 text-left'>Baha Moretz</p>
                    <p className='small-text text-left grey--text'>Art Director</p>
                  </div>
                </div>
                <div className=''>
                  <img src={twitterIcon} alt='twitter logo' style={{width:'15px'}} />
                </div>
              </div>
              <div className='flex flex-row mt-7'>
                <p className='small-text'>
                  Some text here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimonials;
