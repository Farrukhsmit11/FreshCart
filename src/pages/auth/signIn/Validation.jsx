import * as Yup from "yup"

export const signInSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Please enter email"),
    password: Yup.string().min(10, "Password must be atleast 10 characters").required("Password is required")
})