import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import {
  addClient,
  updateClient,
  deleteClient,
} from "../../redux/client/action";

const Formulaire = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { client, setClient } = props;

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(client);
    console.log("====================================");

    displaySnack(`Nouveau Client`);

    if (params.updateId) {
      displaySnack(`Client mis à jour`);
      dispatch(updateClient(client));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression client`);
      dispatch(deleteClient(client));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouveau client ajouter `);
      dispatch(addClient(client));
      navigate(-1);
    }
  };

  return (
    <>
      <Form method="post" id="client-form" className="col-12" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20, paddingTop:20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nif"
              autoComplete="off"
              value={client.nif}
              onChange={handleChange}
              required
            />

            <label htmlFor={"nif"}>Nif</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={client.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nom"}>Nom, Raison sociale</label>
          </div>
        
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
  
          <div className="inputBox col-2">
            <input
              type="text"
              name="tel"
              autoComplete="off"
              value={client.tel}
              onChange={handleChange}
              required
            />
            <label htmlFor={"tel"}>Téléphone</label>
          </div>
          <div className="inputBox col-1">
            <input
              type="number"
              name="bp"
              autoComplete="off"
              value={client.bp}
              onChange={handleChange}
            />

            <label htmlFor={"bp"}>Bp</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="adresse"
              autoComplete="off"
              value={client.adresse}
              onChange={handleChange}
            />
            <label htmlFor={"adresse"}>Adresse</label>
          </div>
        </div>
        {/* ligne 3*/}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
          <div className="inputBox col-4">
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={client.email}
              onChange={handleChange}
            />
            <label htmlFor={"email"}>Email</label>
          </div>
        </div>

        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="text"
              name="type"
              value={client.type}
              onChange={handleChange}
            />
            <label htmlFor={"type"}>Catégorie</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="mode"
              value={client.mode}
              onChange={handleChange}
            />
            <label htmlFor={"mode"}>Mode de reglément</label>
          </div>
        </div>
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          
        </div>
      
        {/* Buutton */}
        <div className="form-button">
          <button className="button" type="submit">
            Valider
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Annuler
          </button>
        </div>
      </Form>
    </>
  );
};

export default Formulaire;
