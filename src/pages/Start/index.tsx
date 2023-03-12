import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { images } from '~/acssets/images';
import Header from './components/Header';

function Start() {
    return (
        <Container className='containerStart'>
            <Header />
            <Box component={'main'} sx={{ mt: '80px' }}>
                <BannerStart className='bannerStart' />
            </Box>
            <footer>Footer</footer>
        </Container>
    );
}

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const BannerStart = styled('div')(({ theme }: any) => {
    return {
        backgroundImage: `url(${images.bannerStart})`,
        width: '100%',
        height: 600,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.breakpoints.down('md')]: {
            height: 355
        },
        [theme.breakpoints.down('sm')]: {
            height: 280
        },
        [theme.breakpoints.down('xs')]: {
            height: 155
        }
    };
});

export default Start;
