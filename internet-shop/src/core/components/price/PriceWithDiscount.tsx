import React from 'react';
import { PriceContainers } from './styled/PriceContainer';
import { PriceWithDiscountContainer } from './styled/PriceWithDiscountContainer';
import { EmptyContainer } from '../emptyContainer/EmptyContainer';

interface Props {
  price: number;
  priceWithDiscount: number;
}

export const PriceWithDiscount: React.FC<Props> = ({ price, priceWithDiscount }) => (
  <EmptyContainer>
    <PriceContainers variant="h6">{price}</PriceContainers>{' '}
    <PriceWithDiscountContainer variant="h5">{priceWithDiscount}</PriceWithDiscountContainer>
  </EmptyContainer>
);
