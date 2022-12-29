import React from "react";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";

const FeatureProduct = ({ type }) => {
  // const [data, setData] = useState([]);
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eqi]=${type}`);
  // console.log(data);
  return (
    <div className="container my-4">
      <h3 className="text-center fw-bold">{type} products</h3>
      <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quisquam odit cum ab ipsam? Repudiandae enim recusandae, dolores est totam ab saepe quod natus repellendus dolore quam distinctio, eum suscipit?</p>
      <div className="row">
        {error ? (
          <h2 className="text-center">Something Went Wrong....</h2>
        ) : loading ? (
          <h2 className="text-center">Loading....</h2>
        ) : (
          data?.map((item) => {
            return <Card item={item} key={item.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default FeatureProduct;
