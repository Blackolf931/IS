import { ProductAction, ProductActionTypes, ProductState } from '../types/products/productType';

export interface InitProductState {
  products: ProductState[];
  isLoading: boolean;
}

const initialState: InitProductState = {
  products: [],
  isLoading: false,
};

export const productReducer = (state = initialState, action: ProductAction): InitProductState => {
  switch (action.type) {
    case ProductActionTypes.GET_ALL:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActionTypes.GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};
