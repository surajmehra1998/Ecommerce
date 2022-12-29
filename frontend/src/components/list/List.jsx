import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";

const List = ({ sort, catID, price, subCats }) => {
  console.log(sort, catID, price, subCats);

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catID}${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${price}&sort=price:${sort}`);
  console.log(data);
  return <div className="row">{loading ? <h2 className="text-center">Loading....</h2> : data?.map((item) => <Card key={item.id} item={item} />)}</div>;
};

export default List;
