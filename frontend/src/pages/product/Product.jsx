import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import style from "./product.module.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
// import useFetch from "../../hooks/useFetch";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const id = useParams().id;
  const imgUrl = process.env.REACT_APP_UPLOAD_URL;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(data);
  // const imgs = ["https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600"];
  // console.log(selectedImg);

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  // console.log(product);
  useEffect(() => {
    console.log(products);
    localStorage.setItem("cartData", JSON.stringify(products));
  }, [products]);
  return (
    <section className="section">
      <Container>
        <Row>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <Col sm={6} xs={12}>
                <div className="d-flex">
                  <div className={style.img}>
                    <div>
                      <img src={imgUrl + data?.attributes?.img?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img")} />
                    </div>
                    <div>
                      <img src={imgUrl + data?.attributes?.img2?.data.attributes.url} alt="" onClick={(e) => setSelectedImg("img2")} />
                    </div>
                  </div>
                  <div className={`${style.main_img} mx-2 w-100`}>
                    <img src={imgUrl + data?.attributes?.[selectedImg]?.data.attributes.url} alt="" />
                  </div>
                </div>
              </Col>
              <Col sm={6} xs={12}>
                <h2 className="fw-bold">{data?.attributes.title}</h2>
                <p>${data?.attributes.price}</p>
                <p>{data?.attributes.description}</p>
                <div className="my-3 flex-center">
                  <button className="btn bg-light" onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                    <FaMinus />
                  </button>
                  <span className="mx-4">{quantity} </span>
                  <button className="btn bg-light" onClick={() => setQuantity((prev) => prev + 1)}>
                    <FaPlus />
                  </button>
                </div>
                <button
                  className="btn btn-primary cart-btn"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.description,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity,
                      })
                    )
                  }
                >
                  Add to Cart
                </button>
                <div className="flex-center compare-btn my-3">
                  <button className="btn bg-light flex-center">
                    <AiOutlineHeart /> Add to Wish List
                  </button>
                  <button className="btn bg-light flex-center">
                    <TbGitCompare /> Add to Compare
                  </button>
                </div>
                <div className="info mb-3">
                  <p>Vendor : Polo</p>
                  <p>Product Type : Shirt</p>
                  <p>Tag : T-Shirt, Women , Top</p>
                </div>
                <div className="details info">
                  <p>Description:</p>
                  <p>Additional Information:</p>
                  <p>Faq</p>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
