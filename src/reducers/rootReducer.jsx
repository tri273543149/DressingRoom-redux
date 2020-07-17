import { combineReducers } from "redux";
import productsReducer from "./productReducer";
import categoriesRuducer from "./categoriesReducer";
import chosenCategoryReducer from "./chosenCategoryReducer";
import modelReducer from "./modelReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesRuducer,
  chosenCategory: chosenCategoryReducer,
  model: modelReducer,
});

export default rootReducer;
