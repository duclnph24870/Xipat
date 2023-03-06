import type { Theme } from '@mui/material';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

export interface Education {
   pagination: '#fde428';
   background: {
      disableField: '#e9ecef';
   };
   text: {
      white: '#FFFFFF';
   };
}

declare module '@mui/material/styles' {
   interface Palette {
      education: Education;
   }

   interface PaletteOptions {
      education: Education;
   }
}

export const createTheme = (): Theme => {
   const theme = createMuiTheme({
      ...palette,
      ...typography
   });
   theme.components = overrides(theme);

   return responsiveFontSizes(theme);
};
