import { ADD_CATEGORIE, DELETE_CATEGORIE, UPDATE_CATEGORIE } from "./type";
import { v4 as uuid } from "uuid";
const initialState = {
  categories: [],
};

const reducer = (state = initialState.categories, action) => {
  if (localStorage.getItem("categories")) {
    state = JSON.parse(localStorage.getItem("categories"));
  }
  switch (action.type) {
    case ADD_CATEGORIE:
      let categories = [...state, { ...action.payload, uuid: uuid() }];
      localStorage.setItem("categories", JSON.stringify(categories));
      return categories;

    case DELETE_CATEGORIE:
      let filterCategories = state.filter(
        (categorie) => action.payload.uuid !== categorie.uuid
      );
      localStorage.setItem("categories", JSON.stringify(filterCategories));
      return filterCategories;

    case UPDATE_CATEGORIE:
      let updateCategorie = state.map((categorie) => {
        if (action.payload.uuid === categorie.uuid) {
          return action.payload;
        }
        return categorie;
      });
      localStorage.setItem("categories", JSON.stringify(updateCategorie));
      return updateCategorie;

    default:
      return state;
  }
};

export default reducer;
