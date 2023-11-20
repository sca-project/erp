import React from "react";
import Modal from "../../components/modal/Modal";
import Listing from "../../components/listing/Listing";
import { useSelector } from "react-redux";

const Equipe = (props) => {
  const { showEquipe, setShowEquipe } = props;

  const utilisateurs = useSelector(state =>state.utilisateurs)
  console.log(utilisateurs);
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
    <Modal showModal={showEquipe}>
      <div className="modalHeader">Membres</div>
      <div className="modalBody">
        <div className="inputBox col-12">
          <input
            type="text"
            name="categorie"
            autoComplete="off"
            // value={"xd"}
            onChange={() => {}}
          />

         
        <Listing content={[1,2,3,4]} render={renderUtilisateurs} />
        </div>
      </div>
      <div className="modalFooter">
        <button className="modalBtn" onClick={() => setShowEquipe(!showEquipe)}>
          Ajouter
        </button>
        <button className="modalBtn" onClick={() => setShowEquipe(!showEquipe)}>
          Quitter
        </button>
      </div>
    </Modal>
  );
};

export default Equipe;
