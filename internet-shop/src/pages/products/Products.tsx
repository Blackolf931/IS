import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsContainer from './styled/ProductsContainer';
import ProductItem from './productItem/ProductItem';
import { getProducts } from '../../core/redux/thunk/getProducts';
import useTypedSelector from '../../core/hooks/useTypeSelector';
import productSelector from '../../core/redux/selectors/productSelector';

const Products: React.FC = () => {
  const { products } = useTypedSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <ProductsContainer>
      {products.length !== 0 &&
        products.map((item) => <ProductItem key={item.id} product={item} />)}
    </ProductsContainer>
  );
};

export default Products;
