import * as types from '../types';

export const addStore = payload => ({
  type: types.ADD_STORE,
  payload
});

export const removeStore = payload => ({
  type: types.REMOVE_STORE,
  payload
});

export const editStore = payload => ({
  type: types.EDIT_STORE,
  payload
});

export const addProduct = payload => ({
  type: types.ADD_PRODUCT,
  payload
});

export const removeProduct = payload => ({
  type: types.REMOVE_PRODUCT,
  payload
});

export const editProduct = payload => ({
  type: types.EDIT_PRODUCT,
  payload
});
