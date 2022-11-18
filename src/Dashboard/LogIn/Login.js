import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [classname, setclassname] = useState("name");

  function valid() {
    if (!email.includes("@") && email === "") {
      setEmailerror("Please Enter valid creadentials");
      setclassname("Invalid");
      console.log("email invalid");
      return;
    }
    if (
      password === "" &&
      !password.includes("@" && ".") &&
      password.length < 5
    ) {
      setPassworderror("Please Enter valid creadentials");
      setclassname("Invalid");
      console.log("password invalid");

      return;
    }
    history.push("/dashboard");
  }

  const loginApiCall = async () => {
    valid();

    await axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response, "response from login api");
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error, "error in api");
      });
  };

  function reset() {
    setEmail("");
    setPassword("");
    setEmailerror("");
    setPassworderror("");
    setclassname("name");
  }

  return (
    <div className="main">
      <div className="card mx-auto shadow mt-2 p-4 mb-4 main-card">
        <h2 className=" name bg-primary text-white card p-1 mt-3 shadow ">
          YMS
        </h2>

        <div>
          <form className="loginform mx-auto p-4">
            <div className="form-group userId">
              <input
                type="email"
                className="form-control form-input mb-2"
                id="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p style={{ color: "red" }}>{emailerror}</p>
            </div>
            <div className="form-group mb-3 password">
              <input
                type="password"
                className="form-control form-input"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p style={{ color: "red" }}>{passworderror}</p>
            </div>

            <div className="text-center mx-auto ">
              <button
                type="submit"
                className="btn btn-primary form-button"
                onClick={loginApiCall}
              >
                Submit
              </button>
              &nbsp;&nbsp;&nbsp;
              <button type="button" className="btn btn-secondary form-button" onClick={reset}>
                Cancel
              </button>
              <h5 className="text-center mt-4">OR</h5>
              <button
                type="button"
                className="btn btn-outline-primary media-button"
              >
                Login with Facebook
              </button>
              <br />
              <button
                type="button"
                className="btn btn-outline-danger media-button mt-3"
              >
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
