/* eslint-disable */

import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Nav from './nav/Nav'

function Header() {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <Link to={"/"}>
              <img src='https://i.namu.wiki/i/Nuc7dzaqOfGBhaeYLHTYHhCZln9rXsZ__ZfjmJRfy9kShTcqfeTlvW2N_1TvjI4XOGJH3BA6LaQU84g63koH7Q.svg'/>
            </Link>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;