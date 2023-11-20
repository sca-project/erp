import {
  mdiCashMultiple,
  mdiCashRegister,
  mdiFileChartCheckOutline,
  mdiFileCheck,
  mdiFileCompare,
} from "@mdi/js";

export const dataSideBAr = [
  {
    name: "Tableau de bord",
    route: "/",
  },
  {
    name: "Missions ",
    route: "missions",
  },

  {
    name: "Données",
    route: "donnees",

    children: [{ name: "Autres", route: "/" }],
  },

  {
    name: "Tiers",
    route: "tiers",

    children: [{ name: "Autres", route: "/" }],
  },
];

export const buttonsTiers = [
  {
    icon: mdiCashMultiple,
    link: "Clients",
    route: "/tiers/Clients",
  },

  {
    icon: mdiCashMultiple,
    link: "Utilisateurs",
    route: "/tiers/utilisateurs",
  },
];
export const buttonsDashBoard = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Asap",
    route: "/",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Autres..",
    route: "/",
  },
];

export const buttonsMissions = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Planning",
    route: "/missions/plannings",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Timings",
    route: "/missions/plannings",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Opérations",
    route: "/missions/operations",
  },
  {
    icon: mdiFileChartCheckOutline,
    link: "Archive",
    route: "/",
  },

];
export const buttonsDonnees = [
  {
    icon: mdiFileChartCheckOutline,
    link: "Catégories",
    route: "/donnees/categories",
  },

  {
    icon: mdiFileChartCheckOutline,
    link: "Taches",
    route: "/donnees/taches",
  },
];
