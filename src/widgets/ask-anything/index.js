// ASK SECTION

// css
import styles from './index.module.css';

// dropdown
import Dropdown from '../dropdown-item';


const AskSection = () => {
    return (
        <section className={`${styles.ask_section} px-7 py-12`}>
          <div className='mb-10'>
            <p className='heading-1 white--text text-left'>Ask us anything</p>
          </div>
          <div>
            <Dropdown
              titleClassName={`${styles.underline} body-text white--text text-left py-3`}
              contentClassName={`${styles.content_text} small-text white--text text-left py-4 mb-6`}
              title='How does it work?'
              content='Sign up on our website with your correct details, verify your email address and add your bank account details. Initiate a trade, upload the gift cards and wait for confirmation. Upon confirmation, your bank account will be credited instantly!'
            />

            <Dropdown
              titleClassName={`${styles.underline} body-text white--text text-left py-3`}
              contentClassName={`${styles.content_text} small-text white--text text-left py-4 mb-6`}
              title='List of gift cards that take longer time to redeem'
              content={
                <>
                  <p className='mb-2'>There are some gift cards that take more than average time to be redeemed.</p>

                  <p className='mb-2'>Unlike the conventional gift cards like itunes, steam that take less than 10 minutes, these gift cards take between 15 minutes to 2 hours, or even more.</p>

                  <p className='mb-4'>We have provided this list so you won't be worried when your gift card is pending for a long period.</p>
                
                  <p className='bold-text mb-2'>Here is a list of them:</p>

                  <ul className='ml-6 mb-4'>
                    <li className={`${styles.list_item} mb-2`}>Walmart Gift Cards</li>
                    <li className={`${styles.list_item} mb-2`}>Apple Store Gift Cards</li>
                    <li className={`${styles.list_item} mb-2`}>eBay Gift Cards (At times)</li>
                    <li className={`${styles.list_item} mb-2`}>Vanilla Gift Cards (At times)</li>
                    <li className={`${styles.list_item} mb-2`}>Sephora Gift Cards</li>
                    <li className={`${styles.list_item} mb-2`}>Target Gift Cards</li>
                    <li className={`${styles.list_item} mb-2`}>Best Buy Gift Cards (At times)</li>
                    <li className={`${styles.list_item} mb-2`}>Nordstrom Gift Cards</li>
                    <li className={`${styles.list_item}`}>And many more...</li>
                  </ul>

                  <p className='mb-2'>It will be clearly stated in the trade terms if a trade that will take longer time.</p>

                  <p className='mb-2'>Kindly be patient and do not give the card to another vendor as it is already being processed.</p>
                </>
              }
            />

            <Dropdown
              titleClassName={`${styles.underline} body-text white--text text-left py-3`}
              contentClassName={`${styles.content_text} small-text white--text text-left py-4 mb-6`}
              title='Why is my trade pending?'
              content={
                <>
                  <p>The 'pending' status indicates that your trade is being processed and will be concluded soon. Kindly be patient. You can contact us via live chat if the trade is taking longer than expected.</p>

                  <p>Be informed that no trade is neglected or intentionally left unattended to. All transactions are important and are attended to in FIFO (First-In-First-Out) order.</p>

                  <p>Therefore, your trade is always a priority, kindly be patient with us.</p>
                </>
              }
            />

            <Dropdown
              titleClassName={`${styles.underline} body-text white--text text-left py-3`}
              contentClassName={`${styles.content_text} small-text white--text text-left py-4 mb-6`}
              title='Why is my trade rejected?'
              content={
                <>
                  <p className='bold-text mb-2'>Your trade will be rejected for any of the following reasons:</p>
                  
                  <ul className='ml-6 mb-4'>
                    <li className={`${styles.list_item} mb-2`}>Your gift card is already redeemed</li>
                    <li className={`${styles.list_item} mb-2`}>Your gift card is not properly activated</li>
                    <li className={`${styles.list_item} mb-2`}>Your gift card is not clear enough</li>
                    <li className={`${styles.list_item} mb-2`}>Your gift card code is wrong</li>
                    <li className={`${styles.list_item} mb-2`}>You submitted an empty trade</li>
                    <li className={`${styles.list_item} mb-2`}>You uploaded the wrong picture</li>
                    <li className={`${styles.list_item} mb-2`}>You submitted the wrong trade</li>
                    <li className={`${styles.list_item} mb-2`}>You uploaded an unacceptable receipt (For cards that require a receipt)</li>
                  </ul>
                </>
              }
            />

            <Dropdown
              titleClassName={`${styles.underline} body-text white--text text-left py-3`}
              contentClassName={`${styles.content_text} small-text white--text text-left py-4 mb-6`}
              title="Why can't I withdraw?"
              content="Trades processed are automatically sent to your bank account"
            />
          </div>
        </section>
    )
}

export default AskSection;
