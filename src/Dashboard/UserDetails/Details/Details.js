import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import "./Details.css";

function Details(props) {
  const [firstname, setFirstName] = useState([]);
  const [lastname, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [image, setImage] = useState([]);

  const { id } = useParams();

  const fetchData = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFirstName(data.data.first_name);
        setLastName(data.data.last_name);
        setEmail(data.data.email);
        setImage(data.data.avatar);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container col col-sm col-md col-lg py-4">
        <h5 className="mx-auto col col-sm col-md col-lg">User Details</h5>

        <hr />
        <div className="row g-3">
          <div className="ms-4 py-4 col-4 col-sm-4 col-md-4 col-lg-auto">
            <img src={image} className="rounded-circle user-img" alt="..." />
          </div>

          <div className="col-8 ms-4">
            <form>
              <div className="row ms-4 py-4">
                <div className="col-auto  col-sm-4 col-md-auto col-lg-3">
                  <label htmlFor="firstname" className="col-form-label">
                    First Name :
                  </label>
                </div>
                <div className="col-auto  col-sm-auto col-md-auto col-lg-auto">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    value={firstname}
                    className="form-control"
                    disabled
                    readonly
                  />
                </div>
              </div>

              <div className="row ms-4 py-4">
                <div className="col-auto  col-lg-3">
                  <label htmlFor="lastname" className="col-form-label">
                    Last Name :
                  </label>
                </div>
                <div className="col-auto col-sm-auto col-md-auto col-lg-auto ">
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    value={lastname}
                    className="form-control"
                    disabled
                    readonly
                  />
                </div>
              </div>

              <div className="row ms-4 py-4">
                <div className="col-auto col-sm-4 col-md-auto col-lg-2">
                  <label htmlFor="email" className="col-form-label">
                    Email :
                  </label>
                </div>
                <div className="col-auto col-sm-auto col-md-auto col-lg-auto ms-5">
                  <input
                    type="email"
                    id="email"
                    name="emailid"
                    value={email}
                    className="form-control"
                    disabled
                    readonly
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Link className="btn btn-primary back-button mb-4" to="/user">
        Back
      </Link>
    </>
  );
}
export default Details;
