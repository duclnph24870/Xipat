import { ThemeOptions } from '@mui/material';

const InputLabel = (): ThemeOptions['components'] => {
   return {
      MuiInputLabel: {
         defaultProps: {
            size: 'small'
         }
      }
   };
};
export default InputLabel;
