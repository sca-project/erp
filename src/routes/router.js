import { createHashRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/root/ErrorPage";
import Dashbord from "../pages/dashboard/Dashbord";
import Clients from "../pages/client/Clients";
import Client from "../pages/client/Client";
import Utilisateur from "../pages/utilisateur/Utilisateur";
import Utilisateurs from "../pages/utilisateur/Utilisateurs";
import Login from "../pages/login/Login";
import Tiers from "../pages/tiers/Tiers";
import Missions from "../pages/mission/Missions";
import Donnees from "../pages/donnee/Donnees";
import Categories from "../pages/categorie/Categories";
import Categorie from "../pages/categorie/Categorie";
import Tache from "../pages/tache/Tache";
import Taches from "../pages/tache/Taches";
import Operations from "../pages/operation/Operations";
import Operation from "../pages/operation/Operation";
import Mission from "../pages/mission/Mission";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // Index DashBoard
      { index: true, element: <Dashbord /> },
      // login
      {
        path: "login",
        element: <Login />,
      },
      // Missions 
      {
        path: "missions",
        element: <Missions />,
      },
      // Planning 
      {
        path: "missions/plannings",
        element: <Missions />,
      },
      {
        path: "missions/plannings/new",
        element: <Mission />,
      },
      {
        path: "missions/plannings/:updateId",
        element: <Mission />,
      },
      {
        path: "missions/plannings/:destroyId/destroy",
        element: <Mission />,
      },
       // Oerations
       {
        path: "missions/operations",
        element: <Operations />,
      },
      {
        path: "missions/operations/new",
        element: <Operation />,
      },
      {
        path: "missions/operation/:updateId",
        element: <Operation />,
      },
      {
        path: "missions/operation/:destroyId/destroy",
        element: <Operation />,
      },
      // Donnees 
      {
        path: "donnees",
        element: <Donnees />,
      },
       // Categories
       {
        path: "donnees/categories",
        element: <Categories />,
      },
      {
        path: "donnees/categories/new",
        element: <Categorie />,
      },
      {
        path: "donnees/categorie/:updateId",
        element: <Categorie />,
      },
      {
        path: "donnees/categories/:destroyId/destroy",
        element: <Categorie />,
      },
       // Taches
       {
        path: "donnees/taches",
        element: <Taches />,
      },
      {
        path: "donnees/taches/new",
        element: <Tache />,
      },
      {
        path: "donnees/tache/:updateId",
        element: <Tache />,
      },
      {
        path: "donnees/tache/:destroyId/destroy",
        element: <Tache />,
      },
      // Tiers
      {
        path: "tiers",
        element: <Tiers />,
      },
      // Clients
      {
        path: "tiers/clients",
        element: <Clients />,
      },
      {
        path: "tiers/clients/new",
        element: <Client />,
      },
      {
        path: "tiers/client/:updateId",
        element: <Client />,
      },
      {
        path: "tiers/client/:destroyId/destroy",
        element: <Client />,
      },
      // Utilisateur
      {
        path: "tiers/utilisateurs",
        element: <Utilisateurs />,
      },
      {
        path: "tiers/utilisateurs/new",
        element: <Utilisateur />,
      },
      {
        path: "tiers/utilisateur/:updateId",
        element: <Utilisateur />,
      },
      {
        path: "tiers/utilisateur/:destroyId/destroy",
        element: <Utilisateur />,
      },
    ],
  },
]);
