import { ProductState } from '../redux/types/products/productType';
import axiosInstance from '../../config/axios';
import PRODUCT_URL from '../constants/urlConstants';

class ProductService {
  public static async GetAll(): Promise<ProductState[]> {
    const result = await axiosInstance.get<ProductState[]>(PRODUCT_URL)
      .then((data) => data.data)
      .catch(({ response }) => console.log(response.data));
    return result || [];
  }
}
export default ProductService;
