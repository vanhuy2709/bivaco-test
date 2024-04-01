import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_SUCCESS,

  HANDLE_CHECKED_CATEGORY
} from '../constants/category.constant';

const initState = {

  // List Category
  category: {
    pending: false,
    listCategory: null,
    isError: false
  },

  // Filter Category
  filterCategory: {
    categoryListChecked: null
  },
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch list Category
    case FETCH_CATEGORY_PENDING:
      state.category.pending = true;
      break;
    case FETCH_CATEGORY_ERROR:
      state.category.pending = false;
      state.category.isError = true;
      break;
    case FETCH_CATEGORY_SUCCESS:
      state.category.pending = false;
      state.category.isError = false;
      state.category.listCategory = action.payload;
      break;

    // Filter Category
    case HANDLE_CHECKED_CATEGORY:
      state.filterCategory.categoryListChecked = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default categoryReducer;