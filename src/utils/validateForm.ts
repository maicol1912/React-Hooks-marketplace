import * as yup from "yup"

//SE usa para validar los datos de los formuarios
export const LoginValidate = yup.object().shape({
    username:yup.string().trim().required("The username is required").min(4,"el minimo debe ser 4 caracteres").max(10,"el maximo es de 10 caracteres"),
    password: yup.string().trim().required("The password is required").min(4, "el minimo debe ser 4 caracteres").max(10, "el maximo es de 10 caracteres"),
})