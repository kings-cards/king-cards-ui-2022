// CARDS WE BUY

// css
import styles from './index.module.css';

// images
import rectangle from '../../assets/images/backgrounds/rectangle-mobile.png';
import giftCardIcon from '../../assets/images/icons/giftcard.png';
import giftCardShowcase from '../../assets/images/graphics/cards-mobile.png';
import checkmark from '../../assets/images/icons/checkmark.png';


const CardsWeBuy = () => {
    return (
        <section className={`${styles.cards_we_buy}`} style={{backgroundImage: `url(${rectangle})`}}>
          <div className='pt-10 mt-12'>
            <div className='ml-7'>
              <img src={giftCardIcon} alt='gift icon'/>
            </div>

            <div className='flex flex-row justify-between pl-7'>
              <div className='basis-9/12'>
                <p className='heading-1 text-left mt-6'>Gift Cards We Buy</p>
                <p className='small-text text-left wide-line-height mt-6'>
                  We buy a whole lot of gift cards from the USA and many other countries.
                  Our speed and quality of service cannot be matched by any other.
                  Why not testify to it by giving us a try?
                  Hit the signup button and trade your digital assets now.
                </p>
              </div>

              <div className='basis-/12 mt-7'>
                <img src={giftCardShowcase} alt='gift card showcase' style={{width:'22vw'}} />
              </div>
            </div>
          </div>

          <div className='mt-12'>
            <ul className='pl-7'>
              <li className='flex flex-row gap-3 my-3'>
                <span className={`${styles.list_item_circle} p-1.5`}>
                  <img src={checkmark} alt='checkmark' />
                </span>

                <p className='grid content-center small-text'>
                  iTunes, Steam, Google, Visa
                </p>
              </li>

              <li className='flex flex-row gap-3 my-3'>
                <span className={`${styles.list_item_circle} p-1.5`}>
                  <img src={checkmark} alt='checkmark' />
                </span>

                <p className='grid content-center small-text'>
                  Walmart, Nike, Amex, Offgamers
                </p>
              </li>

              <li className='flex flex-row gap-3 my-3'>
                <span className={`${styles.list_item_circle} p-1.5`}>
                  <img src={checkmark} alt='checkmark' />
                </span>

                <p className='grid content-center small-text'>
                  Amazon, Sephora, Nordstrom, Nike
                </p>
              </li>

              <li className='flex flex-row gap-3 my-3'>
                <span className={`${styles.list_item_circle} p-1.5`}>
                  <img src={checkmark} alt='checkmark' />
                </span>

                <p className='grid content-center small-text'>
                  Apple Store, Macy, Vanilla, Target
                </p>
              </li>

              <li className='flex flex-row gap-3 my-3'>
                <span className={`${styles.list_item_circle} p-1.5`}>
                  <img src={checkmark} alt='checkmark' />
                </span>

                <p className='grid content-center small-text'>
                  eBay, Best-Buy, Home Depot
                </p>
              </li>
            </ul>

            <div className='mt-12'>
              <div className={`${styles.coral_strip_1} py-1`}></div>
              <div className={`${styles.coral_strip_2} py-0.5`}></div>
            </div>
          </div>
        </section>
    )
}

export default CardsWeBuy;
