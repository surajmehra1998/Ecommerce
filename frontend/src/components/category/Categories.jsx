import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container category my-4">
      <div className="row">
        <div className="col-sm-3">
          <div className="row">
            <div className="col-sm-12">
              <div className="horz-img position-relative flex-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029__340.jpg" alt="" />
                <Link className="btn btn-product position-absolute" to={`/products/1`}>
                  Link
                </Link>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="horz-img position-relative flex-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480__340.jpg" alt="" />
                <Link className="btn btn-product position-absolute" to={`/products/1`}>
                  Link
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="vertical-img position-relative flex-center justify-content-center">
            <img src="https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_960_720.jpg" alt="" />
            <Link className="btn btn-product position-absolute" to={`/products/1`}>
              Link
            </Link>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="horz-img position-relative flex-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg" alt="" />
                <Link className="btn btn-product position-absolute" to={`/products/1`}>
                  Link
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="horz-img position-relative flex-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804__340.jpg" alt="" />
                <Link className="btn btn-product position-absolute" to={`/products/1`}>
                  Link
                </Link>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="horz-img position-relative flex-center justify-content-center">
                <img src="https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913__340.jpg" alt="" />
                <Link className="btn btn-product position-absolute" to={`/products/1`}>
                  Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
