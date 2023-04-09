import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Scss/style.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
const ProductInfo = () => {
  const navigate=useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const Loader = () => {
    return (
      <>
        <div className="loadermain container">
          <div className="loader3">
            <Skeleton height={330} />
          </div>
          <div className="loader4">
            <Skeleton height={330} />
          </div>
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };
    return (
      <>
        <div id="productinfo" className="container">
          <div>
            <img src={product.image} alt="" />
          </div>
          <div>
            <h4>{product.category}</h4>
            <h1>{product.title}</h1>
            <h5>
              Rating {product.rating && product.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </h5>
            <h3>{product.price}$</h3>
            <p>{product.description}</p>
            <div>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button onClick={()=>{navigate("/cart");window.scrollTo(0,100)}}>Go to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{loading ? <Loader /> : <ShowProduct />}</>;
};

export default ProductInfo;
