import { styled } from '@mui/system';

interface Props {
    color?: string;
    content?: string;
    colorText?: string;
    style: any;
}

function Strikethrough({ color, content, colorText, style }: Props) {
    return (
        <Container color={color} style={style ? style : {}}>
            {content && <Content color={colorText}>{content}</Content>}
        </Container>
    );
}

const Container = styled('div')(({ color, style }) => ({
    width: '100%',
    height: '1px',
    backgroundColor: color || 'rgba(0,0,0,.1)',
    position: 'relative',
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    ...style
}));

const Content = styled('p')(({ color }) => {
    return {
        color: color || '#6f7074',
        fontSize: '1.5rem',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        zIndex: 1,
        padding: '0 20px'
    };
});

export default Strikethrough;
