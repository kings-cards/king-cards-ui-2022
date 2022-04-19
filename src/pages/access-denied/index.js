// ACCESS DENIED PAGE

// css
import styles from './index.module.css';


const AccessDenied = () => {
  return (
    <div className='kc-access-denied'>
      <main>
        <section className={`${styles.page_section} grid grid-cols-1 content-center mx-7`}>
          <p className='heading-1'>Access denied</p>
        </section>
      </main>
    </div>
  )
}

export default AccessDenied;
