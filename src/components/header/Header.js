import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import Button from "../button/Button";
import { dataSideBAr as data, buttonsTiers, buttonsDashBoard, buttonsDonnees, buttonsMissions } from "./menu";


const Header = () => {
  const [onglet, setOnglet] = useState(<Button listCard={buttonsTiers} />);

  const location = useLocation();
  // console.log("location", location);
  useEffect(() => {
    switch (location.pathname) {
      case "/":

        return setOnglet(<Button listCard={buttonsDashBoard} />);
      case "/missions":

        return setOnglet(<Button listCard={buttonsMissions} />);
      
      case "/tiers":

        return setOnglet(<Button listCard={buttonsTiers} />);
    
    
      case "/donnees":

        return setOnglet(<Button listCard={buttonsDonnees} />);
     
   
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
