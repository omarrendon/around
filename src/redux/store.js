import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import addFavoritesReducers from "./reducers/addFavoriteReducers";
import fetchDataReducers from "./reducers/fetchDataReducers";

const reducers = combineReducers({
  currencies: fetchDataReducers,
  favorites: addFavoritesReducers
});

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);