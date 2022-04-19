// JOIN US

// css
import styles from './index.module.css';


const JoinUs = () => {
    return (
        <section className={`${styles.join_us_section} ml-7 pr-5 pt-12`}>
          <div>
            <p className='heading-1 text-left'>You can Join us to Trade your Gift Cards Now</p>
            <p className='small-text text-left py-6 pr-5'>
              We at Kingcards have an incredibly high rate with fast payment that will keep you in awe as you trade with us.
              You can only enjoy that if you can give us a try. We cannot guarantee you the best experience if you decide to try
              anyhow vendors. In short, we are here to give you the best.
            </p>
            <div className={`${styles.horizontal_slide} flex flex-row gap-2 pb-12 no-scrollbar`}>
              <div className={`${styles.percent_box} px-3 py-6 light-red`}>
                <p className='heading-1 text-left mb-5 red--text'>
                  95%
                </p>
                <p className='small-text text-left'>Customer Responsibility</p>
              </div>

              <div className={`${styles.percent_box} px-3 py-6 light-blue`}>
                <p className='heading-1 text-left mb-5 blue--text'>
                  92%
                </p>
                <p className='small-text text-left'>Product ease of use</p>
              </div>

              <div className={`${styles.percent_box} px-3 py-6 mr-2 light-green`}>
                <p className='heading-1 text-left mb-5 green--text'>
                  99%
                </p>
                <p className='small-text text-left'>Trust and Security</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default JoinUs;
