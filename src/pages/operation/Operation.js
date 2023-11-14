import React, { useEffect, useState } from "react";

import { operation as init } from "../ini/operation";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Operation = () => {
  const params = useParams();
  const location = useLocation();

  const [operation, setOperation] = useState(init);
  useEffect(() => {
    if (location.state) {
      setOperation(location.state);
    }
  }, [location.state, params]);

  const renderLegend = params.updateId
    ? " Mis à jour"
    : params.destroyId
    ? " Suppression"
    : " Nouveau";

  return (
    <fieldset className="card col-8 ">
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

      <Formulaire operation={operation} setOperation={setOperation} />
    </fieldset>
  );
};

export default Operation;
