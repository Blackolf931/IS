import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useTypedSelector from '../../../core/hooks/useTypeSelector';
import { getProductById } from '../../../core/redux/thunk/getProducts';
import { ProductDescriptionAndImageContainer } from './styled/ProductDescriptionAndImageContainer';
import { ProductGeneralContainer } from './styled/ProductGeneralContainer';
import { ImageProductContainer } from './styled/ImageContainer';
import { ProductGeneralInformation } from './styled/ProductGeneralInformation';
import { ProductDescriptionContainer } from './styled/ProductDescriptionContainer';
import { PriceWithDiscount } from '../../../core/components/price/PriceWithDiscount';
import { TypographyContainer } from '../productItem/styled/TypographyContainer';
import { PriceContainer } from './styled/PriceContainer';
import { CountProductContainer } from './styled/CountProductContainer';
import { TextFieldContainer } from './styled/TextFieldContainer';
import { ProductCharacteristic } from './styled/ProductCharacteristic';

export const ProductDescription: React.FC = () => {
  const { id } = useParams();
  const product = useTypedSelector((state) => state.products.product);
  const dispatch = useDispatch();

  const [countOfProduct, setCountOfProduct] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const onChangeProd = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) !== 0) setCountOfProduct(Number(event.target.value));
  };

  return (
    <ProductGeneralContainer>
      <ProductDescriptionAndImageContainer>
        <ImageProductContainer
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Double-barred_dollar_sign.svg/500px-Double-barred_dollar_sign.svg.png"
          alt="defaultImage"
        />
        <ProductGeneralInformation>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h6">Product Description</Typography>
          <ProductDescriptionContainer>{product.shortDescription}</ProductDescriptionContainer>
          <PriceContainer>
            <Typography variant="h6">Price </Typography>
            {product.discount > 0 ? (
              <PriceWithDiscount
                price={product?.price}
                priceWithDiscount={product.priceWithDiscount}
              />
            ) : (
              <TypographyContainer variant="h5">{product.price}</TypographyContainer>
            )}
            <Typography variant="h6">BYN</Typography>
          </PriceContainer>
          <CountProductContainer>
            <TextFieldContainer
              id="outlined-number"
              type="number"
              value={countOfProduct}
              onChange={onChangeProd}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <IconButton color="primary" aria-label="add to shopping cart">
              Add to cart
              <AddShoppingCartIcon />
            </IconButton>
          </CountProductContainer>
        </ProductGeneralInformation>
      </ProductDescriptionAndImageContainer>
      <ProductCharacteristic>
        <Grid item>
          <Typography variant="h4" component="h5">
            product: test
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h6" marginTop="10px" marginBottom="10px">
            test
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>questionArea</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              {/*   <TableBody>
                {.questionAreas?.map((questionArea) => (
                  <TableRow
                    key={questionArea.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {questionArea.name}
                    </TableCell>
                    <TableCell align="right">
                      <Button endIcon={<EditIcon />} />
                      <Button
                        endIcon={<DeleteIcon />}
                        onClick={DeleteQuestionArea(questionArea.id, questionSet.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </TableContainer>
        </Grid>

        <Grid item>
          <Typography variant="h5" component="h6" marginTop="10px" marginBottom="10px">
            questions
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>number</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {questionSet.questions.map((question) => (
                  <TableRow
                    key={question.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{question.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {question.text}
                    </TableCell>
                    <TableCell align="right">
                      <Button endIcon={<EditIcon />} />
                      <Button
                        endIcon={<DeleteIcon />}
                        onClick={DeleteQuestion(Number(id), question.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </TableContainer>
        </Grid>
      </ProductCharacteristic>
    </ProductGeneralContainer>
  );
};
