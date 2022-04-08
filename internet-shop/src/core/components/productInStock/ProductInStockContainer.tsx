import React from 'react';
import { EmptyContainer } from '../emptyContainer/EmptyContainer';
import { GreenCircleIconContainer } from './styled/GreenCircleIconContainer';
import { RedCircleIconContainer } from './styled/RedCircleIconContainer';
import { TitleInStockContainer } from './styled/TitleInStockContainer';

interface Props {
  countProductInStock: number;
}

export const ProductInStockContainer: React.FC<Props> = ({ countProductInStock }) => (
  <EmptyContainer>
    {countProductInStock > 0 ? (
      <>
        <GreenCircleIconContainer />
        <TitleInStockContainer />
      </>
    ) : (
      <>
        <RedCircleIconContainer />
        <TitleInStockContainer />
      </>
    )}
  </EmptyContainer>
);
