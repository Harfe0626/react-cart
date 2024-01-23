/* eslint-disable */

import { useDispatch, useSelector } from "react-redux";
import { plusCount, minusCount } from "../../store";
import styles from './CartList.module.scss'

function CartList() {
  let state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
{state.cart.map((item, index) => {
  return (
    <tbody>
      <tr key={index}>
        <td className={styles.td1}>
          <div className={styles.thum}>
            <img className={styles.img}
              src={item.src} 
              width="100%"
              alt
            />
          </div>
          <div className={styles.cont}>
            <strong className={styles.tit}>{item.name}</strong>
          </div>
        </td>
        <td className={styles.td}>
          <span className={styles.rateCost} title="할인가">
            {item.ratePrice.toLocaleString('ko-KR')}원
          </span>
          <br />
          <del className={styles.sellCost} title="판매가">
            {item.sellPrice.toLocaleString('ko-KR')}원
          </del>
        </td>
        <td className={styles.td}>
          <span className="frmAmout">
            <button type="button" className={styles.button} onClick={() => { dispatch(minusCount(item.id)); }}>
              -
            </button>
              {item.count}
            <button type="button" className={styles.button} onClick={() => { dispatch(plusCount(item.id)); }}>
              +
            </button>
          </span>
        </td>
        <td className={styles.td}>
          <span className={styles.rateCost} name='total'>{(item.ratePrice * item.count).toLocaleString('ko-KR')}원</span>
        </td>
      </tr>
      </tbody>
    );
  })}
    </>
  );
}

export default CartList;