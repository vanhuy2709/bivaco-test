import {
  HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART,
  HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART
} from '../constants/cart.constant';

import {
  HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID
} from '../constants/product.constant';

// Handle Increase Quantity Product by ID
export const handleIncreaseQuantityProductById = () => {

  return {
    type: HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID
  }
}

// Handle Decrease Quantity Product by ID
export const handleDecreaseQuantityProductById = () => {

  return {
    type: HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID
  }
}

// Handle Increase Quantity Product in Cart
export const handleIncreaseQuantityProductInCart = (product) => {

  return {
    type: HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART,
    payload: product
  }
}

// Handle Decrease Quantity Product in Cart
export const handleDecreaseQuantityProductInCart = (product) => {

  return {
    type: HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART,
    payload: product
  }
}