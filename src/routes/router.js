import { createHashRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/root/ErrorPage";
import Dashbord from "../pages/dashboard/Dashbord";
import Clients from "../pages/client/Clients";

import Profile from "../pages/client/profile/Profile";
import Client from "../pages/client/Client";
import Missions from "../pages/missions/Missions";
import Collaborateurs from "../pages/collaborateurs/Collaborateurs";

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
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // Clients
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "clients/client",
        element: <Client />,
      },
      {
        path: "clients/client/:updateId",
        element: <Client />,
      },
      {
        path: "clients/client/:destroyId/destroy",
        element: <Client />,
      },
      {
        path: "clients/profile",
        element: <Profile />,
      },
      {
        path: "clients/:autre",
        element: <Clients />,
      },
        // comptabilite
        {
          path: "comptabilite",
          element: <Clients />,
        },
        {
          path: "comptabilite/:autre",
          element: <Clients />,
        },

           // declarations
           {
            path: "declarations",
            element: <Clients />,
          },
          {
            path: "declarations/:autre",
            element: <Clients />,
          },
      // Missions
      {
        path: "missions",
        element: <Missions />,
      },
      {
        path: "missions/:autre",
        element: <Missions />,
      },
      // Collaborateurs
      {
        path: "Collaborateurs",
        element: <Collaborateurs />,
      },
      {
        path: "Collaborateurs/:autre",
        element: <Collaborateurs />,
      },
    ],
  },
]);
