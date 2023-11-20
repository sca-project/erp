import { client } from "./client";
import { operation } from "./operation";
import { collaborateur } from "./collaborateur";
import moment from "moment/moment";
export const mission = {
  numero:"",
  creation:moment().format("YYYY-MM-DD"),
  debut:moment().format("YYYY-MM-DD"),
  fin: moment().add(7,"d").format("YYYY-MM-DD"),
  client,
  lieu:"",
  equipe: [collaborateur],
  activites: [operation],
  status: "",
};

export const status = ["En Attente", "Encours", "En Suspens", "Terminer"];
