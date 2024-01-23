/* eslint-disable */

import CartList from "./CartList";
import CartTotal from "./CartTotal";
import styles from './Cart.module.scss'

function Cart() {
  return (
    <div className="page">
    <div className="container">
    <div className={styles.cartBoard}>
      <h3 className={styles.titDep}>장바구니</h3>
      <table className={styles.tblForm}>
        <colgroup>
          <col styles="width:10%" />
          <col styles="width:auto" />
          <col styles="width:11%" />
          <col styles="width:10%" />
          <col styles="width:11%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className={styles.th}>상품명</th>
            <th scope="col" className={styles.th}>구매가</th>
            <th scope="col" className={styles.th}>수량</th>
            <th scope="col" className={styles.th}>금액</th>
          </tr>
        </thead>
      <CartList />
      <CartTotal />
      </table>
    </div>
    </div>
    </div>
  );
}

export default Cart;