import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginPopup from './LoginPopup';

const pages = ['Swords', 'Pricing', 'Blog'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup open/close


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <AppBar position="static" sx={{ marginY: '1rem', width: { xs: '100%', sm: '80%' }, borderRadius: '50px', marginX: { xs: '0', sm: '10%' }, background: 'rgb(255,255,255,0.3)', color: '#000000', backdropFilter: 'blur(10px)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: 'fit-content',
            }}
          >
            <img src="Images/Logo.png" alt="LOGO" height='50rem' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, alignItems: 'center', }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.03rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BladeLegacy
          </Typography>
          
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: 'black', display: 'flex' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login">
              <IconButton onClick={handlePopupOpen} sx={{ p: 0 }}>
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <LoginPopup open={isPopupOpen} handleClose={handlePopupClose} />
    </AppBar>
  );
}
export default NavBar;
