import { HANDLE_CHECKED_CATEGORY } from '../constants/category.constant';
import { HANDLE_SORT_ID_PRODUCT } from '../constants/product.constant';

// Handle Check Category
export const handleCheckCategories = (category) => {
  // const isChecked = listCheckedCategory.includes(category);

  // if (isChecked) {
  //   // Uncheck
  //   return {
  //     type: HANDLE_CHECKED_CATEGORY,
  //     payload: listCheckedCategory.filter(item => item !== category)
  //   }
  // } else {
  //   return {
  //     type: HANDLE_CHECKED_CATEGORY,
  //     payload: [...listCheckedCategory, category]
  //   }
  // }

  return {
    type: HANDLE_CHECKED_CATEGORY,
    payload: category
  }
}

// Handle Sort ID Product
export const handleSortIdProductAction = (sortValue) => {
  return {
    type: HANDLE_SORT_ID_PRODUCT,
    payload: sortValue
  }
}