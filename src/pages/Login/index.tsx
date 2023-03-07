import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupLogin, TFormLogin,yupResolver } from '~/utils/yups/yupUser';
import useAuth from '~/hook/useAuth';
import ControlTextField from '~/components/Form/ControllerTextField';

const Login = () => {
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
      } catch (error) {}
   };
   const { control } = useForm<TFormLogin>({
      mode: 'onChange',
      resolver: yupResolver(yupLogin),
      defaultValues: yupLogin.getDefault()
   });
   return (
      <>
         <button onClick={() => handleLogin()}>Đăng nhập</button>
         <TextField />
         <Button
            size='large'
            variant='outlined'
            onClick={() => {}}
            className='askdjfhasdjkfhasdjklfhasldfhasdjlfhasdfadfadfaadf'>
            asdfad
         </Button>
         <Box width='400px' margin='0 auto'>
            <form>
               <ControlTextField control={control} name='email' />
               <ControlTextField control={control} name='password' />
            </form>
         </Box>
      </>
   );
};

export default Login;
