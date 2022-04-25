import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { BasketState } from '../../core/redux/types/basket/basketType';
import { ProductImageContainer } from './styled/ProductImageContainer';
import { BasketGridItemContainer } from './styled/BasketGridItemContainer';

const Basket: React.FC = () => {
  const [basket, setBasket] = useState<BasketState[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('basket') || '[]');
    if (basket) {
      setBasket(items);
    }
  }, []);

  return (
    <Grid>
      {basket.map((item) => (
        <BasketGridItemContainer>
          <ProductImageContainer
            alt="default"
            src="https://icon-library.com/images/50x50-icon/50x50-icon-0.jpg"
          />
          {item.name}
          {10}
          {item.price}
          {item.priceWithDiscount}
          total price: {15000}
        </BasketGridItemContainer>
      ))}

      {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
      {/*  <TableBody> */}
      {/*    {basket.map((item) => ( */}
      {/*      <TableRow */}
      {/*        key={Number(item.id)} */}
      {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }} */}
      {/*      > */}
      {/*        <TableCell component="th" scope="row"> */}
      {/*          {item.name} */}
      {/*        </TableCell> */}
      {/*        <TableCell align="right">{10}</TableCell> */}
      {/*        <TableCell align="right">{item.price}</TableCell> */}
      {/*        <TableCell align="right">{item.priceWithDiscount}</TableCell> */}
      {/*        <TableCell align="right">total price: {15000}</TableCell> */}
      {/*      </TableRow> */}
      {/*    ))} */}
      {/*  </TableBody> */}
      {/* </Table> */}
    </Grid>
  );
};

export default Basket;
