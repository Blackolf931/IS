import { ProductState } from '../redux/types/products/productType';
import axiosInstance from '../../config/axios';
import PRODUCT_URL from '../constants/urlConstants';

export class ProductService {
  public static async GetAll(): Promise<ProductState[]> {
    const result = await axiosInstance.get<ProductState[]>(PRODUCT_URL)
      .then(({ data }) => data)
      .catch((error) => console.log(error));
    return result || [];
  }
}
