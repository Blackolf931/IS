import styled from 'styled-components';

const ProductItemContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  flex: 0 0 25%;
  opacity: 1;
  max-width: 700px;
  min-width: 50px;
  margin-bottom: 2%;
  &:hover {
    background-color: #c5bebe;
  }
`;

export default ProductItemContainer;
