import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addTache,
  updateTache,
  deleteTache,
} from "../../redux/tache/action";
import Listing from "../../components/listing/Listing";

const Formulaire = (props) => {
  const categories = useSelector(state=>state.categories)
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { tache, setTache } = props;

  const handleChange = (e) => {
    setTache({ ...tache, [e.target.name]: e.target.value });
  };
  const renderCategories = (categorie, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setTache({ ...tache, categorie });
      }}
    >
      <span>{categorie.domaine}</span>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  
    displaySnack(`Nouveau Tache`);

    if (params.updateId) {
      displaySnack(`Tâche mis à jour`);
      dispatch(updateTache(tache));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression tâche`);
      dispatch(deleteTache(tache));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouveau tâche ajouter `);
      dispatch(addTache(tache));
      navigate(-1);
    }
  };

  return (
    <>
      <Form
        method="post"
        id="tache-form"
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
              value={tache.code}
              onChange={handleChange}
              required
            />

            <label htmlFor={"code"}>Code</label>
          </div>
          <div className="inputBox col-5">
            <input
              type="text"
              name="intitule"
              maxLength={3}
              autoComplete="off"
              value={tache.intitule}
              onChange={handleChange}
              required
            />

            <label htmlFor={"intitule"}>Intitulé</label>
          </div>
          <div className="inputBox col-5">
            <input
              type="text"
              name="categorie"
              autoComplete="off"
              value={tache.categorie.domaine}
              onChange={()=>{}}
            />

            <label htmlFor={"categorie"}>Categorie</label>
            <Listing
              content={categories}
              render={renderCategories}

            />
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
