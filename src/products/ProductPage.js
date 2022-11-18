import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./productDetails.css";
import "./ProductListing.css";

const ProductPage = ({ item }) => {
  const renderList = item.map((item) => {
    return (
      <div
        className="col-md-5 card product-card"
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          paddingTop: "20px",
          marginTop: "20px",
          paddingBottom: "20px",
          border: "2px solid #84b0f2",
          borderRadius: "15px",
        }}
        key={item.id}
      >
        <div className="product-content product-wrap clearfix">
          <div className="row">
            <div className="col-md-5">
              <div className="product-image">
                <Link to={`/product/${item.id}`}>
                  <img width="150px" src={item.image} alt={item.title} />
                </Link>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="content">
                <button
                  className="btn btn-primary button1"
                  style={{
                    borderRadius: "30px",
                    width: "150px",
                    backgroundColor: "#84b0f2",
                    marginBottom: "15px",
                  }}
                >
                  {item.category}
                </button>
                <div className="header">
                  <Link to={`/product/${item.id}`}>{item.title}</Link>
                </div>
                <div className="describe">{item.description} </div>
                <div className="actualPrice">
                  <span
                    style={{
                      color: "#3498DB",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    ${item.price}
                  </span>
                  <span
                    className="crossPrice"
                    style={{ textDecorationLine: "line-through" }}
                  >
                    {(item.price + (item.price * 10) / 100).toFixed(2)}
                  </span>
                </div>
                <div classname="rating" style={{ marginBottom: "8px" }}>
                  <Rating value={item.rating.rate} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductPage;
