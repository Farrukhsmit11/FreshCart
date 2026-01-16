import * as Yup from "yup"

export const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("Please enter correct email").required("Email is required")
})