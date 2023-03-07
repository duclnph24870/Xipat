import { Controller, FieldValues } from 'react-hook-form';
// mui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
interface ISelect extends FieldValues {
   label: string;
   options: string[];
}

const ControllerCheckbox = (props: ISelect) => {
   const { label, options } = props;

   const { control, name, placeholder, disabled, ...rest } = props;
   return (
      <Controller
         render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth>
               <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
               <Select
                  id={name}
                  fullWidth
                  error={Boolean(error)}
                  placeholder={disabled ? void 0 : placeholder}
                  disabled={disabled}
                  {...field}
                  {...rest}
                  labelId='demo-simple-select-label'
                  label={label}>
                  {options.map((item, index: number) => (
                     <MenuItem key={index} value={item}>
                        {item}
                     </MenuItem>
                  ))}
               </Select>
               {error?.message && (
                  <FormHelperText sx={{ color: '#d32f2f' }} variant='outlined'>
                     {error.message}
                  </FormHelperText>
               )}
            </FormControl>
         )}
         name={name}
         control={control}
      />
   );
};

export default ControllerCheckbox;
