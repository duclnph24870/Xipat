import { Box, Theme } from '@mui/material';
import { styled } from '@mui/system';
import { images } from '~/acssets/images';
import { LogoImage } from './Header';
import { PhoneInTalkOutlined, FmdGoodOutlined, MarkEmailReadOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface DataFooter {
    title: string;
    children: { to: string; title: string }[];
}

function Footer() {
    const dataFooter: DataFooter[] = useMemo(() => {
        return [
            {
                title: 'Liên kết',
                children: [
                    { to: '/a', title: 'About' },
                    { to: '/b', title: 'About' },
                    { to: '/c', title: 'About' }
                ]
            },
            {
                title: 'Giới thiệu',
                children: [
                    { to: '/d', title: 'About' },
                    { to: '/e', title: 'About' },
                    { to: '/f', title: 'About' }
                ]
            },
            {
                title: 'Ủng hộ',
                children: [
                    { to: '/g', title: 'About' },
                    { to: '/h', title: 'About' },
                    { to: '/k', title: 'About' }
                ]
            },
            {
                title: 'Gợi ý',
                children: [
                    { to: '/l', title: 'About' },
                    { to: '/m', title: 'About' },
                    { to: '/n', title: 'About' }
                ]
            }
        ];
    }, []);
    return (
        <FooterContainer>
            <FooterItem>
                <Box
                    component={'div'}
                    sx={{
                        width: 200,
                        height: 70
                    }}>
                    <LogoImage src={images.logo} alt='logo' />
                </Box>
                <ContactList>
                    <Box component={'li'}>
                        <PhoneInTalkOutlined className='contactIcon' sx={{ color: 'primary.main' }} />
                        800 388 80 90
                    </Box>
                    <Box component={'li'}>
                        <FmdGoodOutlined className='contactIcon' sx={{ color: 'primary.main' }} />
                        Bột Xuyên, Mỹ Đức, Hà Nội
                    </Box>
                    <Box component={'li'}>
                        <MarkEmailReadOutlined className='contactIcon' sx={{ color: 'primary.main' }} />
                        botxuyen@edu.vn
                    </Box>
                </ContactList>
            </FooterItem>

            {dataFooter &&
                dataFooter.map((item) => (
                    <FooterItem key={item.title}>
                        <Typography
                            component='h3'
                            sx={{ fontSize: '1.8rem', height: '70px', display: 'flex', alignItems: 'center' }}>
                            {item.title}
                        </Typography>
                        <ContactList>
                            {item.children.map((child) => (
                                <Box component={'li'} key={child.to}>
                                    <Link to={child.to}>{child.title}</Link>
                                </Box>
                            ))}
                        </ContactList>
                    </FooterItem>
                ))}
        </FooterContainer>
    );
}

const FooterContainer = styled('footer')(({ theme }: any) => ({
    borderTop: `10px solid ${(theme as Theme).palette.primary.main}`,
    backgroundColor: '#192041',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
    padding: '30px'
}));

const FooterItem = styled('div')(({ theme }: any) => {
    return {
        color: '#fff',
        padding: '15px',
        width: '20%',
        [(theme as Theme).breakpoints.between('sm', 'md')]: {
            '&:first-of-type': {
                width: 'calc(100% - (100%/3))'
            },
            width: 'calc(100%/3)'
        },
        [(theme as Theme).breakpoints.down('sm')]: {
            width: '100%',
            padding: '10px'
        }
    };
});

const ContactList = styled('ul')(({ theme }) => {
    return {
        listStyle: 'none',
        '& > li': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '1.5rem',
            padding: '5px 0',
            cursor: 'pointer',
            '&:hover > a': {
                color: (theme as Theme).palette.primary.main
            }
        },
        '& > li > a': {
            color: '#fff',
            transition: 'color linear 0.2s'
        },
        '& > li > .contactIcon': {
            marginRight: '10px',
            fontSize: '2rem'
        }
    };
});

export default Footer;
