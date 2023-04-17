import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    accent: 'orange',
    black: '#212121',
    white: '#fff',
    red: 'red',
    green: 'green',
  },
  radii: {
    xs: '4px',
    sm: '8px',
    lg: '12px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
