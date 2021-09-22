import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-grid-carousel";
import { products } from "../module/products";

export default function ProductList() {
  return (
    <div>
      <div>
        <Carousel
          cols={3}
          rows={2}
          gap={10}
          loop
          hideArrow={true}
          showDots={true}
        >
          {products.map((item, i) => (
            <Carousel.Item key={i}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <div className="card-title">{item.name}</div>
                  <Card.Text>
                    <span className="product-card__price">
                      ৳ {item.discounted_price}
                    </span>{" "}
                    <span className="product-card__old-price">
                      ৳ {item.price}
                    </span>{" "}
                    <span>
                      <img src={item.logo} alt="logo" />
                    </span>
                  </Card.Text>
                </Card.Body>
                <div className="product-card__tag">{item.discount}</div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
