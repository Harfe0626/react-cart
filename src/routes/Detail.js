/* eslint-disable */

import { useParams, useNavigate } from "react-router-dom";
import products from "../products";
import { addItem, plusCount } from "../store";
import { useDispatch, useSelector } from "react-redux";
import styles from '../components/Products.module.scss'

function Detail() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.filter((product) => product.id === Number(id));
  if (product.length === 0) {
    return (
      <div>
        <h3>해당 상품은 존재하지 않습니다.</h3>
      </div>
    );
  } else {
    return (
      <div className="page">
      <div className={styles.row}>
        <span className="col-md-6">
          <img src={product[0].src} width="30%" />
        </span>
        <span className="col-md-6">
            <h4 className="pt-5">{product[0].title}</h4>
            <p className={styles.content}>{product[0].content}</p>
            <span className={styles.rateCost}>{product[0].ratePrice}원</span>
            <span className={styles.sellCost}>{product[0].sellPrice}원</span>
            <span className={styles.rate}>{product[0].rate}원</span>
            <br/>
            <button className="btn btn-danger"
              onClick={() => {
                const index = state.cart.findIndex(
                  (pd) => pd.id === product[0].id);
                  if (index < 0) {
                    dispatch(addItem(product[0]));
                  } else {
                    dispatch(plusCount(product[0].id));
                  }
                navigate(`/cart`);
              }
            }
            >
            장바구니
            </button>
        </span>
      </div>
      </div>
    );
  }
}

export default Detail;