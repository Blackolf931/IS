import React from 'react';
import { Typography } from '@mui/material';
import ProductItemContainer from './styled/ProductItemContainer';
import ProductHeaderContainer from './styled/ProductHeaderContainer';
import ProductDescriptionContainer from './styled/ProductDescriptionContainer';
import { ProductState } from '../../../core/redux/types/products/productType';
import defaultImage from '../../../static/defaultImages/ImageNotFound.png';
import { ProductDetails } from './styled/ColumContainer';

interface Props {
  product: ProductState;
}

const ProductItem: React.FC<Props> = ({ product }) => (
  <ProductItemContainer>
    <ProductHeaderContainer>{product.name}</ProductHeaderContainer>
    <ProductDetails>
      <img src={defaultImage} alt="defaultImage" />
      <ProductDescriptionContainer>
        <Typography>{product.shortDescription}</Typography>
      </ProductDescriptionContainer>
    </ProductDetails>
  </ProductItemContainer>
);

export default ProductItem;
