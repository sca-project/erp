import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import SideBar from "../../components/sideBar/SideBar";
import "./root.css";
import SideBar from "../../components/sidebar/SideBar";
import TitleBar from "../../components/titleBar/TitleBar";
import FooterBar from "../../components/footerBar/FooterBar";
import Header from "../../components/header/Header";
const Root = () => {
  return (
    <>
      <div>
        <TitleBar />
        <Header />

        <div className="root_content">
          <SideBar />

          <div className="col-12 outlet margin_side_bar">
            <Outlet />
          </div>
        </div>

        <FooterBar />
      </div>
    </>
  );
};

export default Root;
