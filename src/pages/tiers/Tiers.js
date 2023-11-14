import React from "react";
import Table from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";

const Tiers = () => {
  const clients = useSelector(state=>state.clients)
  const navigate = useNavigate();
  let headData = [
    "Compte",
    "NIF",
    "Nom",
    "Tél",
    "BP",
    "Adresse",
    "Email",
    "Action",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{`${item.compte}/${index + 1}`}</td>
      <td>{item.nif}</td>

      <td>{item.nom}</td>
      <td>{item.tel}</td>
      <td>{item.bp}</td>
      <td>{item.adresse}</td>
      <td>{item.email}</td>

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
          onClick={() => navigate(`client/${item.nif}`, { state: item })}
        />{" "}
        /
        
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`client/${item.nif}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );
  const renderContent = (
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
          <span className="i-legend">Repertoire</span>{" "}
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
    
      {renderContent}
    </div>
  );
};

export default Tiers;
