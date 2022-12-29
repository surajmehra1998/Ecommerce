import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const data = [
  { id: 1, icon: <BsFacebook />, path: "" },
  { id: 2, icon: <BsTwitter />, path: "" },
  { id: 3, icon: <BsLinkedin />, path: "" },
  { id: 4, icon: <AiFillInstagram />, path: "" },
];

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col sm={8} xs={12}>
            <div className="flex-center justify-content-evenly">
              <h6 className="mb-0">Be in Touch With Us</h6>
              <div className="d-flex">
                <input type="email" name="" id="" className="form-control" placeholder="Enter email here" />
                <button className="btn btn-success">Join Us</button>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <ul className="flex-center icons">
              {data.map((item) => (
                <li key={item.id}>
                  <Link>{item.icon}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
