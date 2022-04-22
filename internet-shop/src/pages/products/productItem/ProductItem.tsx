import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import ProductItemContainer from './styled/ProductItemContainer';
import ProductHeaderContainer from './styled/ProductHeaderContainer';
import { ProductState } from '../../../core/redux/types/products/productType';
import { ButtonsContainers } from './styled/ButtonsContainers';
import { FavoriteOutlinedIconContainers } from './styled/FavoriteOutlinedIconContainer';
import { FavoriteBorderOutlinedIconContainers } from './styled/FavoriteBorderOutlinedIconContainer';
import ProductDescriptionContainer from './styled/ProductDescriptionContainer';
import { ImageContainer } from './styled/ImageContainer';
import { PriceContainer } from './styled/PriceContainer';
import { PriceWithDiscount } from '../../../core/components/price/PriceWithDiscount';
import { ProductFooter } from './styled/ProductFooter';
import { TypographyContainer } from './styled/TypographyContainer';

interface Props {
  product: ProductState;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  const [productInFavorite, setProductInFavorite] = useState(false);

  const addToBasket = () => {
    const items = JSON.parse(localStorage.getItem('basket') || '[]');
    // localStorage.setItem('basket', JSON.stringify([...items, { count: 1, productId: product.id }]));
    localStorage.setItem('basket', JSON.stringify([...items, product]));
  };

  const setProductFavorite = () => {
    if (productInFavorite) {
      setProductInFavorite(false);
    } else {
      setProductInFavorite(true);
    }
  };

  return (
    <ProductItemContainer>
      <ImageContainer
        src="data:image/jpeg;base64,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"
        alt="defaultImage"
      />
      <ProductDescriptionContainer>
        <ProductHeaderContainer> {product.name} </ProductHeaderContainer>
        <Typography>{product.shortDescription}</Typography>
        <ProductFooter>
          <PriceContainer>
            <TypographyContainer>Price</TypographyContainer>
            {product.discount > 0 ? (
              <PriceWithDiscount
                price={product.price}
                priceWithDiscount={product.priceWithDiscount}
              />
            ) : (
              <TypographyContainer variant="h5">{product.price}</TypographyContainer>
            )}
          </PriceContainer>
          <ButtonsContainers>
            <Button style={{ textTransform: 'none' }} onClick={addToBasket}>
              Add to cart
            </Button>
            {productInFavorite ? (
              <FavoriteOutlinedIconContainers onClick={setProductFavorite} />
            ) : (
              <FavoriteBorderOutlinedIconContainers onClick={setProductFavorite} />
            )}
          </ButtonsContainers>
        </ProductFooter>
      </ProductDescriptionContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
