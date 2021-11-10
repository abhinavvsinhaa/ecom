import React from "react";
import "./Style/home.css";
import Carosel from "./Carosel";
import Hover from "../Cards/HoverCard/Hover";
import Special from "../Cards/SpecialCard/Special";
import api from "./../../Util/api";

import i1 from "./images/cat1.jpg";
import i2 from "./images/cat2.jpg";
import i3 from "./images/cat3.jpg";
import i4 from "./images/cat4.jpg";
import i5 from "./images/cat5.jpg";
import Footer from "../Footer/Footer";

const options = { withCredentials: true };

const Home = () => {
  const [topRated, setTopRated] = React.useState([]);
  const [dealsOfTheDay, setDealsOfTheDay] = React.useState([]);
  const [loadingAllData, dataLoaded] = React.useState(false);
  React.useEffect(() => {
    async function fetchMyAPI() {
      try {
        let res = await api.get("/products/filter?rating=4&limit=4", options);
        let res_2 = await api.get(
          "/products/filter?rating=4&limit=10",
          options
        );
        setTopRated(res.data);
        console.log(res_2.data);
        setDealsOfTheDay(res_2.data);
        dataLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <Carosel />
      <div className="catalog-container">
        <p className="catalog-title">Select From Category</p>
        <div className="product-container-top">
          <img src={i1} alt="" />
          <img src={i2} alt="" />
          <img src={i4} alt="" />
          <img src={i3} alt="" />
          <img src={i5} className="hidden" alt="" />
        </div>
      </div>
      <div className="catalog-container">
        <p className="catalog-title">Top Rated Products</p>
        <div className="product-container">
          {loadingAllData ? (
            topRated.map((item) => {
              return <Hover detail={item} key={item.id} />;
            })
          ) : (
            <h1>Loading Data</h1>
          )}
        </div>
      </div>
      <Special />
      <div className="catalog-container">
        <p className="catalog-title">Deal Of The Day</p>
        <div className="product-container">
          {loadingAllData ? (
            dealsOfTheDay.map((item) => {
              return <Hover detail={item} key={item.id} />;
            })
          ) : (
            <h1>Loading Data</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
