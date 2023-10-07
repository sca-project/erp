import React, { useEffect, useState } from "react";
import Title from "../../components/title/Title";
import ClientForm from "./ClientForm";
import { initClient, init } from "./init";
import { useLocation, useParams } from "react-router-dom";
const Client = () => {
  const params = useParams()
  const location = useLocation()

  const [client, setClient] = useState(init);

  useEffect(() => {
 
   if (location.state) {
   
 setClient(location.state)
   }
    
  }, [location.state, params])
  
const renderTitle = params.updateId? "Client (Mis à jour)":params.destroyId? "Client (Suppression)" :"Client (Nouveau)" 

  return (
    <div className="client">
      <div className="card">
        <Title title={renderTitle} />
      </div>
      <div className="card card-top">
        <ClientForm client={client} setClient={setClient} />
      </div>
    </div>
  );
};

export default Client;
