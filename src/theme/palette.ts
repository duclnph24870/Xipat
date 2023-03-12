import type { ThemeOptions } from '@mui/material';
import type { Education } from '.';

// education palette
const education: Education = {
    pagination: '#fde428',
    background: {
        disableField: '#e9ecef'
    },
    text: {
        black: '#000',
        white: '#FFFFFF'
    }
};

const palette: ThemeOptions = {
    palette: {
        mode: 'light',
        education,
        background: {
            default: '#f4f5f7',
            paper: '#FFFFFF'
        },
        primary: {
            light: '#5BE584',
            main: '#00AB55',
            dark: '#007B55'
        }
    }
};

export default palette;
