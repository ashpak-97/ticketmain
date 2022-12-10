import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Dashboard</span></Link>
          </li>
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">CUSTOMERS</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customer List</span>
            </li>
          </Link>
          
          <Link to="/customerform" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Add New Customer</span>
              
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">TICKETING</p>
          <Link to ="/ticketlist" style={{ textDecoration: "none" }}><li>
          <InsertChartIcon className="icon" />
            
            <span>List</span>
          </li>
          </Link>
          <Link to ="/ticketform" style={{ textDecoration: "none" }}>
          <li>
          <NotificationsNoneIcon className="icon" />
            <span>Add New</span>
          </li></Link>
          
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">PROJECTS</p>
          <Link to ="/projectlist" style={{ textDecoration: "none" }}>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>List</span>
          </li>
          </Link>
          <Link to ="/projectform" style={{ textDecoration: "none" }}>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Add New</span>
          </li>
          </Link>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}

          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">WORK ORDER</p>
          <Link to ="/worklist" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>List</span>
          </li>
          </Link>
          <Link to ="/workform" style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Add New</span>
          </li>
          </Link>
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">STAFF</p>
          <Link to ="/stafflist" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Staff</span>
          </li>
          </Link>
          <Link to ="/staffform" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Add New Staff</span>
          </li>
          </Link>
          <Link to ="/permissions" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Permissions</span>
          </li>
          </Link>
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">COMPANY</p>
          <Link to ="/companyform" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartIcon className="icon" />
            <span>Company Information</span>
          </li>
          </Link>
          <Link to ="/emailform" style={{ textDecoration: "none" }}>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Email</span>
          </li>
          </Link>
          <p style={{ textDecoration: "none", fontSize:"15px" }} className="title">REPORTS</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Total Tickets</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Overall Report</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
