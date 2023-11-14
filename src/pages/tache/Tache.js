import React, { useEffect, useState } from "react";

import { tache as init } from "../ini/tache";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Tache = () => {
  const params = useParams();
  const location = useLocation();

  const [tache, setTache] = useState(init);
  useEffect(() => {
    if (location.state) {
      setTache(location.state);
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

      <Formulaire tache={tache} setTache={setTache} />
    </fieldset>
  );
};

export default Tache;
