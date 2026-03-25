import * as Yup from "yup"

export const signUpSchema = Yup.object({
    firstName: Yup.string().required("Please enter firstName"),
    lastName: Yup.string().required("Please enter lastName"),
    email: Yup.string().required("email is required"),
    password: Yup.string().required("Password is required")
})