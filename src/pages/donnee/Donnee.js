import React, { useEffect, useState } from "react";

import { collaborateur as init } from "../ini/collaborateur";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Donnee = () => {
  const params = useParams();
  const location = useLocation();

  const [donnee, setDonnee] = useState(init);
  useEffect(() => {
    if (location.state) {
      setDonnee(location.state);
    }
  }, [location.state, params]);

  const renderLegend = params.updateId
    ? " Mis à jour"
    : params.destroyId
    ? " Suppression"
    : " Nouveau";

  return (
    <fieldset className="card col-12 ">
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

      <Formulaire donnee={donnee} setDonnee={setDonnee} />
    </fieldset>
  );
};

export default Donnee;
