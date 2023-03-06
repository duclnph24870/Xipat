import type { ThemeOptions } from '@mui/material/styles';

const Button = (): ThemeOptions['components'] => {
   return {
      MuiButton: {
         defaultProps: {
            variant: 'contained',
            size: 'medium',
            disableElevation: true
         },
         styleOverrides: {
            root: {
               textTransform: 'none',
               borderRadius: '3px'
            }
         }
      }
   };
};

export default Button;
