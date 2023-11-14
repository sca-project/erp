import React from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { displaySnack } from "../../components/snackbar/SnackBar";
import { useDispatch, useSelector } from "react-redux";
import {
  addOperation,
  updateOperation,
  deleteOperation,
} from "../../redux/operation/action";
import Listing from "../../components/listing/Listing";

const Formulaire = (props) => {
  const taches = useSelector(state=>state.taches)
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { operation, setOperation } = props;

  const handleChange = (e) => {
    setOperation({ ...operation, [e.target.name]: e.target.value });
  };
  const renderTaches = (tache, index) => (
    <div
      className="item"
      key={index}
      onClick={() => {
        setOperation({ ...operation, tache });
      }}
    >
      <span>{tache.intitule}</span>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  
    displaySnack(`Nouveau Operation`);

    if (params.updateId) {
      displaySnack(`Tâche mis à jour`);
      dispatch(updateOperation(operation));
      navigate(-1);
    }
    if (params.destroyId) {
      displaySnack(`Suppression tâche`);
      dispatch(deleteOperation(operation));
      navigate(-1);
    }
    if (!params.updateId && !params.destroyId) {
      displaySnack(`Nouveau tâche ajouter `);
      dispatch(addOperation(operation));
      navigate(-1);
    }
  };

  return (
    <>
      <Form
        method="post"
        id="operation-form"
        className="col-12"
        onSubmit={handleSubmit}
      >
        {/* ligne 1 */}
        <div
          className="col-12"
          style={{ display: "flex", marginBottom: 20, paddingTop: 20 }}
        >
          <div className="inputBox col-3">
            <input
              type="date"
              name="date"
              maxLength={3}
              autoComplete="off"
              value={operation.date}
              onChange={handleChange}
              
            />

            <label htmlFor={"date"}>Date</label>
          </div>
         
          <div className="inputBox col-3">
            <input
              type="text"
              name="tache"
              autoComplete="off"
              value={operation.tache.intitule}
              onChange={handleChange}
            />

            <label htmlFor={"tache"}>Tache</label>
            <Listing
              content={taches}
              render={renderTaches}

            />
          </div>
          <div className="inputBox col-4">
            <input
              type="text"
              name="description"
              maxLength={3}
              autoComplete="off"
              value={operation.description}
              onChange={handleChange}
              required
            />

            <label htmlFor={"description"}>Description</label>
          </div>
          <div className="inputBox col-1">
            <input
              type="number"
              name="duree"
              maxLength={3}
              autoComplete="off"
              value={operation.duree}
              onChange={handleChange}
              required
            />

            <label htmlFor={"duree"}>Durée</label>
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
