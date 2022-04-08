import styled from 'styled-components';
import device from '../../../../device';

export const ProductGeneralContainer = styled.div`
  padding-top: 1%;
  justify-content: space-around;
  flex-direction: column;
  /*  margin: auto;*/
  display: flex;
  flex: 0 0 25%;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
