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
} from '../constants/product.constant';

export const handleOpenModalUpdateProduct = (product) => {
  return {
    type: OPEN_MODAL_UPDATE_PRODUCT,
    payload: product
  }
}

export const handleCloseModalUpdateProduct = () => {
  return {
    type: CLOSE_MODAL_UPDATE_PRODUCT,
  }
}

export const handleOpenModalDeleteProduct = (id) => {
  return {
    type: OPEN_MODAL_DELETE_PRODUCT,
    payload: id
  }
}

export const handleCloseModalDeleteProduct = () => {
  return {
    type: CLOSE_MODAL_DELETE_PRODUCT,
  }
}



// Handle Change info Product (Update)
export const handleChangeTitleProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_TITLE_PRODUCT,
    payload: value
  }
}
export const handleChangeDescProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_DESC_PRODUCT,
    payload: value
  }
}
export const handleChangeImageProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_IMAGE_PRODUCT,
    payload: value
  }
}
export const handleChangePriceProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_PRICE_PRODUCT,
    payload: value
  }
}
export const handleChangeCategoryProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_CATEGORY_PRODUCT,
    payload: value
  }
}