import styled from 'styled-components';
import device from '../../../device';

const ProductsContainer = styled.div`
  display: contents;
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export default ProductsContainer;
