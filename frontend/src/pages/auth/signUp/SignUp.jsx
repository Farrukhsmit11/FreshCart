import { Formik } from "formik"
import "./SignUp.css"
import { Form as AntForm, Button, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const [form] = AntForm.useForm();

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const registerUser = async () => {
        try {
            await dispatch(handleSignup({
                name,
                email,
                password
            })).unwrap()
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Error Signing Up", error)
        }
    }


    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-title">Sign Up</h1>
                </div>

                <Formik
                    initialValues={initialValues}
                >
                    <AntForm form={form} layout="vertical">
                        <AntForm.Item label="Name">
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Enter Name"
                                name="name"
                                className="form-input"></Input>
                        </AntForm.Item>

                        <AntForm.Item label="Email">
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                type="email"
                                name="email"
                                className="form-input"
                            ></Input>
                        </AntForm.Item>


                        <AntForm.Item label="Password">
                            <Input.Password
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                                className="form-input"
                            ></Input.Password>
                        </AntForm.Item>

                        <div className="auth-footer">
                            <Button className="submit-btn" onClick={() => handleSignup()} htmlType="submit">Sign Up</Button>
                            <Button className="submit-btn-black" onClick={() => navigate("/login")}>Login</Button>
                        </div>
                    </AntForm>
                </Formik>
            </div>
        </div>
    )
}

export default SignUp