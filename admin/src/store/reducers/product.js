import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_SUCCESS
} from '../constants/product.constant';

const initState = {

  listProduct: {
    pending: false,
    productList: null,
    isError: false,
  },

}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_PENDING:
      state.listProduct.pending = true;
      break;
    case FETCH_PRODUCT_ERROR:
      state.listProduct.pending = false;
      state.listProduct.isError = true;
      break;
    case FETCH_PRODUCT_SUCCESS:
      state.listProduct.pending = false;
      state.listProduct.isError = false;
      state.listProduct.productList = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default productReducer;