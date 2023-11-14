import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import {
  addMission,
  updateMission,
  deleteMission,
} from "../../redux/mission/action";

const Formulaire = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { mission, setMission } = props;

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
      displaySnack(`Nouveau mission ajouter `);
      dispatch(addMission(mission));
      navigate(-1);
    }
  };

  return (
    <>
      <Form method="post" id="mission-form" className="col-12" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20, paddingTop:20 }}>
          <div className="inputBox col-1">
            <input
              type="text"
              name="initial"
              maxLength={3}
              autoComplete="off"
              value={mission.initial}
              onChange={handleChange}
              required
            />

            <label htmlFor={"initial"}>Initial</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="matricule"
              maxLength={3}
              autoComplete="off"
              value={mission.matricule}
              onChange={handleChange}
              required
            />

            <label htmlFor={"matricule"}>Matricule</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="nom"
              autoComplete="off"
              value={mission.nom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"nom"}>Nom</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="prenom"
              autoComplete="off"
              value={mission.prenom}
              onChange={handleChange}
              required
            />
            <label htmlFor={"prenom"}>Prénom</label>
          </div>
 
        
        </div>
        {/* ligne 2 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
        <div className="inputBox col-3">
            <input
              type="text"
              name="grade"
              autoComplete="off"
              value={mission.grade}
              onChange={handleChange}
              required
            />
            <label htmlFor={"grade"}>Grade</label>
          </div>
          <div className="inputBox col-3">
            <input
              type="text"
              name="departement"
              autoComplete="off"
              value={mission.departement}
              onChange={handleChange}
              required
            />
            <label htmlFor={"departement"}>Département</label>
          </div>
          <div className="inputBox col-2">
            <input
              type="text"
              name="societe"
              autoComplete="off"
              value={mission.societe}
              onChange={handleChange}
              required
            />
            <label htmlFor={"societe"}>Société</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={mission.email}
              onChange={handleChange}
            />

            <label htmlFor={"email"}>E-mail</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={mission.password}
              onChange={handleChange}
            />

            <label htmlFor={"password"}>Pass</label>
          </div>
         
        </div>
        {/* ligne 3*/}
        <div className="col-12" style={{ display: "flex", marginBottom: 20 }}>
       
          <div className="inputBox col-4">
            <input
              type="text"
              name="acces"
              autoComplete="off"
              value={mission.acces}
              onChange={handleChange}
            />
            <label htmlFor={"acces"}>Acces</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="privileges"
              autoComplete="off"
              value={mission.privileges}
              onChange={handleChange}
            />
            <label htmlFor={"privileges"}>Privilèges</label>
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
