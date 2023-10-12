import moment from "moment";
import { v4 as uuid } from "uuid";

export const init = {
  nif: "",
  nom: "",
  secteur:"",
  bp: "",
  tel: "",
  adresse: "NIAMEY/NIGER",
  contact: "",
  email: "",
  compte:"411",
  autres:"Autres informations spécifiques sur la relation client, ..."

}
export const type = {
  code: uuid(),
  libelle: "",
  designation: "",
  dispense: false,
  tva: "19",
  acompte: "50",
  remise: "0",
  mode: "",
};
export const initClient = {
  nom: "",
  tel: "",
  bp: "",
  nif: "",
  adresse: "NIAMEY/NIGER",
  email: "",
  contact: "",
  compte: "411",

  reglement: "",

  type: "",
  notes: "Informations spécifiques sur la relation client, ...",
};