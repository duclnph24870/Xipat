import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import viLocale from 'date-fns/locale/vi';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/index';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/JWTAuthContext';
import './App.css';
import routes, { renderRoutes } from './router/routes';
import { createTheme } from './theme';

const theme = createTheme();
function App() {
   return (
      <Provider store={store}>
         <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={viLocale}>
            <ThemeProvider theme={theme}>
               <Router>
                  <AuthProvider>{renderRoutes(routes)}</AuthProvider>
               </Router>
            </ThemeProvider>
         </LocalizationProvider>
      </Provider>
   );
}

export default App;
