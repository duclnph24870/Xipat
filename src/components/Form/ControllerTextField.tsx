import { styled } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const ControllerTextField = (props: any) => {
    const { control, name, placeholder, disabled, ...rest } = props;
    return (
        <Controller
            render={({ field, fieldState: { error } }) => {
                return (
                    <TextFieldCustom
                        id={name}
                        fullWidth
                        error={Boolean(error)}
                        helperText={error?.message && error.message}
                        placeholder={disabled ? void 0 : placeholder}
                        disabled={disabled}
                        {...field}
                        {...rest}
                    />
                );
            }}
            name={name}
            control={control}
        />
    );
};

const TextFieldCustom = styled(TextField)<TextFieldProps>(({ theme }: any) => {
    return {
        margin: '10px 0',
        '& .MuiOutlinedInput-root': {
            fontSize: '1.4rem',
            width: '100%',
            height: '48px',
            display: 'block',
            overflow: 'hidden',

            '& input': {
                height: '100%',
                padding: '0 20px',
                boxSizing: 'border-box'
            }
        },
        '& [id*="helper"]': {
            fontSize: '1.2rem',
            margin: '5px 0 0 0'
        }
    };
});

export default ControllerTextField;
