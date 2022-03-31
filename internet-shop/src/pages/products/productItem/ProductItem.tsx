import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItemContainer from './styled/ProductItemContainer';
import ProductHeaderContainer from './styled/ProductHeaderContainer';
import ProductDescriptionContainer from './styled/ProductdescriptionContainer';
import { ProductState } from '../../../core/redux/types/products/productType';

interface Props {
  product: ProductState;
}

// eslint-disable-next-line react/function-component-definition
const ProductItem: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const routeChange = (id: number) => {
    const path = `/questionSetDescription/${id}`;
    navigate(path);
  };
  console.log(routeChange(5));
  return (
    <ProductItemContainer key={product.productId}>
      <ProductHeaderContainer key={product.productId}>{product.name}</ProductHeaderContainer>
      <ProductDescriptionContainer key={product.productId}>
        {product.description}
      </ProductDescriptionContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
