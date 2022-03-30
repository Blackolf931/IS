import { ProductAction, ProductActionTypes, ProductState } from '../types/products/productType';

export interface InitProductState {
  products: ProductState[],
  isLoading: boolean;
  error: string;
}

const initialState: InitProductState = {
  products: [],
  isLoading: false,
  error: '',
};

const productReducer = (
  action: ProductAction,
  state = initialState,
) : InitProductState => {
  console.log(action);
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
export default productReducer;
