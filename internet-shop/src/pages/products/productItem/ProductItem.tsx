import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItemContainer from './styled/ProductItemContainer';
import ProductHeaderContainer from './styled/ProductHeaderContainer';
import ProductDescriptionContainer from './styled/ProductdescriptionContainer';

interface Props {
  product: null;
}

// eslint-disable-next-line react/function-component-definition
const ProductItem: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const routeChange = (id: number) => {
    const path = `/questionSetDescription/${id}`;
    navigate(path);
  };
  return (
    <ProductItemContainer onClick={() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      routeChange(product);
    }}
    >
      <ProductHeaderContainer>{product}</ProductHeaderContainer>
      <ProductDescriptionContainer>
        {product}
      </ProductDescriptionContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
