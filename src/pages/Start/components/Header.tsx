import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { images } from '~/acssets/images';
import { Theme } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';
import classNames from 'classnames';

function Header() {
    const [activeMenuResponsive, setActiveMenuResponsive] = useState<boolean>(false);
    const handleActiveMenu = () => {
        console.log(activeMenuResponsive);

        setActiveMenuResponsive((curr) => !curr);
    };
    return (
        <HeaderComponent>
            <Box
                component={'div'}
                sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                {/* logo */}
                <ContainerLogo className='headerStart-logo'>
                    <LogoImage src={images.logo} alt='logo' />
                </ContainerLogo>

                {/* list menu  */}
                <ListMenu
                    className={classNames('', {
                        active: activeMenuResponsive
                    })}>
                    <Box component={'li'} sx={{ listStyle: 'none', textTransform: 'uppercase' }}>
                        <Link to='/'>Cán bộ đào tạo</Link>
                    </Box>
                    <Box component={'li'} sx={{ listStyle: 'none', textTransform: 'uppercase' }}>
                        <Link to='/'>Giảng viên</Link>
                    </Box>
                    <Box component={'li'} sx={{ listStyle: 'none', textTransform: 'uppercase' }}>
                        <Link to='/'>Phụ Huynh</Link>
                    </Box>
                </ListMenu>

                {/* responsive menu  */}
                <MenuResponsive onClick={handleActiveMenu}>
                    <DehazeIcon sx={{ fontSize: '2.8rem', color: '#979798' }} />
                </MenuResponsive>
            </Box>
        </HeaderComponent>
    );
}

const HeaderComponent = styled('header')(({ theme }) => {
    return {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        padding: '8px 16px',
        zIndex: 3,
        backgroundColor: (theme as Theme).palette.background.paper
    };
});

const ContainerLogo = styled('div')({
    width: 160,
    height: 70
});

export const LogoImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
});

const MenuResponsive = styled('div')(({ theme }: any) => {
    return {
        marginLeft: 'auto',
        display: 'none',
        alignItems: 'center',
        background: 'none',
        outline: 'none',
        cursor: 'pointer',
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: 3,
        padding: '4px 12px',
        [theme.breakpoints.down('md')]: {
            display: 'flex'
        }
    };
});

const ListMenu = styled('ul')(({ theme }: any) => {
    return {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        fontWeight: 700,
        fontSize: '1.6rem',
        marginLeft: '16px',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            order: 1,
            height: 0,
            width: '100%',
            flexWrap: 'wrap',
            '& > li ': {
                width: '100%'
            },
            '&.active': {
                height: '100% !important',
                margin: '16px 0 16px 0'
            }
        }
    };
});

export default Header;
