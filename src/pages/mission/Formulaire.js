import React, { useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import {
  addMission,
  updateMission,
  deleteMission,
} from "../../redux/mission/action";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Equipe from "./Equipe";
import Listing from "../../components/listing/Listing";

const Formulaire = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { mission, setMission } = props;

const [showEquipe, setShowEquipe] = useState(false)

  const handleChange = (e) => {
    setMission({ ...mission, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(mission);
    console.log("====================================");

    displaySnack(`Nouveau Mission`);

    if (params.updateId) {
      displaySnack(`Mission mis à jour`);
      dispatch(updateMission(mission));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression mission`);
      dispatch(deleteMission(mission));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouvelle mission ajouter `);
      dispatch(addMission(mission));
      navigate(-1);
    }
  };

  const renderUtilisateurs= (utilisateur, index)=>(
    <div
    className="item"
    key={index}
    onClick={() => {
   
    }}
  >
    <span>{utilisateur}</span>
  </div>

)

  return (
    <>
      <Form
        method="post"
        id="mission-form"
        className="col-12"
        onSubmit={handleSubmit}
      >
        {/* ligne 1 */}
        <div
          className="col-12"
          style={{ display: "flex", marginBottom: 20, paddingTop: 20 }}
        >
          <div className="inputBox col-1">
            <input
              type="text"
              name="numero"
              maxLength={3}
              autoComplete="off"
              value={mission.numero}
              onChange={handleChange}
              required
            />

            <label htmlFor={"numero"}>Numéro</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="debut"
              maxLength={3}
              autoComplete="off"
              value={mission.debut}
              onChange={handleChange}
              required
            />

            <label htmlFor={"debut"}>Début</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="date"
              name="fin"
              autoComplete="off"
              value={mission.fin}
              onChange={handleChange}
              required
            />
            <label htmlFor={"fin"}>Echéance</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="client"
              autoComplete="off"
              value={mission.client.nom}
              onChange={() => {}}
            />
            <label htmlFor={"client"}>Client</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="lieu"
              autoComplete="off"
              value={mission.lieu}
              onChange={handleChange}
            />
            <label htmlFor={"lieu"}>Lieu</label>
          </div>
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          <div className="inputBox col-3">
            <input
              type="text"
              name="equipe"
              autoComplete="off"
              value={mission.equipe.initial}
              onChange={handleChange}
            />
            <label htmlFor={"equipe"}>Equipe</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="activites"
              autoComplete="off"
              value={mission.activites}
              onChange={handleChange}
            />
            <label htmlFor={"activites"}>Activités</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="status"
              autoComplete="off"
              value={mission.status}
              onChange={handleChange}
            />
            <label htmlFor={"status"}>Status</label>
          </div>
        </div>
        {/* Equipe */}
        <fieldset className="card  ">
          <legend
            className="card "
            style={{
              position:"relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "",
              height:25
            }}
          >
            {" "}
            <span style={{marginLeft:5}}>Equipe</span> <span style={{marginLeft:25, cursor:"pointer"}} > <Listing icon={mdiPlus} content={[1,2,3,4]} render={renderUtilisateurs} /></span>
           
            {/* <Icon
              path={mdiPlus}
              color={"var(--vert)"}
              size={0.8}
              style={{ cursor: "pointer" }}
              onClick ={()=>setShowEquipe(!showEquipe)}
            /> */}
          </legend>
        </fieldset>
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
          ezrzrz
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
      <Equipe showEquipe={showEquipe} setShowEquipe={setShowEquipe} />
    </>
  );
};

export default Formulaire;
