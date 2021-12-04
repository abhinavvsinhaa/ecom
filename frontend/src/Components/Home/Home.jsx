import React from "react";
import "./Style/home.css";
import Carosel from "./Carosel";
import Hover from "../Cards/HoverCard/Hover";
import Special from "../Cards/SpecialCard/Special";
import api from "./../../Util/api";
import Navbar from "../Navbar/Navbar";
import i1 from "./images/cat1.jpg";
import i2 from "./images/cat2.jpg";
import i3 from "./images/cat3.jpg";
import i4 from "./images/cat4.jpg";
import i5 from "./images/cat5.jpg";
import Footer from "../Footer/Footer";
import LoadingBar from "react-top-loading-bar";

const options = { withCredentials: true };

const Home = () => {
  const [topRated, setTopRated] = React.useState([]);
  const [dealsOfTheDay, setDealsOfTheDay] = React.useState([]);
  const [loadingAllData, dataLoaded] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    async function fetchMyAPI() {
      try {
        let res = await api.get("/products/filter?rating=4&limit=4", options);
        let res_2 = await api.get(
          "/products/filter?rating=4&limit=4&page=2",
          options
        );
        setTopRated(res.data);
        setDealsOfTheDay(res_2.data);
        setProgress(100);
        dataLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <LoadingBar
        color="green"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <Navbar />

      <div className="extra-space"></div>
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
