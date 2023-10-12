import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mdiAccountPlusOutline, mdiCashCheck, mdiCashClock, mdiCashFast, mdiCashMinus, mdiCashMultiple, mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import "./header.css";
import Button from "../button/Button";
import { data, buttonsClient, buttonsDashBoard } from "./menu";


const Header = () => {
  const [onglet, setOnglet] = useState(<Button listCard={buttonsClient} />);

  const location = useLocation();
  console.log("location", location);
  useEffect(() => {
    switch (location.pathname) {
      case "/":

      return setOnglet(<Button listCard={buttonsDashBoard} />);
      case "/missions":
  
      return setOnglet(<Button listCard={buttonsClient} />);
      case "/collaborateurs":
        
        return setOnglet(<Button listCard={buttonsClient} />);
      case "/clients":
        
        return setOnglet(<Button listCard={buttonsClient} />);


      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div id="header" className="card ">
      <div className="header-link">
        {data.map((item, index) => (
          <NavLink key={index} className="header-item" to={`${item.route}`}>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="header-onglet" >{onglet}</div>
    </div>
  );
};

export default Header;
