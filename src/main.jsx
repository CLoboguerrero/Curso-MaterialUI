import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Roboto font imports after installing it via npm:
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

//Importante usar para que MUI se aplique en TODO el proyecto (Importarlo en un componente si sólo se requiere ahí):
//Temas de MUI:

const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

//Una vez definida la función theme, se deberá envolver todo el proyecto en ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
