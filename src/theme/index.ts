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
        black: '#000';
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
    const theme: any = createMuiTheme({
        spacing: 4,
        ...palette,
        ...typography,
        breakpoints: {
            values: {
                xs: 375,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536
            }
        }
    });
    theme.components = overrides(theme);

    return responsiveFontSizes(theme);
};
