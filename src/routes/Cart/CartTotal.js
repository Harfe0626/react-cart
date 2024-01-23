/* eslint-disable */

import { useSelector } from "react-redux";
import styles from './CartTotal.module.css'

function CartTotal() {
  let state = useSelector((state) => state);

  const priceSum = () => {
    let sum = 0;
    for (let i = 0; i < state.cart.length; i++) {
      sum += state.cart[i].count * state.cart[i].ratePrice;
    }
    return sum;
  };

  return (
    <>
<tfoot>
  <tr>
    <td colSpan="8" className={styles.tdTotal}>
      <span className={styles.txt}>총 금액</span>
      <span className={styles.totalCost}><b>{priceSum().toLocaleString('ko-KR')}</b>원</span>
      <span className={styles.symbol}>+</span>
      <span className={styles.txt}>배송비</span>
      <span className={styles.totalCost}><b>3,000</b>원</span>
      <span className={styles.txt2}>(3만원이상 구매 시 무료배송)</span>
      <span className={styles.symbol}>=</span>
      <span className={styles.txt}>결제 금액</span>
      <span className={styles.totalCost}><b>{(priceSum() + 3000).toLocaleString('ko-KR')}</b>원</span>
    </td>
  </tr>
</tfoot>
    </>
  );
}

export default CartTotal;