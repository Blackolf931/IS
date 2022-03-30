import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductsItemContainer from './styled/ProductsItemContainer';
import ProductsContainer from './styled/ProductsContainer';
// import ProductItem from './productItem/ProductItem';
// import useTypedSelector from '../../core/hooks/useTypeSelector';
// import productSelector from '../../core/redux/selectors/productSelector';
// import { ProductState } from '../../core/redux/types/products/productType';

// eslint-disable-next-line react/function-component-definition
const Products: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
//  const [products, setProducts] = useState<[]>([]);

  // const { products } = useTypedSelector(productSelector);

  useEffect(() => {
  }, []);

  return (
    <Grid>
      <Grid item>
        <ProductsContainer>
          <ProductsItemContainer>
            {/* eslint-disable-next-line max-len */}
            {/* {(products.length !== 0) && products.map((item: ProductState) => <ProductItem key={item.productId} product={null} />)} */}
          </ProductsItemContainer>
        </ProductsContainer>
      </Grid>
    </Grid>
  );
};

export default Products;
