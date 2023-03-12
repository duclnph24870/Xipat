import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { images } from '~/acssets/images';
import LoginForm from './components/LoginForm';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import type { Theme } from '@mui/material';

function Login() {
    return (
        <LoginContainer>
            <ContentContainer>
                <Box component={'div'} sx={{ width: '200px', height: '70px' }}>
                    <Link to={'/'}>
                        <Box
                            component={'img'}
                            src={images.logo}
                            alt='logo'
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Link>
                </Box>

                <Box
                    component={'div'}
                    className='formContent'
                    sx={{ mt: '30px', px: '50px', py: '40px', backgroundColor: 'background.paper', borderRadius: 3 }}>
                    <Typography
                        component='h1'
                        sx={{ fontSize: '2.5rem', fontWeight: 600, mb: '20px', textAlign: 'center' }}>
                        Đăng nhập
                    </Typography>
                    <LoginForm />
                </Box>
            </ContentContainer>
        </LoginContainer>
    );
}

const LoginContainer = styled('div')(() => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${images.bgLogin})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
    };
});

const ContentContainer = styled('div')(({ theme }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '570px',
        [(theme as Theme).breakpoints.down('sm')]: {
            width: '100%',
            '& .formContent': {
                padding: '20px'
            }
        }
    };
});

export default Login;
