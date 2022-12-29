import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import List from "../../components/list/List";
import useFetch from "../../hooks/useFetch";
import style from "./products.module.scss";
const Products = () => {
  const [maxprice, setMaxPrice] = useState(1000);
  const categoryID = parseInt(useParams().id);
  const [sort, setSort] = useState("asc");
  const [selectSubCategory, setSelectSubCategory] = useState([]);
  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryID}`);
  console.log(data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    // console.log(value, isChecked);
    setSelectSubCategory(isChecked ? [...selectSubCategory, value] : selectSubCategory.filter((item) => item !== value));
  };
  // console.log(selectSubCategory);
  return (
    <section className="my-4">
      <Container>
        <Row>
          <Col sm={3} xs={12}>
            <div className={style.filter_container}>
              <div className={style.categories}>
                <h5 className="fw-bold">Product Categories</h5>
                {data?.map((item) => (
                  <div className="mb-2 flex-center" key={item.id}>
                    <label>
                      <input type="checkbox" name="" id={item.id} value={item.id} onChange={handleChange} />
                      {item.attributes.title}
                    </label>
                  </div>
                ))}
              </div>
              <div className={style.categories}>
                <h5 className="fw-bold">Filter Product by Price</h5>
                <div className="mb-2 flex-center">
                  <span>0</span>
                  <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                  <span>{maxprice}</span>
                </div>
              </div>
              <div className={style.categories}>
                <h5 className="fw-bold">Sort Bt</h5>
                <div className="mb-2 flex-center">
                  <label>
                    <input type="radio" name="radio" value="asc" onChange={(e) => setSort("asc")}  />
                    Price(Lowest first)
                  </label>
                </div>
                <div className="mb-2 flex-center">
                  <label>
                    <input type="radio" name="radio" value="desc" onChange={(e) => setSort("desc")} />
                    Price(Highest first)
                  </label>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={9} xs={12}>
            <div className={style.feature_banner}>
              <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <List sort={sort} catID={categoryID} price={maxprice} subCats={selectSubCategory} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
