import { ProductState } from '../redux/types/products/productType';

export const defaultProduct: ProductState = {
  id: 0,
  name: '',
  shortDescription: '',
  discount: 0,
  price: 0,
  priceWithDiscount: 0,
  quantityInStock: 0,
  description: '',
};
