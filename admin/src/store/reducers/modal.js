import {
  CLOSE_MODAL_UPDATE_PRODUCT,
  OPEN_MODAL_UPDATE_PRODUCT,

  CLOSE_MODAL_DELETE_PRODUCT,
  OPEN_MODAL_DELETE_PRODUCT,

  HANDLE_CHANGE_CATEGORY_PRODUCT,
  HANDLE_CHANGE_DESC_PRODUCT,
  HANDLE_CHANGE_IMAGE_PRODUCT,
  HANDLE_CHANGE_PRICE_PRODUCT,
  HANDLE_CHANGE_TITLE_PRODUCT,

  UPDATE_PRODUCT_BY_ID_ERROR,
  UPDATE_PRODUCT_BY_ID_PENDING,
  UPDATE_PRODUCT_BY_ID_SUCCESS,

  DELETE_PRODUCT_BY_ID_ERROR,
  DELETE_PRODUCT_BY_ID_PENDING,
  DELETE_PRODUCT_BY_ID_SUCCESS
} from '../constants/product.constant';

const initState = {

  modalUpdateProduct: {
    open: false,
    id: '',
    title: '',
    description: '',
    image: '',
    price: 0,
    category: '',
    rating: {
      rate: 0,
      count: 0
    }
  },

  modalDeleteProduct: {
    open: false,
    id: ''
  }

}

const modalReducer = (state = initState, action) => {
  switch (action.type) {

    // Show / Hide Modal Update Product
    case OPEN_MODAL_UPDATE_PRODUCT:
      state.modalUpdateProduct.open = true;

      // Show info
      state.modalUpdateProduct.id = action.payload.id;
      state.modalUpdateProduct.title = action.payload.title;
      state.modalUpdateProduct.description = action.payload.description;
      state.modalUpdateProduct.image = action.payload.image;
      state.modalUpdateProduct.price = action.payload.price;
      state.modalUpdateProduct.category = action.payload.category;
      state.modalUpdateProduct.rating.rate = action.payload.rating.rate;
      state.modalUpdateProduct.rating.count = action.payload.rating.count;
      break;

    case CLOSE_MODAL_UPDATE_PRODUCT:
      state.modalUpdateProduct.open = false;

      // Show info
      state.modalUpdateProduct.id = '';
      state.modalUpdateProduct.title = '';
      state.modalUpdateProduct.description = '';
      state.modalUpdateProduct.image = '';
      state.modalUpdateProduct.price = '';
      state.modalUpdateProduct.category = '';
      state.modalUpdateProduct.rating.rate = '';
      state.modalUpdateProduct.rating.count = '';
      break;

    case HANDLE_CHANGE_TITLE_PRODUCT:
      state.modalUpdateProduct.title = action.payload;
      break;
    case HANDLE_CHANGE_DESC_PRODUCT:
      state.modalUpdateProduct.description = action.payload;
      break;
    case HANDLE_CHANGE_PRICE_PRODUCT:
      state.modalUpdateProduct.price = action.payload;
      break;
    case HANDLE_CHANGE_IMAGE_PRODUCT:
      state.modalUpdateProduct.image = action.payload;
      break;
    case HANDLE_CHANGE_CATEGORY_PRODUCT:
      state.modalUpdateProduct.category = action.payload;
      break;

    // Update Product
    case UPDATE_PRODUCT_BY_ID_PENDING:
    case UPDATE_PRODUCT_BY_ID_ERROR:
      break;
    case UPDATE_PRODUCT_BY_ID_SUCCESS:
      state.modalUpdateProduct.open = false;
      break;

    case OPEN_MODAL_DELETE_PRODUCT:
      state.modalDeleteProduct.open = true;
      state.modalDeleteProduct.id = action.payload.id;
      break;
    case CLOSE_MODAL_DELETE_PRODUCT:
      state.modalDeleteProduct.open = false;
      state.modalDeleteProduct.id = '';
      break;

    case DELETE_PRODUCT_BY_ID_ERROR:
    case DELETE_PRODUCT_BY_ID_PENDING:
      break;
    case DELETE_PRODUCT_BY_ID_SUCCESS:
      state.modalDeleteProduct.open = false;
      break;

    default:
      break;
  }

  return { ...state };
}

export default modalReducer;