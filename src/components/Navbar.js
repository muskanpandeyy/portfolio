import React from 'react';
import { AppBar, Toolbar, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <NavButton
            component={RouterLink}
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Myportfolio
          </NavButton>
        </Box>
        {!isMobile && (
          <Box>
            <NavButton
              component={RouterLink}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </NavButton>
            <NavButton
              component={RouterLink}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </NavButton>
            <NavButton
              component={RouterLink}
              to="/skills"
              className={location.pathname === '/skills' ? 'active' : ''}
            >
              Skills
            </NavButton>
            <NavButton
              component={RouterLink}
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </NavButton>
            <NavButton
              component={RouterLink}
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </NavButton>
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 