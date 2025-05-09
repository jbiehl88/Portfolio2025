import { Drawer, List, ListItem, ListItemText, Avatar, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React from 'react';
import avatar from './avatar.jpg';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Contact', path: '/contact' }
];

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        bgcolor: '#1e1e1e',
        color: '#fff',
      },
    }}
  >
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Avatar src={avatar} sx={{ width: 150, height: 150, mx: 'auto' }} />
    </Box>

    {/* Social icons directly below the avatar */}
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

    {/* Center the navigation items horizontally */}
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <List>
        {navItems.map(({ text, path }) => (
          <ListItem button component={Link} to={path} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
);

export default Sidebar;
