
import { ADD_CATEGORIE, DELETE_CATEGORIE, UPDATE_CATEGORIE  } from "./type";
// categorie
export const addCategorie = (categorie) => {

  return {
    type: ADD_CATEGORIE,
    payload: categorie,
  };
};

export const deleteCategorie = (categorie) => {

  return {
    type: DELETE_CATEGORIE,
    payload: categorie,
  };
};

export const updateCategorie = (categorie) => {
  return {
    type: UPDATE_CATEGORIE,
    payload: categorie,
  };
};
