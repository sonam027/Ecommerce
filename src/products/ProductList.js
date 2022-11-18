import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductPage from "./ProductPage";
import ProductPagination from "./ProductPagination";

const ProductListing = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * dataPerPage;
  const indexOfFirstProduct = indexOfLastProduct - dataPerPage;
  const currentPost = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="row">
            <ProductPage item={currentPost} />
            <ProductPagination
              postPerPage={dataPerPage}
              totalPost={data.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
