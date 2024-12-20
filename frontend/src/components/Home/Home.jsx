// // import React from "react";
// // import { useContext } from "react";
// // import { Context } from "../../main";
// // import { Navigate } from "react-router-dom";
// import Navbar from "../Layout/Navbar";
// import HeroSection from "./HeroSection";
// import HowItWorks from "./HowItWorks";
// import PopularCategories from "./PopularCategories";
// import PopularCompanies from "./PopularCompanies";

// const Home = () => {
//   // const { isAuthorized } = useContext(Context);
//   // if (!isAuthorized) {
//   //   return <Navigate to={"/login"} />;
//   // }
//   return (
//     <>
//       <section className="homePage page">
//         <Navbar/>
//         <HeroSection />
//         <HowItWorks />
//         <PopularCategories />
//         <PopularCompanies />
//       </section>
//     </>
//   );
// };

// export default Home;


import Navbar from "../Layout/Navbar"; // Importing the Navbar
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
  return (
    <>
      {/* Navbar placed above the HeroSection */}
      <Navbar /> 

      {/* Main content sections */}
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
    </>
  );
};

export default Home;
