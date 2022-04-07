import { Dispatch } from 'redux';
import { ProductAction, ProductState } from '../types/products/productType';
import { ProductService } from '../../services/productService';
import {
  getProductByIdSuccess,
  productGetAllSuccess,
} from '../action-creators/products/productAction';

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

export const getProductById =
  (id: number) =>
  async (dispatch: Dispatch<ProductAction>): Promise<void> => {
    try {
      const product = await ProductService.GetById(id);
      dispatch(getProductByIdSuccess(product as ProductState));
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.log(errorMessage);
    }
  };
