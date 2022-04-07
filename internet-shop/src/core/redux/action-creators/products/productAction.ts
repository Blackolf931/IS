import { ProductAction, ProductActionTypes, ProductState } from '../../types/products/productType';

export const getAllProduct = (): ProductAction => ({
  type: ProductActionTypes.GET_ALL,
});

export const productGetAllSuccess = (products: ProductState[]): ProductAction => ({
  type: ProductActionTypes.GET_ALL_SUCCESS,
  payload: products,
});

export const getProductByIdSuccess = (product: ProductState): ProductAction => ({
  type: ProductActionTypes.GET_BY_ID,
  payload: product,
});
