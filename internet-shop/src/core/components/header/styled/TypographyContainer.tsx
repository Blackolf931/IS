import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TypographyContainer = styled(Typography)(() => ({
  noWrap: true,
  variant: 'h6',
  flexGrow: 1,
  xs: 'none',
  sm: 'block',
}));

export default TypographyContainer;
