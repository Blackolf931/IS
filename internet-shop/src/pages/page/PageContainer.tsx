import styled from '@emotion/styled';
import device from '../../device';

export const PageContainer = styled.div`
  margin: auto;
  font-family: 'sans-serif';
  text-align: center;

  @media ${device.mobileS} {
    max-width: 320px;
  }
  @media ${device.mobileM} {
    max-width: 375px;
  }

  @media ${device.mobileL} {
    max-width: 425px;
  }
  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 1024px;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
  }

  @media ${device.desktopL} {
    max-width: 2560px;
  }
`;
