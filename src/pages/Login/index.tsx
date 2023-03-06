import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

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
   return (
      <>
         1231312313123123 <button onClick={() => handleLogin()}>Đăng nhập</button>
         <TextField />
         <Button
            size='large'
            variant='outlined'
            onClick={() => {}}
            className='askdjfhasdjkfhasdjklfhasldfhasdjlfhasdfadfadfaadf'>
            asdfad
         </Button>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum possimus quaerat eos! Repudiandae sed
         repellat sint explicabo recusandae illum nulla quidem nesciunt possimus in deserunt tenetur, dolor sunt vel!
      </>
   );
};

export default Login;
