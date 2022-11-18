import React from "react";
import "./productDetails.css";
import { Link } from "react-router-dom";
const ProductComponent = ({ item }) => {
  const renderList = item.map((item) => {
    return (
      <div
        className="col-md-5 card product-card"
        style={{
          marginLeft: "20px",
          marginBottom: "20px",
          border: "2px solid #84b0f2",
          borderRadius: "15px",
        }}
        key={item?.id}
      >
        <div className="product-content product-wrap clearfix">
          <div className="row">
            <div className="col-md-5">
              <div className="product-image">
                <Link to={`/product/${item?.id}`}>
                  <img
                    width="100px"
                    src={item?.image}
                    alt={item?.title}
                    className="img-responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="content">
                <span
                  class="btn "
                  style={{
                    backgroundColor: "#84b0f2",
                    color: "#fff",
                    margin: "10px",
                  }}
                >
                  {item?.category}
                </span>
                <div className="header">
                  <Link to={`/product/${item?.id}`}>{item?.title}</Link>
                </div>
                <div className="describe">{item?.description}</div>
                <div className="price">
                  <span
                    style={{
                      color: "#3498DB",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {item?.price}
                  </span>
                  <span style={{ textDecorationLine: "line-through" }}>
                    ${(item.price + (item.price * 10) / 100).toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
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

export default ProductComponent;
