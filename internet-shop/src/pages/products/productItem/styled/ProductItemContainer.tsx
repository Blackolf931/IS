import styled from 'styled-components';

const ProductItemContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
  opacity: 1;
  &:hover {
    background-color: #c5bebe;
  }
`;

export default ProductItemContainer;
