import React from "react";
import Table from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";

const Clients = () => {
  const clients = useSelector(state=>state.clients)
  const navigate = useNavigate();
  let headData = [
    
    "Nif",
    "Nom",
    "Tél",
    "Bp",
    "Adresse",
    "Email",
    "Catégorie",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.nif}</td>
      <td>{item.nom}</td>
      <td>{item.tel}</td>
      <td>{item.bp}</td>
      <td>{item.adresse}</td>
      <td>{item.email}</td>
      <td>{item.type}</td>

      <td
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
       
        }}
      >
      
        <Icon
          path={mdiEye}
          size={0.6}
          title="Profile"
          onClick={() =>
            navigate(`profile`, { state: item })
          }
        />
        /
        
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() => navigate(`/tiers/client/${item.uuid}`, { state: item })}
        />{" "}
        /
        
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/tiers/client/${item.uuid}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );
  const renderStat = (
    <div className=" col-12" style={{ paddingRight: 10 }}>
      {/* Listing */}
      <fieldset className="card col-12 ">
        <legend
          className="card legend"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            textAlign: "left",
          }}
        >
          {/* <Icon
              path={mdiAccountMultipleOutline}
              size={0.8}
              color={"var(--main-color)"}
            /> */}
          <span className="i-legend">Annuaire</span>{" "}
        </legend>
        <div className="pr-row"></div>
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={clients}
          renderBody={renderBody}
        />
      </fieldset>
    </div>
  );
  return (
    <div>
      {/* <div className="card">
        <Title title="Clients" />
      </div> */}
      {/* <Button listCard={listCard} /> */}
      {renderStat}
    </div>
  );
};

export default Clients;
