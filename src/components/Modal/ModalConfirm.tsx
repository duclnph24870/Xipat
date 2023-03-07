import { Dispatch, ReactNode, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/system';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material';

type TypeProps = {
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
   title: string;
   children: ReactNode;
};
export default function BasicModal(props: TypeProps) {
   const { open, children, title, setOpen } = props;
   const handleClose = () => setOpen(false);
   const { wrap } = useStyle();
   return (
      <>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box className={wrap}>
               <Typography id='modal-modal-title' variant='h6' component='h2'>
                  {title}
               </Typography>
               <Stack direction='row' justifyContent='flex-end' gap='24px'>
                  {children}
               </Stack>
            </Box>
         </Modal>
      </>
   );
}
const useStyle = makeStyles((_theme: Theme) => ({
   wrap: {
      position: 'absolute',
      justifyContent: 'space-between;',
      flexDirection: 'column',
      display: 'flex',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 380,
      maxWidth: '100%',
      height: '160px',
      border: '1px solid #d2d2d2',
      borderRadius: '4px',
      padding: _theme.spacing(2),
      backgroundColor: '#fff'
   }
}));
