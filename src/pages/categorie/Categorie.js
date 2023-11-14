import React, { useEffect, useState } from "react";

import { categorie as init } from "../ini/categorie";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Categorie = () => {
  const params = useParams();
  const location = useLocation();

  const [categorie, setCategorie] = useState(init);
  useEffect(() => {
    if (location.state) {
      setCategorie(location.state);
    }
  }, [location.state, params]);

  const renderLegend = params.updateId
    ? " Mis à jour"
    : params.destroyId
    ? " Suppression"
    : " Nouveau";

  return (
    <fieldset className="card col-6 ">
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

      <Formulaire categorie={categorie} setCategorie={setCategorie} />
    </fieldset>
  );
};

export default Categorie;
