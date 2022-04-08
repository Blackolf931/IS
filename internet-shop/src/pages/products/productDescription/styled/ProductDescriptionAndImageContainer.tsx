import styled from 'styled-components';
import device from '../../../../device';

export const ProductDescriptionAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  /*  gap: 5%;*/

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
