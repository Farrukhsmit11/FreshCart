import { Form as AntForm, Button, Input } from "antd";
import { useState } from "react";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { handleLogin } from '../../../store/auth/authThunk';

const Login = () => {

    const [form] = AntForm.useForm()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const reducer = useSelector((auth) => ({
        loading: auth?.loginLoading
    }))

    const { loading } = reducer

    const onSubmit = async () => {
        try {
            const result = await dispatch(handleLogin({
                email,
                password
            })).unwrap()

            console.log("LOGIN SUCCESS:", result)
            navigate("/home")
        } catch (error) {
            console.error("error logging in", error)
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-title">Login </h1>
                </div>

                <Formik
                >
                    {({
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                        values

                    }) => (
                        <AntForm form={form} layout="vertical">
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
                                <Button className="submit-btn"
                                    loading={loading}
                                    onClick={() => onSubmit()}>Login</Button>

                                <span className='signup-link'>
                                    Don,t have an account <a href='#' onClick={() => navigate("/")}>Sign Up</a>
                                </span>
                            </div>
                        </AntForm>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login