import { client } from "./client";
import { operation } from "./operation";
import { collaborateur } from "./collaborateur";
export const mission = {
  numero:"",
  creation:"",
  debut: "",
  fin: "",
  client,
  lieu:"",
  equipe: [collaborateur],
  activites: [operation],
  status: "",
};

export const status = ["En Attente", "Encours", "En Suspens", "Terminer"];
