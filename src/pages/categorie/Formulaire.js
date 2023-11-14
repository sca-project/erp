import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch } from "react-redux";
import {
  addCategorie,
  updateCategorie,
  deleteCategorie,
} from "../../redux/categorie/action";

const Formulaire = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { categorie, setCategorie } = props;

  const handleChange = (e) => {
    setCategorie({ ...categorie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(categorie);
    console.log("====================================");

    displaySnack(`Nouveau Categorie`);

    if (params.updateId) {
      displaySnack(`Catégorie mis à jour`);
      dispatch(updateCategorie(categorie));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression catégorie`);
      dispatch(deleteCategorie(categorie));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouveau catégorie ajouter `);
      dispatch(addCategorie(categorie));
      navigate(-1);
    }
  };

  return (
    <>
      <Form
        method="post"
        id="categorie-form"
        className="col-12"
        onSubmit={handleSubmit}
      >
        {/* ligne 1 */}
        <div
          className="col-12"
          style={{ display: "flex", marginBottom: 20, paddingTop: 20 }}
        >
          <div className="inputBox col-2">
            <input
              type="text"
              name="code"
              maxLength={3}
              autoComplete="off"
              value={categorie.code}
              onChange={handleChange}
              required
            />

            <label htmlFor={"code"}>Code</label>
          </div>
          <div className="inputBox col-10">
            <input
              type="text"
              name="domaine"
              maxLength={3}
              autoComplete="off"
              value={categorie.domaine}
              onChange={handleChange}
              required
            />

            <label htmlFor={"domaine"}>Domaines</label>
          </div>
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
