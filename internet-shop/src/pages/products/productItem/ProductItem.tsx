import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ProductItemContainer from './styled/ProductItemContainer';
import ProductHeaderContainer from './styled/ProductHeaderContainer';
import ProductDescriptionContainer from './styled/ProductdescriptionContainer';
import { ProductState } from '../../../core/redux/types/products/productType';
import defaultImage from '../../../static/defaultImages/ImageNotFound.png';

const Test = styled('div')`
  display: flex;
  justify-content: left;
  
`;

interface Props {
  product: ProductState;
}

// eslint-disable-next-line react/function-component-definition
const ProductItem: React.FC<Props> = ({ product }) => {
  const test = 1;
  console.log(test);

  return (
    <ProductItemContainer>
      <ProductHeaderContainer>{product.name}</ProductHeaderContainer>

      {/* eslint-disable-next-line react/style-prop-object */}
      <Test>

        <img src={defaultImage} alt="defaultImage" />
        <ProductDescriptionContainer>
          <Typography>{product.shortDescription}</Typography>
        </ProductDescriptionContainer>
      </Test>

    </ProductItemContainer>
  );
};

export default ProductItem;
