
import { ADD_TACHE, DELETE_TACHE, UPDATE_TACHE  } from "./type";
// tache
export const addTache = (tache) => {

  return {
    type: ADD_TACHE,
    payload: tache,
  };
};

export const deleteTache = (tache) => {

  return {
    type: DELETE_TACHE,
    payload: tache,
  };
};

export const updateTache = (tache) => {
  return {
    type: UPDATE_TACHE,
    payload: tache,
  };
};
