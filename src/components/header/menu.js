import { mdiAccountPlusOutline, mdiCashCheck, mdiCashClock, mdiCashFast, mdiCashMinus, mdiCashMultiple, mdiEye, mdiFile, mdiFileChartCheckOutline, mdiFileCheck, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";

export const data = [
    {
      name: "Tableau de bord",
      route: "/",
      
    
    },
  
    {
      name: "Missions",
      route: "missions",
  
      children: [
        { name: "Tâches", route: "offres" },
        { name: "Activités", route: "marches" },
        { name: "Planification", route: "bordereau" },
      ],
    },
    {
      name: "Déclarations",
      route: "declarations",
  
      children: [
        { name: "Taxes", route: "taxes" },
      
      ],
    },
    {
      name: "Comptabilité",
      route: "comptabilite",
  
      children: [
        { name: "Journaux", route: "journaux" },
        { name: "Grand Livre", route: "grandLivre" },
        { name: "Balance", route: "balance" },
        { name: "Bilan", route: "bilan" },
        { name: "Résultat", route: "resultat" },
      
      ],
    },
    {
      name: "Collaborateurs",
      route: "collaborateurs",
  
      children: [
        // { name: "CV's", route: "offres" },
        // { name: "Paie", route: "marches" },
        { name: "Profiles", route: "bordereau" },
      ],
    },
    {
      name: "Clients",
      route: "clients",
  
      children: [
        // { name: "Profiles", route: "profile" },
        { name: "Instances", route: "instances" },
        // { name: "Réglements", route: "reglement" },
        // { name: "Ecarts", route: "ecart" },
        // { name: "Echéanciers", route: "echeanciers" },
        // { name: "Relances", route: "relances" },
        // { name: "Transferts", route: "transfert" },
      ],
    }, 
  ];

  export  const buttonsClient = [
    {
      icon: mdiAccountPlusOutline,
      link: "Nouveau",
      route: "/clients/Client",
    },
    // {
    //   icon: mdiCashMultiple,
    //   link: "Regléments",
    //   route: "/clients/paiements",
    // },
    // {
    //   icon: mdiCashClock,
    //   link: "Echéanciers",
    //   route: "/clients/paiements",
    // },
    // {
    //   icon: mdiCashMinus,
    //   link: "Ecarts",
    //   route: "/clients/paiements",
    // },
    // {
    //   icon: mdiCashFast,
    //   link: "Relances",
    //   route: "/clients/paiements",
    // },
  
    // {
    //   icon: mdiCashCheck,
    //   link: "Transferts",
    //   route: "/clients/paiements",
    // },
  ];
  export  const buttonsDashBoard = [
    {
      icon: mdiFileChartCheckOutline,
      link: "Missions",
      route: "/",
    },
    {
      icon: mdiFileChartCheckOutline,
      link: "Déclarations",
      route: "/",
    },
    {
      icon: mdiFileChartCheckOutline,
      link: "Comptabilité",
      route: "/",
    },
    {
      icon: mdiFileChartCheckOutline,
      link: "Collaborateurs",
      route: "/",
    },
   
    {
      icon: mdiFileChartCheckOutline,
      link: "Clients",
      route: "/",
    },
   
  ];