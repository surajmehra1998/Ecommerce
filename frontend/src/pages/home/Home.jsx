import React from "react";
import Categories from "../../components/category/Categories";
import Contact from "../../components/contact/Contact";
import FeatureProduct from "../../components/feature-product/FeatureProduct";
import Slider from "../../components/slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureProduct type="Featured" />
      <Categories />
      <FeatureProduct type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
