/* eslint-disable */

import { BsGithub } from 'react-icons/bs';
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.contacts}>
          <a href="https://github.com">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;