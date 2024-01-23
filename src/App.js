/* eslint-disable */

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./products";
import Layout from "./components/layout/Layout";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Cart from "./routes/Cart/Cart";

function App() {
  const [products, setproducts] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/detail/:id" element={<Detail products={products} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>없는 페이지입니다.</div>} />`
        </Route>
      </Routes>
    </div>
  );
}

export default App;