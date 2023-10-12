import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import { addClient, updateClient, deleteClient } from "../../redux/client/action";

const ClientForm = (props) => {
  const navigate = useNavigate();
  const params = useParams()
  const dispatch = useDispatch()
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
      displaySnack(
        `Client mis à jour`
      );
      dispatch(updateClient(client));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(
        `Suppression client`
      );
      dispatch(deleteClient(client));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
    
      displaySnack(
        `Nouveau client ajouter `
      );
      dispatch(addClient(client));
      navigate(-1);
    }
  };

  return (
    <>
      <Form method="post" id="client-form" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="nif"
              autoComplete="off"
              value={client.nif}
              onChange={handleChange}
              required
            />

            <label htmlFor={"nif"}>NIF</label>
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
          <div className="inputBox col-3">
            <input
              type="text"
              name="secteur"
              value={client.secteur}
              onChange={handleChange}
            />
            <label htmlFor={"secteur"}>Secteur d'activité</label>
            {/* <Listing
              content={societe.typeClients}
              render={renderTypeClient}
              footer={
                <Icon
                  path={mdiPlusBox}
                  size={0.8}
                  onClick={() => {
                    removeClassName("footer-item", "actif");
                    navigate("/clients/type");
                  }}
                />
              }
            /> */}
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-2">
            <input
              type="number"
              name="bp"
              autoComplete="off"
              value={client.bp}
              onChange={handleChange}
            />

            <label htmlFor={"bp"}>Bp</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="tel"
              autoComplete="off"
              value={client.tel}
              onChange={handleChange}
            />
            <label htmlFor={"tel"}>Téléphone</label>
          </div>
          <div className="inputBox col-4">
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
        {/* ligne contact 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="contact"
              autoComplete="off"
              value={client.contact}
              onChange={handleChange}
            />

            <label htmlFor={"contact"}>Contact</label>
          </div>

          <div className="inputBox col-3">
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
              type="number"
              name="compte"
              value={client.compte}
              onChange={handleChange}
            />
            <label htmlFor={"compte"}>Compte</label>
          </div>
       
        </div>
        {/* ligne 3 */}

        <div className="col-9" style={{ display: "flex", marginBottom: 20 }}>
          <textarea
            onChange={handleChange}
            name="autres"
            id="autres"
            cols="50"
            rows="3"
            placeholder={client.autres}
          ></textarea>
        </div>
        {/* Buutton */}
        <div>
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
      {/* <SnackBar message={`Nouveau client ajouter`} /> */}
    </>
  );
};

export default ClientForm;
