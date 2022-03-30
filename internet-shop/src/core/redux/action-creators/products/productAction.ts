import { ProductAction, ProductActionTypes, ProductState } from '../../types/products/productType';

// eslint-disable-next-line import/prefer-default-export
export const getAllProduct = () : ProductAction => ({
  type: ProductActionTypes.GET_ALL,
});

export const productGetAllSuccess = (products: ProductState[]) : ProductAction => ({
  type: ProductActionTypes.GET_ALL_SUCCESS,
  payload: products,
});
