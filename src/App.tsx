import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import viLocale from "date-fns/locale/vi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { viVN } from "@mui/material/locale";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const theme = createTheme(viVN);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={viLocale}>
      <ThemeProvider theme={theme}>
        <Router> 
          
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
