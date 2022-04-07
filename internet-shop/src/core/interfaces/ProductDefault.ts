import { ProductState } from '../redux/types/products/productType';

export interface DefaultProduct {
  productId: number | null;
  name: string | null;
  shortDescription: string | null;
  discount: number | null;
  price: number | null;
  priceWithDiscount: number | null;
}
export const defaultProduct: ProductState = {
  productId: '',
  name: '',
  shortDescription: '',
  discount: 0,
  price: 0,
  priceWithDiscount: 0,
};
