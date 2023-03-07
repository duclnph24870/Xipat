import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hook/useAuth';
import { TFormLogin, yupLogin, yupResolver } from '~/utils/yups/yupUser';
import ControllerTextField from '~/components/Form/ControllerTextField';

export default function LoginForm() {
   const { login } = useAuth();
   const navigate = useNavigate();
   const handleLogin = () => {
      try {
         const submitData = {
            token: 'This is token',
            responseUserInfo: {
               statusCode: 200
            }
         };
         login(submitData);
         navigate('/', { replace: false });
      } catch (error) {
         console.log(error);
      }
   };
   const { control } = useForm<TFormLogin>({
      mode: 'onChange',
      resolver: yupResolver(yupLogin),
      defaultValues: yupLogin.getDefault()
   });
   return (
      <Box width='400px' margin='0 auto'>
         <form>
            <ControllerTextField control={control} name='email' />
            <ControllerTextField control={control} name='password' />
            <Button onClick={() => handleLogin()}>Đăng nhập</Button>
         </form>
      </Box>
   );
}
