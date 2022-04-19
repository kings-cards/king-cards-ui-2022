// NOT FOUND PAGE

// css
import styles from './index.module.css';


const NotFound = () => {
  return (
    <div className='kc-not-found'>
      <main>
        <section className={`${styles.page_section} grid grid-cols-1 content-center mx-7`}>
          <p className='heading-1'>Page not found</p>
        </section>
      </main>
    </div>
  )
}

export default NotFound;
  