import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiWindowClose,
  mdiWindowMaximize,
  mdiWindowMinimize,
  mdiWindowRestore,
} from "@mdi/js";
import "./titleBar.css";
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";
const TitleBar = () => {
  const navigate = useNavigate()
  const [minMax, setMinMax] = useState(false);
  return (
    <div className="card " id="title-bar">
      <div className="title-bar-left"  >
        <img src={logo} alt="" width={20} onClick={()=>navigate("/")} />
        <span className="app-name">SCA's</span>
      </div>
      <div className="title-bar-center">Stratégie - Conseil - Afrique</div>
      <div className="title-bar-right">
        <span>
          <Icon
            path={mdiWindowMinimize}
            size={0.8}
            title="Réduire"
            onClick={() => console.log("click")}
          />
        </span>
        <span
          onClick={() => {
            setMinMax(!minMax);
            // maximize();
          }}
        >
          <Icon
            path={minMax ? mdiWindowMaximize : mdiWindowRestore}
            size={0.8}
            title="Agrandir/Restaurer"
            onClick={() => console.log("click")}
          />
        </span>
        <span>
          <Icon
            path={mdiWindowClose}
            size={0.8}
            title="Fermer"
            onClick={() => console.log("click")}
          />
        </span>
      </div>
    </div>
  );
};

export default TitleBar;
