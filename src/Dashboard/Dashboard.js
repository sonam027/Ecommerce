/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { 
  MdSearch, 
  MdNotifications,
  MdPerson, 
  MdDashboard, 
  MdProductionQuantityLimits,
  MdInsertDriveFile,
  MdTraffic,
  MdSupervisedUserCircle,
  MdCalendarToday,
  MdMessage,
  MdLogout 
} from "react-icons/md";
import "./Dashboard.css";
import { useHistory } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import AddUser from "./Add-User/AddUser";
import Details from "./UserDetails/Details/Details";
import ProductListing from "../products/ProductListing";
import ProductDetails from "../products/ProductDetails";

function Dashboard() {
  let history = useHistory ();
  return (
    <Router>
      
    <div className="Dashboard ">
      <div className="row">
        <div className="row">
          <div className="col-2">
          <h4 className="name mx-3 card p-1 mt-3 shadow bg-primary text-white">YMS</h4>
          </div>
          <div className="col-10">
          <ul className="icons px-4 me-4 mt-4">
            
            <li className="rounded-circle ms-2">
              <MdSearch></MdSearch>
            </li>
            <li className="rounded-circle ms-2">
              <MdNotifications></MdNotifications>
            </li>
            <li className="rounded-circle ms-2">
              <MdPerson></MdPerson>
            </li>
          </ul>
          </div>
        </div>
        <div className="col-sm-2 col-2 card mt-2 mx-4 my-auto menu-bar shadow p-4 mb-4 bg-white">
          <div className="row ">
            <img
              src="https://reqres.in/img/faces/4-image.jpg"
              alt="user-image"
              className="rounded-circle user-image col-4 mb-2"
            />
            <h5 className="col-8 mx-auto mt-2 mb-2">Eve holt</h5><br/><br/><hr/>
          </div>

         
          <ul className="navbar-nav">
            <li className="nav-item active ">
            <a className="nav-link" href="#">
                <MdDashboard ></MdDashboard>&nbsp;&nbsp; Dashboard
                </a>
            </li>
            <li className="nav-item " >
              <a className="nav-link" href="#">
              <Link to={'/products'} className="nav-link">
              <MdProductionQuantityLimits></MdProductionQuantityLimits>&nbsp;&nbsp;  Product
              </Link>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <MdInsertDriveFile></MdInsertDriveFile>&nbsp;&nbsp;  File Manager
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <MdTraffic></MdTraffic>&nbsp;&nbsp;  Traffic analyzer
              </a>
            </li>
            <li className="nav-item p-1">
            
              <MdSupervisedUserCircle></MdSupervisedUserCircle>&nbsp;&nbsp;  User Manager
              </li>
              
            <ul className="list-group list-group-flush ms-4">
              <li className="nav-item " >
                <Link to={'/user'} className="nav-link">List Users</Link>
              </li>
              <li className="nav-item ">
              <Link to={'/add-user'} className="nav-link">Add User</Link>
              </li>
            </ul>
            
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <MdCalendarToday></MdCalendarToday>&nbsp;&nbsp;  Calender
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
              <MdMessage></MdMessage>&nbsp;&nbsp;  Message
              </a>
            </li>
            
            <hr />
            <li className="nav-item ">
              <a className="nav-link" href="#" onClick={() => {localStorage.clear(); history.push('/') } }>
              <MdLogout></MdLogout>&nbsp;&nbsp;  Logout
              </a>
            </li>
            
          </ul>
        </div>

        <div className="col-sm-9 col-9 card me-4 mt-2 my-auto menu-bar shadow p-4 mb-4 bg-white">
         
          
          <Switch>
              <Route exact path='/user' component={UserDetails} />
              <Route exact path="/user/:id" component={Details} />
              <Route exact path='/add-user' component={AddUser} /> 

              <Route exact path='/products' component={ProductListing} />
              <Route path="/product/:productId" component={ProductDetails} />
             
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default Dashboard;
