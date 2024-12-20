import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main"; // Importing the global context
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios"; // For making requests to your backend
import Navbar from "./components/Layout/Navbar"; // Import Navbar component
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import AlumniConnect from "./components/Alumni Connect/AlumniConnect";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context); // Pulling context values

  // Fetch user details when the app is mounted
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/getuser", {
          withCredentials: true,
        });
        setUser(response.data.user); // Set user details in context
        setIsAuthorized(true); // Set authorization to true if user exists
      } catch (error) {
        setIsAuthorized(false); // User is not authorized if error occurs
      }
    };
    fetchUser();
  }, [setIsAuthorized, setUser]); // Update whenever authorization status or user changes

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
         {/* Navbar stays at the top of the page */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/alumni-connect" element={<AlumniConnect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> {/* Footer */}
        <Toaster /> {/* Toast notifications */}
      </BrowserRouter>
    </>
  );
};

export default App;
