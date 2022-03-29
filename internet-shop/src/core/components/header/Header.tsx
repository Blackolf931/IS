import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchContainer from './styled/SearchContainer';
import SearchIconWrapperContainer from './styled/SearchIconWrapperContainer';
import InputContainer from './styled/InputContainer';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
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
}
