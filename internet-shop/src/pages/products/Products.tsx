import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductsItemContainer from './styled/ProductsItemContainer';
import ProductsContainer from './styled/ProductsContainer';
import ProductItem from './productItem/ProductItem';

// eslint-disable-next-line react/function-component-definition
const Products: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
  }, []);

  return (
    <Grid>
      <Grid item>
        <ProductsContainer>
          <ProductsItemContainer>
            {/* eslint-disable-next-line max-len */}
            {(products.length !== 0) && products.map((item) => <ProductItem key={item} product={null} />)}
          </ProductsItemContainer>
        </ProductsContainer>
      </Grid>
    </Grid>
  );
};

export default Products;
