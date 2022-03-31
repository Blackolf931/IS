import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import ProductsContainer from './styled/ProductsContainer';
import ProductItem from './productItem/ProductItem';
import { getProducts } from '../../core/redux/thunk/getProducts';
import useTypedSelector from '../../core/hooks/useTypeSelector';
import productSelector from '../../core/redux/selectors/productSelector';

// eslint-disable-next-line react/function-component-definition
const Products: React.FC = () => {
  const { products } = useTypedSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (

    <Grid item>
      <ProductsContainer>
        {(products.length !== 0)
                && products.map((item) => <ProductItem key={item.productId} product={item} />)}
      </ProductsContainer>
    </Grid>

  );
};

export default Products;
