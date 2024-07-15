import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardContent from '../components/DashboardContent';
import { Box } from '@mui/material';

const Dashboard = () => {
  const [content, setContent] = useState('Dashboard');

  const handleMenuItemClick = (menuItem) => {
    setContent(menuItem);
  };

  return (
    <Box display="flex" height="100vh">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Navbar />
        <DashboardContent content={content} />
      </Box>
    </Box>
  );
};

export default Dashboard;
