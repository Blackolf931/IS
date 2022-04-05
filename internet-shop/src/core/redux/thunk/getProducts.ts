import { Dispatch } from 'redux';
import { ProductAction } from '../types/products/productType';
import { ProductService } from '../../services/productService';
import { productGetAllSuccess } from '../action-creators/products/productAction';

export const getProducts =
  () =>
  async (dispatch: Dispatch<ProductAction>): Promise<void> => {
    try {
      const products = await ProductService.GetAll();
      dispatch(productGetAllSuccess(products));
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
    }
  };
