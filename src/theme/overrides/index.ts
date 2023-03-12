import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';
import Button from './Button';
import InputLabel from './InputLabel';
import Select from './Select';
import TextField from './TextField';
const overrides = (theme: Theme) => merge({}, TextField(), Button(), Select(), InputLabel());

export default overrides;
