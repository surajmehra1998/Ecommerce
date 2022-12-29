import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import style from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col xs={12} sm={2}>
            <h6>Categories</h6>
            <ul className="links">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={2}>
            <h6>Categories</h6>
            <ul className="links">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={4}>
            <h6>About</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde voluptate architecto nobis, sapiente iure dolore molestiae numquam excepturi reiciendis quis veritatis voluptates obcaecati accusantium facilis repellat, cumque ratione distinctio!</p>
          </Col>
          <Col xs={12} sm={4}>
            <h6>Contact</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde voluptate architecto nobis, sapiente iure dolore molestiae numquam excepturi reiciendis quis veritatis voluptates obcaecati accusantium facilis repellat, cumque ratione distinctio!</p>
          </Col>
          <Col xs={12} sm={12}>
            <p className="text-center">&#169; copyright 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
