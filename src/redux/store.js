import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import clientReducer from "./client/reducer";
import utilisateurReducer from "./utilisateur/reducer";
import categorieReducer from "./categorie/reducer";
import tacheReducer from "./tache/reducer";
import operationReducer from "./operation/reducer";


const rootReducer = combineReducers({
  
    clients:clientReducer, 
   
    utilisateurs:utilisateurReducer, 
    categories:categorieReducer,
    taches:tacheReducer,
    operations:operationReducer,
    
  });
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export default store;