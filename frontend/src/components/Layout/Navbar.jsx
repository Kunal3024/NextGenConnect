import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const { isAuthorized, user, setIsAuthorized } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/nextgenconnect-logo.png" alt="logo" />
          </Link>
        </div>

        {/* Menu */}
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/job/getall">Search Jobs</Link>
          </li>
          {!isAuthorized ? (
            <>
              <li>
                <Link to="/login" className="btn-login">Login</Link>
              </li>
              <li>
                <Link to="/register" className="btn-register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/job/post">Post New Job</Link>
              </li>
              <li>
                <Link to="/job/me">View Your Jobs</Link>
              </li>
              <li>
                <Link to="/mentorship">Mentorship</Link>
              </li>
              <li>
                <Link to="/alumni-connect">Alumni Connect</Link>
              </li>
              <li>
                <Link to="/applications/me">My Applications</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
