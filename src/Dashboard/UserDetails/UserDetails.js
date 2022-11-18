import React from "react";
import ReactPaginate from "react-paginate";
import MapConatiner from "./Map/MapConatiner";


import "./UserDetails.css";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

import { Link } from "react-router-dom";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      showComponent: false,
      demoModal: false,
      showUser: false,
      selecetdUser: {},
      selectedUserId: {},
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.onUserClick = this.onUserClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
      demoModal: true,
    });
  }

  onUserClick() {
    this.setState({
      showUser: true,
    });
  }

  fetchUsers = async (currentpage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${currentpage}&_limit=4`
    );
    const data = await res.json();
    return data;
  };

  handlePageClick = async (data) => {
    console.log("clicked.......");

    let currentPage = data.selected + 1;

    const usersFromServer = await this.fetchUsers(currentPage);
    this.setState({
      userData: usersFromServer,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users?_page=1&_limit=4")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          userData: response,
        });
      });
  }

  render() {
    const { userData } = this.state;
    console.log(this.state.selecetdUser);
    return (
      <>
        <br />
        <div className="container">
          <h4>User Manager</h4>
          <hr />
          <div className=" table-responsive table-responsive-md">
            <table className="table table-striped table-bordered  table-hover ">
              <tbody>
                <tr className="table-primary">
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Zipcode</th>
                  {/* <th>Lat</th> */}
                  {/* <th>Lan</th> */}
                  <th>Location on Map</th>
                </tr>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input
                        type="checkbox"
                        style={{ borderRadius: "2px" }}
                      ></input>
                    </td>
                    <td>{user.id}</td>
                    <td>
                      <Link
                        className="mr-2 text-decoration-none text-dark"
                        style={{ cursor: "pointer" }}
                        to={`/user/${user.id}`}
                      >
                        {user.name}
                      </Link>
                    </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.zipcode}</td>
                    {/* <td>{user.address.geo.lat}</td> */}
                    {/* <td>{user.address.geo.lng}</td> */}
                    <td className="text-center">
                      <i
                        className="material-icons"
                        style={{
                          color: "red",
                          fontSize: "36px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          this._onButtonClick();

                          this.setState({
                            selecetdUser: user,
                          });
                          console.log(
                            user.address.geo.lat,
                            user.address.geo.lng
                          );
                        }}
                      >
                        place
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={3}
            marginPagesDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />

          <Modal style={{ width: "100%" }} show={this.state.demoModal}>
            <ModalHeader toggle={this.toggle}>
              <h4 className="mx-auto">Location</h4>
            </ModalHeader>
            <ModalBody style={{ height: "60vh", width: "90%" }}>
              {this.state.showComponent ? (
                <MapConatiner
                  latt={this.state.selecetdUser.address.geo.lat}
                  long={this.state.selecetdUser.address.geo.lng}
                />
              ) : null}
            </ModalBody>
            <ModalFooter style={{ marginTop: "25px" }}>
              <Button onClick={() => this.setState({ demoModal: false })}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default UserDetails;
