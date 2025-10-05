import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  useTheme, 
  useMediaQuery, 
  IconButton, 
  Drawer, 
  List, 
  ListItem,
  Typography
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)`
  background-color: #1a1a1a;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled(Button)`
  color: white;
  margin: 0 10px;
  &:hover {
    color: #64ffda;
  }
  &.active {
    color: #64ffda;
  }
`;

const MobileNavButton = styled(Button)`
  color: #8892b0;
  width: 100%;
  text-align: left;
  padding: 16px 24px;
  border-radius: 0;
  &:hover {
    color: #64ffda;
    background-color: rgba(100, 255, 218, 0.1);
  }
  &.active {
    color: #64ffda;
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const LogoText = styled(Typography)`
  color: #64ffda;
  font-weight: bold;
  font-size: 1.5rem;
  
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Skills', path: '/skills' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: '#1a1a1a', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #333' }}>
        <LogoText variant="h6">Myportfolio</LogoText>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <MobileNavButton
              component={RouterLink}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={handleDrawerToggle}
            >
              {item.text}
            </MobileNavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavButton
              component={RouterLink}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              <LogoText>Myportfolio</LogoText>
            </NavButton>
          </Box>
          
          {!isMobile ? (
            <Box>
              {navItems.map((item) => (
                <NavButton
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.text}
                </NavButton>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#64ffda' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250,
            backgroundColor: '#1a1a1a'
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Toolbar spacer to prevent content from hiding behind fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar; 