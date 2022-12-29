import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";
const Card = ({ item }) => {
  // console.log(item);
  const imgURL = process.env.REACT_APP_UPLOAD_URL;
  // console.log(imgURL);
  // const { description, img, title, oldPrice, price } = props.item.attributes;
  // console.log(props.item);
  return (
    <div className="col-sm-3">
      <Link to={`/product/${item.id}`}>
        <div className={`${style.card_items} card p-3`}>
          <img src={imgURL + item?.attributes.img.data.attributes.url} alt="" />
          <h2>{item?.attributes.title} </h2>
          <div className="flex-center justify-content-between">
            <p className={style.old}>${item?.attributes.oldPrice || item.attributes.price + 30}</p>
            <p>${item?.attributes.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Card);
