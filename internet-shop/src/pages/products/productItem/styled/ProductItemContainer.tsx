import styled from 'styled-components';
import device from '../../../../device';

const ProductItemContainer = styled.div`
  justify-content: space-between;
  flex-direction: column;
  margin: 10px auto;
  display: flex;

  border: 1px solid #e7e7e7;

  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 10px;
  flex: 0 0 25%;
  opacity: 1;
  max-width: 700px;
  min-width: 50px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export default ProductItemContainer;
