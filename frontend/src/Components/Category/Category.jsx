import React from "react";
import Navbar from "../Navbar/Navbar";
import Hover from "../Cards/HoverCard/Hover";
import api from "./../../Util/api";
import "./category.css";
const options = { withCredentials: true };
const Price = () => {
  return (
    <form className="price-range">
      <div className="filter-div">
        <p className="filter-label">Price range</p>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">₹0-₹2000</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">₹2000-₹5000</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">₹5000-₹10000</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">₹10000-MAX</label>
        </div>
      </div>
      <div className="filter-div">
        <p className="filter-label">Sort By</p>
        <div>
          <select name="sort-by" id="cars">
            <option value="">Price: Low to High</option>
            <option value="">Price: High to Low</option>
            <option value="">Popular</option>
            <option value="">New First</option>
          </select>
        </div>
      </div>
      <div className="filter-div">
        <input type="checkbox" id=""></input>
        <label for="">Exclude Out Of Stock</label>
      </div>
      <div className="filter-div">
        <p className="filter-label">Rating</p>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">Above 4</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">Above 3</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">Above 2</label>
        </div>
        <div>
          <input type="radio" id="html" name="fav_language" value="HTML" /> 
          <label for="html">Above 1</label>
        </div>
      </div>
      <div className="filter-div">
        <p className="filter-label">Select Brands</p>
        <input type="checkbox" id=""></input>
        <label for="">Nike</label>
        <br />
        <input type="checkbox" id=""></input>
        <label for="">Adidas</label>
        <br />
        <input type="checkbox" id=""></input>
        <label for="">Rebok</label>
      </div>
      <input type="submit" className="submit-filter" value="Commit Change" />
    </form>
  );
};

const Category = () => {
  const [product, setProduct] = React.useState([]);
  const [loadingAllData, dataLoaded] = React.useState(false);
  React.useEffect(() => {
    async function fetchMyAPI() {
      try {
        let res = await api.get(
          "/products/filter?rating=0&limit=20&page=0",
          options
        );
        setProduct(res.data);
        console.log(res.data);
        dataLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);
  return (
    <div>
      <Navbar />
      <div class="sidenav">
        <Price />
      </div>
      <div class="category-main">
        {!loadingAllData && <h1>Loading Data</h1>}
        {loadingAllData &&
          product.map((item) => {
            return <Hover detail={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Category;