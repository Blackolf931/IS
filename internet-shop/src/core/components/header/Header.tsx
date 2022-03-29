import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchContainer from './styled/SearchContainer';
import SearchIconWrapperContainer from './styled/SearchIconWrapperContainer';
import InputContainer from './styled/InputContainer';
import IconButtonContainer from './styled/IconButtonContainer';
import TypographyContainer from './styled/TypographyContainer';

// eslint-disable-next-line react/function-component-definition
const Header: React.FC = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButtonContainer
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButtonContainer>
        <TypographyContainer>
          MUI
        </TypographyContainer>
        <SearchContainer>
          <SearchIconWrapperContainer>
            <SearchIcon />
          </SearchIconWrapperContainer>
          <InputContainer
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchContainer>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
