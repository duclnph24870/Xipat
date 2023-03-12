import * as yup from 'yup';
import Regexs from '../Regexs';
export { yupResolver } from '@hookform/resolvers/yup';
yup.setLocale({
    mixed: {
        notType: '${path} is required'
    }
});
const yupLogin = yup.object().shape({
    email: yup
        .string()
        .trim('Hãy xóa dấu cách ở 2 đầu email')
        .strict(true)
        .required('Bạn chưa nhập email')
        .matches(Regexs.email, 'Vui lòng nhập đúng định dạng Email')
        .default(''),
    password: yup
        .string()
        .trim('Hãy xóa dấu cách ở 2 đầu email')
        .strict(true)
        .required('Bạn chưa nhập mật khẩu')
        .default(''),
    rememberPassword: yup.bool().default(false)
});
type TFormLogin = yup.InferType<typeof yupLogin>;
export { yupLogin };
export type { TFormLogin };
