import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_SUCCESS
} from '../constants/category.constant';

const initState = {

  listCategory: {
    pending: false,
    categoryList: null,
    isError: false,
  },

}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PENDING:
      state.listCategory.pending = true;
      break;
    case FETCH_CATEGORY_ERROR:
      state.listCategory.pending = false;
      state.listCategory.isError = true;
      break;
    case FETCH_CATEGORY_SUCCESS:
      state.listCategory.pending = false;
      state.listCategory.isError = false;
      state.listCategory.categoryList = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default categoryReducer;