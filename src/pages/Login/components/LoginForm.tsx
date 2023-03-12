import { useForm, Controller } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '~/hook/useAuth';
import { TFormLogin, yupLogin, yupResolver } from '~/utils/yups/yupUser';
import ControllerTextField from '~/components/Form/ControllerTextField';
import Checkbox from '@mui/material/Checkbox';

export default function LoginForm() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleLogin = (data: any) => {
        try {
            console.log(data);

            const submitData = {
                token: 'This is token',
                responseUserInfo: {
                    statusCode: 200
                }
            };

            // login(submitData);
            // navigate('/', { replace: false });
        } catch (error) {
            console.log(error);
        }
    };
    const { control, handleSubmit } = useForm<TFormLogin>({
        mode: 'onChange',
        resolver: yupResolver(yupLogin),
        defaultValues: yupLogin.getDefault()
    });
    return (
        <Box margin='0 auto'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <ControllerTextField control={control} name='email' placeholder='VD: tieuhoc@botxuyen.edu.vn' />
                <ControllerTextField control={control} name='password' placeholder='Mật khẩu' />
                <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', margin: '10px 0 20px 0' }}>
                    <Controller
                        render={({ field, fieldState: { error } }) => {
                            return (
                                <Box
                                    component={'div'}
                                    sx={{
                                        fontSize: '1.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'text.secondary'
                                    }}>
                                    <Checkbox
                                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                                        checked={field.value}
                                        sx={{
                                            color: 'primary.main',
                                            padding: 0,
                                            '& .MuiSvgIcon-root': { fontSize: '1.8rem' },
                                            mr: 2
                                        }}
                                        id={'rememberPassword'}
                                        {...field}
                                    />
                                    <label htmlFor='rememberPassword'>Nhớ mật khẩu?</label>
                                </Box>
                            );
                        }}
                        name={'rememberPassword'}
                        control={control}
                    />

                    <Link to={'/forgot'} style={{ marginLeft: 'auto' }}>
                        <Box
                            component={'p'}
                            sx={{
                                color: 'error.main',
                                fontSize: '1.4rem',
                                textDecoration: 'underline',
                                transition: 'text-decoration 0.2s',
                                '&:hover': { textDecoration: 'none' }
                            }}>
                            Quên mật khẩu?
                        </Box>
                    </Link>
                </Box>

                <Button
                    type='submit'
                    sx={{
                        width: '100%',
                        height: 55,
                        fontSize: '1.7rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'primary.main',
                            border: '1px solid',
                            borderColor: 'primary.main'
                        }
                    }}>
                    Đăng nhập
                </Button>
            </form>
        </Box>
    );
}
