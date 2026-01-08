import * as Yup from "yup"

export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Please enter correct email")
})