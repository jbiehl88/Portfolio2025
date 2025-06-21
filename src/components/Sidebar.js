import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import avatar from './avatar.jpg';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Apprenticeship Overview', path: '/overview' },
  { text: 'Contact', path: '/contact' },
];

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // md breakpoint and below = mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar content (used for both permanent and temporary drawers)
  const drawer = (
    <Box
      sx={{
        bgcolor: '#1e1e1e',
        height: '100%',
        color: '#fff',
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar src={avatar} sx={{ width: 150, height: 150, mx: 'auto' }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <a href="https://github.com/jbiehl88" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <GitHub sx={{ fontSize: '2.5rem', color: 'white' }} />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/jordan-biehl/" target="_blank" rel="noopener noreferrer">
          <IconButton color="inherit">
            <LinkedIn sx={{ fontSize: '2.5rem', color: 'white' }} />
          </IconButton>
        </a>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List>
          {navItems.map(({ text, path }) => (
            <ListItem
              button
              component={Link}
              to={path}
              key={text}
              onClick={() => {
                if (isMobile) setMobileOpen(false); // close drawer on mobile when navigating
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      {isMobile && (
        <AppBar position="fixed" sx={{ bgcolor: '#1e1e1e' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Jordan Biehl
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer for mobile (temporary) */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              bgcolor: '#1e1e1e',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        // Permanent drawer for desktop
        <Drawer
          variant="permanent"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: '#1e1e1e',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
