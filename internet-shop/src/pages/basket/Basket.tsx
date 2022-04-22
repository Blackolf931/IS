import React, { useEffect, useState } from 'react';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { BasketState } from '../../core/redux/types/basket/basketType';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {basket.map((item) => (
              <TableRow
                key={Number(item.id)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{10}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.priceWithDiscount}</TableCell>
                <TableCell align="right">total price: {15000}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Basket;
