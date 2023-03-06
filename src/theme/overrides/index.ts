import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';
import Button from './Button';
import TextField from './TextField';
const overrides = (theme: Theme) => merge({}, TextField(theme), Button(theme));

export default overrides;
