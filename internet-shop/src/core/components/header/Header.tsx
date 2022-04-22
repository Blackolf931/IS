import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import SearchContainer from './styled/SearchContainer';
import SearchIconWrapperContainer from './styled/SearchIconWrapperContainer';
import InputContainer from './styled/InputContainer';
import IconButtonContainer from './styled/IconButtonContainer';
import TypographyContainer from './styled/TypographyContainer';
import MainRoutes from '../../constants/mainRoutes';

interface Props {
  productsInBasketCount: number;
}

const Header: React.FC<Props> = ({ productsInBasketCount }) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const setIsOpenFilterMenu = () => {
    if (isOpenFilter) {
      setIsOpenFilter(false);
    } else {
      setIsOpenFilter(true);
    }
  };

  const navigate = useNavigate();
  const routeChange = () => () => {
    const path = `${MainRoutes.basket}`;
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButtonContainer aria-label="open drawer" onClick={setIsOpenFilterMenu}>
          <MenuIcon />
        </IconButtonContainer>

        <TypographyContainer>MUI</TypographyContainer>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={productsInBasketCount} color="error">
            <ShoppingCartIcon onClick={routeChange()} />
          </Badge>
        </IconButton>
        <SearchContainer>
          <SearchIconWrapperContainer>
            <SearchIcon />
          </SearchIconWrapperContainer>
          <InputContainer placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </SearchContainer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
