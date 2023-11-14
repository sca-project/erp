import React, { useEffect, useState } from "react";

import { client as init } from "../ini/client";
import { useLocation, useParams } from "react-router-dom";
import Formulaire from "./Formulaire";
const Client = () => {
  const params = useParams();
  const location = useLocation();

  const [client, setClient] = useState(init);
  useEffect(() => {
    if (location.state) {
      setClient(location.state);
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

      <Formulaire client={client} setClient={setClient} />
    </fieldset>
  );
};

export default Client;
