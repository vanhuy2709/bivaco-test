import {
  // Fetch Product Featured
  FETCH_PRODUCT_FEATURE_ERROR,
  FETCH_PRODUCT_FEATURE_PENDING,
  FETCH_PRODUCT_FEATURE_SUCCESS,

  // Fetch Product in Shop Page
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_SUCCESS,

  // Fetch Product by ID
  FETCH_PRODUCT_BY_ID_ERROR,
  FETCH_PRODUCT_BY_ID_PENDING,
  FETCH_PRODUCT_BY_ID_SUCCESS,

  // Sort ID Product
  HANDLE_SORT_ID_PRODUCT,

  // Handle Change Quantity Product by ID
  HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID,
} from '../constants/product.constant';

import {
  FETCH_PRODUCT_IN_CATEGORY_ERROR,
  FETCH_PRODUCT_IN_CATEGORY_PENDING,
  FETCH_PRODUCT_IN_CATEGORY_SUCCESS
} from '../constants/category.constant';

const initState = {

  // Product Featured
  productFeatured: {
    pending: false,
    listProductFeatured: null,
    isError: false
  },

  // Product in Shop Page
  product: {
    pending: false,
    listProduct: null,
    isError: false
  },

  // Product by ID
  productById: {
    pending: false,
    product: null,
    isError: false,
  },

  // Product by Category
  productByCategory: {
    pending: false,
    listProductByCategory: null,
    isError: false,
  },

  // Sort ID
  sortId: {
    sortValue: ''
  },
}

const productReducer = (state = initState, action) => {

  switch (action.type) {

    // Fetch data product featured
    case FETCH_PRODUCT_FEATURE_PENDING:
      state.productFeatured.pending = true;
      break;
    case FETCH_PRODUCT_FEATURE_ERROR:
      state.productFeatured.pending = false;
      state.productFeatured.isError = true;
      break;
    case FETCH_PRODUCT_FEATURE_SUCCESS:
      state.productFeatured.pending = false;
      state.productFeatured.isError = false;
      state.productFeatured.listProductFeatured = action.payload;
      break;

    // Fetch data product in shop page
    case FETCH_PRODUCT_PENDING:
      state.product.pending = true;
      break;
    case FETCH_PRODUCT_ERROR:
      state.product.pending = false;
      state.product.isError = true;
      break;
    case FETCH_PRODUCT_SUCCESS:
      state.product.pending = false;
      state.product.isError = false;
      state.product.listProduct = action.payload;
      break;

    // Fetch Product by ID
    case FETCH_PRODUCT_BY_ID_PENDING:
      state.productById.pending = true;
      break;
    case FETCH_PRODUCT_BY_ID_ERROR:
      state.productById.pending = false;
      state.productById.isError = true;
      break;
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      state.productById.pending = false;
      state.productById.isError = false;
      state.productById.product = { ...action.payload, quantity: 1 };
      break;

    // Fetch Product by Category
    case FETCH_PRODUCT_IN_CATEGORY_PENDING:
      state.productByCategory.pending = true;
      break;
    case FETCH_PRODUCT_IN_CATEGORY_ERROR:
      state.productByCategory.pending = false;
      state.productByCategory.isError = true;
      break;
    case FETCH_PRODUCT_IN_CATEGORY_SUCCESS:
      state.productByCategory.pending = false;
      state.productByCategory.isError = false;
      state.productByCategory.listProductByCategory = action.payload;
      break;


    // Sort ID Product
    case HANDLE_SORT_ID_PRODUCT:
      state.sortId.sortValue = action.payload;
      break;

    // Handle Change Quantity Product by ID
    case HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID:
      state.productById.product.quantity += 1;
      break;
    case HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID:
      if (state.productById.product.quantity > 1) {
        state.productById.product.quantity -= 1;
      } else {
        state.productById.product.quantity = 1;
      }
      break;

    default:
      break;
  }

  return { ...state };
}

export default productReducer;