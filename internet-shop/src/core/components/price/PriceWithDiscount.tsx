import React from 'react';
import { Typography } from '@mui/material';
import { OriginalPrice, PriceWithDiscountContainer, DiscountPrice } from './styled';

interface Props {
  price: number;
  priceWithDiscount: number;
  discount: number;
  currency: string;
}

export const PriceWithDiscount: React.FC<Props> = ({
  price,
  priceWithDiscount,
  discount,
  currency,
}) => (
  <PriceWithDiscountContainer>
    {discount > 0 ? (
      <>
        <OriginalPrice variant="h6">{price}</OriginalPrice>
        <DiscountPrice variant="h5">{priceWithDiscount}</DiscountPrice>
      </>
    ) : (
      <Typography variant="h6">{price}</Typography>
    )}
    <Typography variant="h6">{currency}</Typography>
  </PriceWithDiscountContainer>
);
