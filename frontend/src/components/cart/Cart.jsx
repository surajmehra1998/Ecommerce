import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import style from "./cart.module.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const imgUrl = process.env.REACT_APP_UPLOAD_URL;
  return (
    <div className="d-flex justify-content-end position-relative">
      <div className={`${style.cart_card} card p-3 position-absolute`}>
        {products?.map((data) => (
          <div key={data.id} className="mb-3">
            <div className="d-flex justify-content-between align-items-end">
              <div className="d-flex">
                <img src={imgUrl + data.img} alt="" />
                <div>
                  <h6>{data.title}</h6>
                  <p>{data.desc?.substring(0, 100)} </p>
                  <p>
                    Price : {data.quantity}* ${data.price}
                  </p>
                </div>
              </div>
              <button className="btn btn-danger" onClick={() => dispatch(removeItem(data.id))}>
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
        {products.length > 0 ? (
          <>
            <div className="flex-center justify-content-between mt-3">
              <p>Subtotal</p>
              <p>${totalPrice()}</p>
            </div>
            <button className="btn btn-success mt-3">Procced to checkout</button>
          </>
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
