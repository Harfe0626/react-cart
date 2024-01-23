/* eslint-disable */

import Products from "../components/Products";

function Home(props) {
  return (
    <div className="page">
      <div className="container">
        <h2>Products</h2>
        <Products products={props.products} />
      </div>
    </div>
  );
}

export default Home;