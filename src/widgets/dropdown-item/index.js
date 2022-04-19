// DROPDOWN

// internal state
import { useState, useEffect, createRef } from 'react';

// css
import styles from './index.module.css';

// images
import openIcon from '../../assets/images/icons/down.png';  
import closeIcon from '../../assets/images/icons/close.png';

const Dropdown = (props) => {
    const { title, content, titleClassName, contentClassName } = props;

    const [open, setOpen] = useState(false);

    const dropdownBtn = createRef();
    const openIconRef = createRef();

    const handleClick = (event) => {
      if (event.target === dropdownBtn.current || event.target === openIconRef.current) {
        if (open) {
          setOpen(false);
        } else {
          setOpen(true);
        }
      } else {
        setOpen(false);
      }
    }

    useEffect(() => {
      let mounted = true;

      window.addEventListener('click', (e) => {
        mounted && handleClick(e);
      });

      return () => {mounted = false};
    });
    

    return (
        <div className={`${styles.dropdown} `}>
          <div className={`${styles.dropdown} ${titleClassName} flex flex-row gap-2 justify-between`}>
            <span>{title}</span>
            <span ref={dropdownBtn} className='flex flex-row justify-end basis-1/6'>
              <span className='grid content-center'>
                {!open ? <img ref={openIconRef} src={openIcon} alt='icon' /> : <img src={closeIcon} alt='icon' />}
              </span>
            </span>
          </div>

          {
            open && <div className={`${contentClassName}`}>
              <p>{content}</p>
            </div>
          }
        </div>
    )
}

export default Dropdown;
