import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const msalInstance = new PublicClientApplication(msalConfig);

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MsalProvider>
  </React.StrictMode>
);
