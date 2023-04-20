import * as yup from "yup"

//SE usa para validar los datos de los formuarios
export const LoginValidate = yup.object().shape({
    username:yup.string().trim().required("The username is required"),
    password: yup.string().trim().required("The password is required")
})