import { BasketState } from '../redux/types/basket/basketType';

export const defaultBasket: BasketState = {
  id: '',
  name: '',
  price: 0,
  priceWithDiscount: 0,
  countInStock: 0,
  countInBasket: 0,
};
