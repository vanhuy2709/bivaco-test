import axios from 'axios';
import { notification } from 'antd';

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
} from '../constants/product.constant';

import {
  // Fetch list Category
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_SUCCESS,

  // Fetch Product in Category
  FETCH_PRODUCT_IN_CATEGORY_ERROR,
  FETCH_PRODUCT_IN_CATEGORY_PENDING,
  FETCH_PRODUCT_IN_CATEGORY_SUCCESS,
} from '../constants/category.constant';

import {
  FETCH_USER_LOGIN_ERROR,
  FETCH_USER_LOGIN_PENDING,
  FETCH_USER_LOGIN_SUCCESS,

  FETCH_USER_REGISTER_ERROR,
  FETCH_USER_REGISTER_PENDING,
  FETCH_USER_REGISTER_SUCCESS
} from '../constants/auth.constant';

import {
  FETCH_CART_ERROR,
  FETCH_CART_PENDING,
  FETCH_CART_SUCCESS
} from '../constants/cart.constant';

const API_URL_PRODUCT = 'https://fakestoreapi.com/products';
const API_URL_CATEGORY = 'https://fakestoreapi.com/products/categories';
const API_URL_AUTH = 'https://66064900d92166b2e3c3877a.mockapi.io/register';
const API_URL_CART = 'https://fakestoreapi.com/carts';

// Fetch Product Featured
export const fetchProductFeaturedAction = () => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_FEATURE_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT + '?limit=8');

      return dispatch({
        type: FETCH_PRODUCT_FEATURE_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCT_FEATURE_ERROR,
        error
      })
    }
  }
}

// Fetch Product in Shop Page
export const fetchProductAction = (category, sortValue) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_PENDING
      })

      // Success
      if (category) {
        let response = await axios.get(API_URL_PRODUCT + '/category/' + category + "?sort=" + sortValue);

        return dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: response.data
        })
      } else {
        let response = await axios.get(API_URL_PRODUCT + "?sort=" + sortValue);

        return dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          payload: response.data
        })
      }
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCT_ERROR,
        error
      })
    }
  }

}

// Fetch List Category
export const fetchCategoryAction = () => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_CATEGORY_PENDING
      })

      // Success
      let response = await axios.get(API_URL_CATEGORY);

      return dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: FETCH_CATEGORY_ERROR,
        error
      })
    }
  }

}

// Fetch Product by ID
export const fetchProductByIdAction = (id) => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_BY_ID_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT + '/' + id);

      return dispatch({
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      // Error
      return dispatch({
        type: FETCH_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Fetch Product in Category
export const fetchProductInCategoryAction = (categoryValue) => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_IN_CATEGORY_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT + '/category/' + categoryValue);

      return dispatch({
        type: FETCH_PRODUCT_IN_CATEGORY_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      // Error
      return dispatch({
        type: FETCH_PRODUCT_IN_CATEGORY_ERROR,
        error
      })
    }
  }
}

// Register User
export const registerUserAction = (user, navigate) => {
  return async (dispatch) => {
    try {
      // Pending
      await dispatch({
        type: FETCH_USER_REGISTER_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json'
      }
      let response = await axios.post(API_URL_AUTH, user, { headers });
      notification.success({
        message: 'Register Success'
      })
      navigate('/login');

      return dispatch({
        type: FETCH_USER_REGISTER_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      return dispatch({
        type: FETCH_USER_REGISTER_ERROR,
        error
      })
    }
  }
}

// Login User
export const loginUserAction = (user, navigate) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: FETCH_USER_LOGIN_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json'
      }
      let response = await axios.get(API_URL_AUTH, user, { headers });

      const listUser = response.data;

      listUser.forEach(userExist => {
        if (userExist.name === user.name && userExist.password === user.password) {
          notification.success({
            message: 'Success',
            description: 'Login Successfully'
          })

          // Navigate to HomePage
          navigate('/');

          sessionStorage.setItem('user', JSON.stringify(userExist));

          return dispatch({
            type: FETCH_USER_LOGIN_SUCCESS,
            payload: response.data
          })
        }
      })

    } catch (error) {
      // Error
      notification.error({
        message: 'Error',
        description: JSON.stringify(error.message)
      })

      return dispatch({
        type: FETCH_USER_LOGIN_ERROR,
        error
      })
    }
  }
}

// Add new Cart
export const fetchAddNewCartAction = (order, navigate) => {
  return async (dispatch) => {
    try {
      // Pending
      await dispatch({
        type: FETCH_CART_PENDING
      })

      // Success
      // const headers = {
      //   'Content-Type': 'application/json'
      // }
      let response = await axios.post(API_URL_CART, order);

      notification.success({
        message: 'Create Order success'
      })

      localStorage.removeItem('listCart');

      navigate('/cart/success');

      window.location.reload();

      return dispatch({
        type: FETCH_CART_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      return dispatch({
        type: FETCH_CART_ERROR,
        error
      })
    }
  }
}
