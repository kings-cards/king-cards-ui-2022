// DO MORE

// css
import styles from './index.module.css';

// images
import bitcoin from '../../assets/images/backgrounds/bitcoin.png';
import arrow from '../../assets/images/icons/arrow.png';


const DoMore = () => {
    return (
      <section className={`${styles.do_more_section} grid content-center`} style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bitcoin})`}}>
        <div className='mx-6'>
          <p className='heading-1 white--text mb-4'>
            Do more with King Cards
          </p>
          <p className='small-text white--text mb-6'>
            Not limited to the purchase or sales of gift cards, you can easily pay bills, recharge airtime and buy data on the go.
          </p>

          <div>
            <button className={`${styles.do_more_btn} px-3 py-3`}>
              <div className='flex flex-row'>
                <div>
                  <p className='small-text pr-2'>
                    Learn more
                  </p>
                </div>
                <div className='grid content-center'>
                  <img src={arrow} alt='arrow icon' />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    )
}

export default DoMore;
