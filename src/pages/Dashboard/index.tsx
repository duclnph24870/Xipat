import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useAuth from '../../hook/useAuth';

const Dashboard = () => {
   const { logout } = useAuth();
   const handleSubmit = () => {
      logout();
   };
   return (
      <>
         <MainLayoutRoot>
            Dashboard <button onClick={() => handleSubmit()}>Đăng xuất</button>
            <TextField />
            <Button>submit</Button>
            <Typography>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis atque necessitatibus adipisci magni
               aliquam saepe sit veniam vel ex est et omnis cum, totam libero perferendis facere quo provident quaerat.
            </Typography>
         </MainLayoutRoot>
      </>
   );
};

const MainLayoutRoot = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.default,
   height: '100%'
   // paddingTop: 64,
}));
export default Dashboard;
