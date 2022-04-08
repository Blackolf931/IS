import { ProductAction, ProductActionTypes, ProductState } from '../types/products/productType';
import { defaultProduct } from '../../interfaces/ProductDefault';

export interface InitProductState {
  products: ProductState[];
  product: ProductState;
  isLoading: boolean;
}

const initialState: InitProductState = {
  products: [],
  product: defaultProduct,
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
    case ProductActionTypes.GET_BY_ID:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};
