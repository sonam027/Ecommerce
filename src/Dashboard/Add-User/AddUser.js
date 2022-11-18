import { useState } from "react";
import "./AddUser.css";
import AddedSuccessfully from "./AddedSuccessfully";

function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(true);

  function saveData() {
    let data = { email, password };

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.json().then((result) => {
        setId(result.id);
      });
    });
  }

  const clearData = () => {
    setEmail(" ");
    setPassword("");
  };

  return (
    <div className="col col-sm col-md col-lg ">
      {show ? (
        <div className="col col-sm col-md col-lg px-4">
          <h4>Add a User</h4>
          <hr />

          <form className="ms-1">
            <div className="mb-3 col-10 col-sm-6 col-md-4 col-lg-3">
              <input
                type="email"
                id="email"
                className="form-control form-input "
                placeholder="Username"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 col-10 col-sm-6 col-md-4 col-lg-3">
              <input
                type="password"
                id="password"
                className="form-control form-input "
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="button">
              <button
                className="btn btn-primary main-button"
                onClick={() => {
                  saveData();
                  setShow(!show);
                }}
              >
                Save
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-secondary main-button  "
                type="reset"
                onClick={clearData}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      ) : (
        <AddedSuccessfully regId={id} />
      )}
    </div>
  );
}
export default AddUser;
