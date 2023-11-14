import { ADD_TACHE, DELETE_TACHE, UPDATE_TACHE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  taches: [],
};

const reducer = (state = initialState.taches, action) => {
  if (localStorage.getItem("taches")) {
    state = JSON.parse(localStorage.getItem("taches"));
  }
  switch (action.type) {
    case ADD_TACHE:
      let taches = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("taches", JSON.stringify(taches));
      return taches;

    case DELETE_TACHE:
      let filterTaches = state.filter(
        (tache) => action.payload.uuid !== tache.uuid
      );
      localStorage.setItem("taches", JSON.stringify(filterTaches));
      return filterTaches;

    case UPDATE_TACHE:
      let updateTache = state.map((tache) => {
        if (action.payload.uuid === tache.uuid) {
          return action.payload;
        }
        return tache;
      });
      localStorage.setItem("taches", JSON.stringify(updateTache));
      return updateTache;

    default:
      return state;
  }
};

export default reducer;
