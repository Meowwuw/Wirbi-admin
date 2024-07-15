import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, Toolbar, Box } from '@mui/material';
import { AccountCircle, Assignment } from '@mui/icons-material';
import logo from '../assets/logo-wirbi.png';

const drawerWidth = 240;

const Sidebar = ({ onMenuItemClick }) => {
  const menuItems = [
    { text: 'Colaboradores', icon: <AccountCircle /> },
    { text: 'Planilla', icon: <Assignment /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar>
        <Box component="img" src={logo} alt="Logo" sx={{ width: '80%', margin: '0 auto', padding: '10px 0' }} />
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => onMenuItemClick(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
