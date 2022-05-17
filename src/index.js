import * as React from 'react';
import ReactDOM from 'react-dom/client';
import SideBar from './components/SideBar';
import ToolBar from './components/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
        }
      }
    }
  },
  typography: {
    allVariants: {
      fontSize: 20,
      color: '#a5aeb8',
      fontWeight: 0,
    }
  },
});

function App() {
  const drawerWidth = 340;

  return <Box sx={{ display: 'flex' }}>
    <SideBar drawerWidth={drawerWidth}/>
    <ToolBar drawerWidth={drawerWidth}/>
  </Box>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
