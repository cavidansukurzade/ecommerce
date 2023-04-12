import React, { useState, useEffect ,useRef } from "react";
import "../Scss/style.scss";
import Products from "../Components/Products";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import { useSelector,useDispatch } from "react-redux";
import { changeCategory } from "../features/categorySlice";
const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()
  const category = useSelector((state) => state.category.category);
  console.log(category);
  let componentMounted = useRef(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted.current = false;
      };
    };
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[category]);
  const Aside = () => {
    const filterProduct = (cat) => {
      const updatedList = data.filter((x) => x.category === cat);
      dispatch(changeCategory(cat))
      setFilter(updatedList);
    };
    return (
      <div className="aside">
        <div>
          <span>Filter(4)</span>
          <span>-</span>
        </div>
        <div>
          <div>
            <button onClick={() => filterProduct("electronics")}>Electronics</button>
          </div>
          <div>
            <button onClick={() => filterProduct("men's clothing")}>Men's clothes</button>
          </div>

          <div>
            <button onClick={() => filterProduct("women's clothing")}>Women's clothes</button>
          </div>
          <div>
            <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          </div>
        </div>
      </div>
    );
  };
  const Loader = () => {
    return (
      <>
      <div className="loadermain2 container">
      <div className="loader2">
        <Skeleton height={330} />
      </div>
      <div className="loader2">
        <Skeleton height={330} />
      </div>
      <div className="loader2">
        <Skeleton height={330} />
      </div>
    </div>
    </>
    )
  }
  return (
    <>
      <section id="productspage" className="container">
        <Aside />
        <div className="main">
          <div>

          </div>
          {loading ? <Loader /> : <Products product={filter} />}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
