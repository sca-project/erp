import React from "react";
import Table from "../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Icon from "@mdi/react";
import { mdiEye, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";

const Taches = () => {
  const taches = useSelector((state) => state.taches);
  const navigate = useNavigate();
  let headData = ["Code", "Intitulé","Domaine", "Action"];
  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.code}</td>
      <td>{item.intitule}</td>
      <td>{item.categorie.domaine}</td>

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
          onClick={() => navigate(`profile`, { state: item })}
        />
        /
        <Icon
          path={mdiSquareEditOutline}
          size={0.6}
          title="Editer"
          onClick={() =>
            navigate(`/donnees/Tache/${item.uuid}`, { state: item })
          }
        />{" "}
        /
        <Icon
          path={mdiTrashCanOutline}
          size={0.6}
          title="Supprimer"
          onClick={() =>
            navigate(`/donnees/tache/${item.uuid}/destroy`, { state: item })
          }
        />
      </td>
    </tr>
  );
  const renderContent = (
    <div className=" col-8" style={{ paddingRight: 10 }}>
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
          <span className="i-legend">Domaines</span>{" "}
        </legend>
        <div className="pr-row"></div>
        <Table
          headData={headData}
          renderHead={renderHead}
          bodyData={taches}
          renderBody={renderBody}
        />
      </fieldset>
    </div>
  );
  return <div>{renderContent}</div>;
};

export default Taches;
