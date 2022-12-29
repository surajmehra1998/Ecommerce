import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFlagUsa, FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import style from "./navbar.module.scss";
import { Container } from "react-bootstrap";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <>
      <header className="bg-light">
        <Container>
          <div className="p-3 flex-center justify-content-between">
            <div className="flex-center links">
              <FaFlagUsa />
              <ul className="flex-center links">
                <li>
                  <Link>Women</Link>
                </li>
                <li>
                  <Link>Men</Link>
                </li>
                <li>
                  <Link>Children</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to={"/"}> Ecommerce Store</Link>
              </h2>
            </div>
            <div className="flex-center">
              <ul className="flex-center links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>Stores</Link>
                </li>
              </ul>
              <ul className={`${style.icons_list} flex-center links`}>
                <li></li>
                <li>
                  <FiSearch />
                </li>
                <li>
                  <IoPerson />
                </li>
                <li>
                  <div className={`${style.cart_count} position-relative`} onClick={() => setOpen(!open)}>
                    <FaShoppingCart />
                    <span className="position-absolute flex-center justify-content-center">{products.length} </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
      {open && <Cart />}
    </>
  );
};

export default Navbar;
