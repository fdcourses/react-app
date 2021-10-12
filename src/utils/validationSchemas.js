import * as yup from 'yup';

export const SIGN_IN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*?[$_#^!%]).{8,32}$/)
    .required(),
  remember: yup.string(),
});