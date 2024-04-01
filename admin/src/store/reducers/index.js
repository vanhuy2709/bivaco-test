import { combineReducers } from "redux";

import productReducer from "./product";
import categoryReducer from "./category";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  modalReducer
})

export default rootReducer;