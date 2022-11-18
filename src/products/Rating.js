import React from "react";

const Rating = ({ value }) => {
  return (
    <>
      {value === 1.1 || value === 1.2 || value === 1.3 || value === 1.4 ? (
        <>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star "></i>
        </>
      ) : value === 1.5 ||
        value === 1.6 ||
        value === 1.7 ||
        value === 1.8 ||
        value === 1.9 ||
        value === 2 ||
        value === 2.1 ||
        value === 2.2 ||
        value === 2.3 ||
        value === 2.4 ? (
        <>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star "></i>
        </>
      ) : value === 2.5 ||
        value === 2.6 ||
        value === 2.7 ||
        value === 2.8 ||
        value === 2.9 ||
        value === 3 ||
        value === 3.1 ||
        value === 3.2 ||
        value === 3.3 ||
        value === 3.4 ? (
        <>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked "></i>
          <i className="fa fa-star "></i>
          <i className="fa fa-star  "></i>
        </>
      ) : value === 3.5 ||
        value === 3.6 ||
        value === 3.7 ||
        value === 3.8 ||
        value === 3.9 ||
        value === 4 ||
        value === 4.1 ||
        value === 4.2 ||
        value === 4.3 ||
        value === 4.4 ? (
        <>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked "></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star  "></i>
        </>
      ) : value === 4.5 ||
        value === 4.6 ||
        value === 4.7 ||
        value === 4.8 ||
        value === 4.9 ||
        value === 5 ? (
        <>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked"></i>
          <i className="fa fa-star checked "></i>
        </>
      ) : (
        <i className="fa fa-star checked "></i>
      )}
    </>
  );
};
export default Rating;
