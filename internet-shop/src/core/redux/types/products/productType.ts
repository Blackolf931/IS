export enum ProductActionTypes {
  GET_ALL = 'GET_ALL',
  GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',
  GET_BY_ID = 'GET_BY_ID',
}

export interface ProductState {
  productId: string;
  name: string;
  shortDescription: string;
  discount: number;
  price: number;
  priceWithDiscount: number;
}

interface ProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
}

interface ProductGetAllSuccessAction {
  type: ProductActionTypes.GET_ALL_SUCCESS;
  payload: ProductState[];
}

interface ProductGetByIdAction {
  type: ProductActionTypes.GET_BY_ID;
  payload: ProductState;
}

export type ProductAction = ProductGetAllAction | ProductGetAllSuccessAction | ProductGetByIdAction;
