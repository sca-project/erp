import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import dossierReducer from "./dossier/reducer";
import clientReducer from "./client/reducer";

const rootReducer = combineReducers({
    dossiers: dossierReducer,
    clients:clientReducer, 
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;