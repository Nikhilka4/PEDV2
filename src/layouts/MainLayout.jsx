// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const MainLayout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current route is "/contact"
  const isContactPage = location.pathname === "/contact";

  return (
    <div>
      <Navbar isContactPage={isContactPage}/>
      <Outlet />
      {!isContactPage && <Footer />}
    </div>
  );
};

export default MainLayout;
