import React from "react";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiAccountPlusOutline, mdiCashCheck, mdiCashClock, mdiCashFast, mdiCashMinus, mdiCashMultiple, mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
const listCard = [
  {
    icon: mdiAccountPlusOutline,
    link: "Nouveau",
    route: "/clients/Client",
  },
  {
    icon: mdiCashMultiple,
    link: "Regléments",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashClock,
    link: "Echéanciers",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashMinus,
    link: "Ecarts",
    route: "/clients/paiements",
  },
  {
    icon: mdiCashFast,
    link: "Relances",
    route: "/clients/paiements",
  },

  {
    icon: mdiCashCheck,
    link: "Transferts",
    route: "/clients/paiements",
  },
];
const Clients = () => {
  const clients = useSelector(state=>state.clients)
  const navigate = useNavigate();
  let headData = [
    "Initial",
    "Nom",
    "Grade",
    "Département",
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
          <span className="i-legend">Personnel</span>{" "}
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
    <div id="collaborateurs" >

      {renderStat}
    </div>
  );
};

export default Clients;
