import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
    firstName: Yup.string().required(" firstName is required"),
    lastName: Yup.string().required(" lastName is required"),
    username: Yup.string().matches(/^[a-zA-Z0-9_]{6,16}$/).min(6).required("Please enter the username !"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(12).required("Password is required"),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required !'),   
    qualification:Yup.string().required("qualification is required"),
    phoneNumber:Yup.number().min(10).required("Phone number is required"),
})
