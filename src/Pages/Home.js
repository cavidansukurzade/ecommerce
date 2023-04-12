import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css";
import "../Scss/style.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Products from "../Components/Products";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCategory } from "../features/categorySlice";
const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleChangeFilter = (category) => {
    dispatch(changeCategory(category));
    navigate("/productspage");
    window.scrollTo(0, 0);
  };
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Advantages = () => {
    return (
      <section id="advantages" className="container">
        <div>
          <img src={require("../Images/box.png")} alt="" />
          <span>Delivery</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div>
          <img src={require("../Images/credit.png")} alt="" />
          <span>Credit</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div>
          <img src={require("../Images/achievement.png")} alt="" />
          <span>Guarantee</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
      </section>
    );
  };
  const Carousel = () => {
    return (
      <section id="carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container">
              <div>
                <h1>Buy & Sell</h1>
                <h1>What's Now & Next</h1>
                <p>
                Products given in the carousel are not in sale
                  currently,they are just for advertising
                </p>
              </div>
              <img src={require("../Images/cloth1.png")} alt="logo not found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div>
                <h1>Buy & Sell</h1>
                <h1>What's Now & Next</h1>
                <p>
                Products given in the carousel are not in sale
                  currently,they are just for advertising
                </p>
              </div>
              <img src={require("../Images/cloth2.png")} alt="logo not found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div>
                <h1>Buy & Sell</h1>
                <h1>What's Now & Next</h1>
                <p>
                  Products given in the carousel are not in sale
                  currently,they are just for advertising
                </p>
              </div>
              <img src={require("../Images/cloth3.png")} alt="logo not found" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
  };
  const Counts = () => {
    return (
      <section id="count" className="container">
        <div className="count_first">
          <div>
            <h3>Men's clothes</h3>
            <span>
              Product count:
              {data.filter((x) => x.category === "men's clothing").length}
            </span>
            <a href="##" onClick={() => handleChangeFilter("men's clothing")}>
            Go to products {">"}{" "}
            </a>
          </div>
        </div>
        <div className="count_second">
          <div>
            <h3>Women's clothes</h3>
            <span>
            Product count:
              {data.filter((x) => x.category === "women's clothing").length}
            </span>
            <a href="##" onClick={() => handleChangeFilter("women's clothing")}>
            Go to products {">"}{" "}
            </a>
          </div>
          <div>
            <h3>Electronics</h3>
            <span>
            Product count:
              {data.filter((x) => x.category === "electronics").length}
            </span>
            <a href="##" onClick={() => handleChangeFilter("electronics")}>
              Go to products {">"}{" "}
            </a>
          </div>
        </div>
      </section>
    );
  };
  const Brands = () => {
    return (
      <section id="brands">
        <div className="container">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/electrolux.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/bosch.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/hp.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/philips.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/gorenje.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/electrolux.png")} alt="logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperslide">
                <img src={require("../Images/bosch.png")} alt="logo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  };
  const Loader = () => {
    return (
      <>
        <div className="loadermain container">
          <div className="loader">
            <Skeleton height={330} />
          </div>
          <div className="loader">
            <Skeleton height={330} />
          </div>
          <div className="loader">
            <Skeleton height={330} />
          </div>
          <div className="loader">
            <Skeleton height={330} />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Carousel />
      <div className="homeproductheader container">
        <div>Men's clothes</div>
        <div onClick={() => handleChangeFilter("men's clothing")}>
          See all
        </div>
      </div>
      {loading ? <Loader /> : <Products product={filter.slice(0, 4)} />}
      <div className="homeproductheader container">
        <div>Jewelery</div>
        <div onClick={() => handleChangeFilter("jewelery")}>See all</div>
      </div>
      {loading ? <Loader /> : <Products product={filter.slice(4, 8)} />}
      <div className="homeproductheader container">
        <div>Techniques</div>
        <div onClick={() => handleChangeFilter("electronics")}>
        See all
        </div>
      </div>
      {loading ? <Loader /> : <Products product={filter.slice(8, 12)} />}
      <Counts />
      <Advantages />
      <Brands brands={filter} />
    </>
  );
};

export default Home;
