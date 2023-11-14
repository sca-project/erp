import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiWindowClose,
  mdiWindowMaximize,
  mdiWindowMinimize,
  mdiWindowRestore,
} from "@mdi/js";
import { maximize,minimize,close} from "../../api/actions";

import "./titleBar.css";
import logo from "../../logo-title.png";
import { useNavigate } from "react-router-dom";
const TitleBar = () => {
  const navigate = useNavigate()
  const [minMax, setMinMax] = useState(false);
  return (
    <div className="card " id="title-bar">
      <div className="title-bar-left"  >
        <img src={logo} alt="" width={23} onClick={()=>navigate("/")} style={{borderRadius:5}} />
        <span className="app-name">SCA</span>
      </div>
      <div className="title-bar-center">SaaS</div>
      <div className="title-bar-right">
        <span>
          <Icon
            path={mdiWindowMinimize}
            size={0.8}
            title="Réduire"
            onClick={() => {
              
              try {
          
                minimize()
              } catch (error) {
                console.log("click error",error)
              }
            
            
            }}
          />
        </span>
        <span
          onClick={() => {
            setMinMax(!minMax);
            maximize();
          }}
        >
          <Icon
            path={minMax ? mdiWindowMaximize : mdiWindowRestore}
            size={0.8}
            title="Agrandir/Restaurer"
            onClick={() => {
              
              try {
                
              } catch (error) {
                console.log("click error",error)
              }
            
            
            }}
          />
        </span>
        <span>
          <Icon
            path={mdiWindowClose}
            size={0.8}
            title="Fermer"
            onClick={() => {
              
              try {
                close()
              } catch (error) {
                console.log("click error",error)
              }
            
            
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default TitleBar;
