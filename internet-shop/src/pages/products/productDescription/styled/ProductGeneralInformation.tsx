import styled from 'styled-components';
import device from '../../../../device';

export const ProductGeneralInformation = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
