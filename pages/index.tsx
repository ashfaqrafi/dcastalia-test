import React, { FC } from "react";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductList from "../components/ProductList";

const index: FC = () => (
  <>
    <Head>
      <title>DCastalia Test</title>
    </Head>
    <div className="container mt-3 mb-3">
      <div className="relative">
        <img
          src="/static/images/cover.png"
          alt="hero-cover-image"
          className="cover-image"
        />
        <div className="cover-image__text">
          <div className="cover-image__text-wrapper">
            <div>
              upto
              <br />
              <p className="big-text">30% Discount</p>
              on Smartphones
            </div>
            <div>
              <Button variant="warning">Shop Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card p-3">
      <div className="container">
        <div className="product-section__text">
          <div>
            <div className="product-section__header">Smartphones</div>
            <div className="product-section__sub-header">Shop now!</div>
          </div>
          <div>
            <button type="button" className="btn btn-outline-info">
              View All
            </button>
          </div>
        </div>
        <div className="mt-4">
          <Row>
            <Col lg={4}>
              <img
                src="/static/images/iphone.png"
                alt="iphone"
                className="cover-image"
              />
            </Col>
            <Col lg={8}>
              <ProductList />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </>
);

export default index;
