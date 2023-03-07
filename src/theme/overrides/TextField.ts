import type { ThemeOptions } from '@mui/material/styles';

const TextField = (): ThemeOptions['components'] => {
   return {
      MuiTextField: {
         defaultProps: {
            size: 'small',
            variant: 'outlined'
         }
      }
   };
};

export default TextField;
