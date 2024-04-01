import axios from 'axios';
import { notification } from 'antd';
import {
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_PENDING,
  FETCH_PRODUCT_SUCCESS,

  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_SUCCESS,

  DELETE_PRODUCT_BY_ID_ERROR,
  DELETE_PRODUCT_BY_ID_PENDING,
  DELETE_PRODUCT_BY_ID_SUCCESS,

  FETCH_PRODUCT_BY_ID_ERROR,
  FETCH_PRODUCT_BY_ID_PENDING,
  FETCH_PRODUCT_BY_ID_SUCCESS,

  UPDATE_PRODUCT_BY_ID_ERROR,
  UPDATE_PRODUCT_BY_ID_PENDING,
  UPDATE_PRODUCT_BY_ID_SUCCESS
} from '../constants/product.constant';

import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_SUCCESS
} from '../constants/category.constant';

const API_URL_PRODUCT = 'https://fakestoreapi.com/products';
const API_URL_CATEGORY = 'https://fakestoreapi.com/products/categories';

// Fetch API Product
export const fetchProductAction = () => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT);
      return dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCT_ERROR,
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
      let response = await axios.get(API_URL_PRODUCT + "/" + id);
      return dispatch({
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: FETCH_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Update Product by ID
export const updateProductByIdAction = (product, id) => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: UPDATE_PRODUCT_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
      }
      let response = await axios.put(API_URL_PRODUCT + "/" + id, product, { headers });

      notification.success({
        message: 'Success',
        description: 'Update Product Success',
      })

      await dispatch(fetchProductAction());

      return dispatch({
        type: UPDATE_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: UPDATE_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Delete Product by ID
export const deleteProductByIdAction = (id) => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: DELETE_PRODUCT_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
      }
      let response = await axios.delete(API_URL_PRODUCT + "/" + id, { headers });

      notification.success({
        message: 'Success',
        description: 'Delete Product Success',
      })

      await dispatch(fetchProductAction());

      return dispatch({
        type: DELETE_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: DELETE_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Create Product
export const createProductAction = (product) => {
  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: DELETE_PRODUCT_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
      }
      let response = await axios.post(API_URL_PRODUCT, product, { headers });

      notification.success({
        message: 'Success',
        description: 'Create Product Success',
      })

      await dispatch(fetchProductAction());

      return dispatch({
        type: DELETE_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: DELETE_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Fetch Category
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