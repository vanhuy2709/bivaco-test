import { combineReducers } from "redux";

import productReducer from "./product";
import categoryReducer from "./category";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  cartReducer
})

export default rootReducer;