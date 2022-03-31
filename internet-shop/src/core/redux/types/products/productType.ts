export enum ProductActionTypes {
  GET_ALL = 'GET_ALL',
  GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',
}

export interface ProductState {
  productId: string,
  name: string,
  description: string,
  quantityInStock: number,
  categoryId: number,
  providerCountryId: null,
  shortDescription: string,
}

interface ProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
}

interface ProductGetAllSuccessAction {
  type: ProductActionTypes.GET_ALL_SUCCESS;
  payload: ProductState[]
}

export type ProductAction = ProductGetAllAction | ProductGetAllSuccessAction;
