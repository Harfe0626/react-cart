/* eslint-disable */

import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import styles from './Nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
        <ul><li><div className={styles.counter}>
            <Link to={"/cart"}>
                {" "}
                <FiShoppingCart />
            </Link>
        </div>
        </li>
        </ul>
    </nav>
  );
}

export default Nav;