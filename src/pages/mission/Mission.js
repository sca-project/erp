import React, { useEffect, useState } from "react";

import { mission as init } from "../ini/mission";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Mission = () => {
  const params = useParams();
  const location = useLocation();

  const [mission, setMission] = useState(init);
  useEffect(() => {
    if (location.state) {
      setMission(location.state);
    }
  }, [location.state, params]);

  const renderLegend = params.updateId
    ? " Mis à jour"
    : params.destroyId
    ? " Suppression"
    : " Nouveau";

  return (
    <fieldset className="card  ">
      <legend
        className="card legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          textAlign: "left",
        }}
      >
        {renderLegend}
      </legend>

      <Formulaire mission={mission} setMission={setMission} />
    </fieldset>
  );
};

export default Mission;
