import React from "react";
import "../Scss/style.scss";
import { useNavigate, } from "react-router-dom";
const Products = ({product}) => {
  let navigate = useNavigate();
  return (
    <section id="productsection" className="container">

      <div className="products">
        {product.map((e) => (
          <div className="product-card" key={e.id}
          onClick={() => {
            navigate(`/productspage/${e.id}`);
          }}
          >
            <div className="product-img">
              <img src={e.image} alt="not found" />
            </div>
            <div className="product-title">
              <h3>{e.title}</h3>
            </div>
            <div className="product-price">
              <span>{e.price} $</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
