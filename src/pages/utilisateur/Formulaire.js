import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import {
  addUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
} from "../../redux/utilisateur/action";

const Formulaire = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { utilisateur, setUtilisateur } = props;

  const handleChange = (e) => {
    setUtilisateur({ ...utilisateur, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(utilisateur);
    console.log("====================================");

    displaySnack(`Nouveau Utilisateur`);

    if (params.updateId) {
      displaySnack(`Utilisateur mis à jour`);
      dispatch(updateUtilisateur(utilisateur));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression utilisateur`);
      dispatch(deleteUtilisateur(utilisateur));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouveau utilisateur ajouter `);
      dispatch(addUtilisateur(utilisateur));
      navigate(-1);
    }
  };

  return (
    <>
      <Form method="post" id="utilisateur-form" className="col-12" onSubmit={handleSubmit}>
        {/* ligne 1 */}
        <div className="col-12" style={{ display: "flex", marginBottom: 20, paddingTop:20 }}>
          <div className="inputBox col-1">
            <input
              type="text"
              name="initial"
              maxLength={3}
              autoComplete="off"
              value={utilisateur.initial}
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
              value={utilisateur.matricule}
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
              value={utilisateur.nom}
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
              value={utilisateur.prenom}
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
              value={utilisateur.grade}
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
              value={utilisateur.departement}
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
              value={utilisateur.societe}
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
              value={utilisateur.email}
              onChange={handleChange}
            />

            <label htmlFor={"email"}>E-mail</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={utilisateur.password}
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
              value={utilisateur.acces}
              onChange={handleChange}
            />
            <label htmlFor={"acces"}>Acces</label>
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="privileges"
              autoComplete="off"
              value={utilisateur.privileges}
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
