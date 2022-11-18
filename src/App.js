import "./App.css";
import Login from "./Dashboard/LogIn/Login";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import demo from "./demo";

function App() {
  return (
    <div className="">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={demo} />
      </Router>
    </div>
  );
}

export default App;
