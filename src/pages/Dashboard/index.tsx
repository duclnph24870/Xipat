import ControlTextField from '~/components/Form/ControllerTextField';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import useAuth from '../../hook/useAuth';
import ControllerSelect from '~/components/Form/ControllerSelect';
import ModalConfirm from '~/components/Modal/ModalConfirm';
import { useState } from 'react';

type FormData = {
   name: string;
   status: string[];
   describe: string;
   file?: File;
   quantity: string;
   discount: string;
   price: string;
};
const Dashboard = () => {
   const { logout } = useAuth();
   const handleSubmit = () => {
      logout();
   };
   const [open, setOpen] = useState(false);
   const { control } = useForm<FormData>({
      mode: 'onChange'
   });
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
            <ControlTextField
               rows={4}
               error={{ message: 'Vui long nhap field' }}
               name='description'
               control={control}
            />
            <ControllerSelect name='status' control={control} options={fakeOptions} label={'select status'} />
            <ModalConfirm setOpen={setOpen} open={open} title='ban co muon xoa'>
               <Button color='error' variant='outlined'>
                  Xoa
               </Button>
               <Button variant='outlined'>Cancel</Button>
            </ModalConfirm>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
         </MainLayoutRoot>
      </>
   );
};

const MainLayoutRoot = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.background.default,
   height: '100%'
   // paddingTop: 64,
}));
const fakeOptions = ['Còn hàng', 'Hết hàng'];
export default Dashboard;
