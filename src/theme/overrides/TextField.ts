import type { ThemeOptions } from '@mui/material/styles';

const TextField = (): ThemeOptions['components'] => {
    return {
        MuiTextField: {
            defaultProps: {
                variant: 'outlined'
            }
        }
    };
};

export default TextField;
