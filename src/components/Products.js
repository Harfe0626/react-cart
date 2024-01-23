/* eslint-disable */

import { useNavigate } from "react-router-dom";
import styles from "./Products.module.scss"

function Products(props) {
  const navigate = useNavigate(); //해당 주소로 이동하게 하는 함수를 리턴하는 함수

    return (
      <div className="container">
        <div className="row">
          {props.products.map((item, index) => {
            return (
              <div className="col-md-3" key={index} >
                <h2>0{item.id}</h2>
                <img 
                  src={item.src} 
                  width="80%"
                  onClick={() => { navigate(`/detail/${item.id}`); }} 
                />
                <strong className={styles.title}>
                  {item.title}
                </strong>
                <p className={styles.content}>
                  {item.content}
                </p>
                <span className={styles.rateCost}>
                  <b>{item.ratePrice.toLocaleString('ko-KR')}원</b>
                </span>
                <span className={styles.sellCost}>
                  <b>{item.sellPrice.toLocaleString('ko-KR')}원</b>
                </span>
                <span className={styles.rate}>
                  <b>{item.rate}%</b>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Products;