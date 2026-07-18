import React from 'react'
import { Form as AntForm, Button, Input, message } from "antd";
import axios from "axios"
import { useState } from "react";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [form] = AntForm.useForm()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const BASE_URL = "http://localhost:5002"

    const navigate = useNavigate()


    const handleLogin = async () => {
        try {
            const data = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            })
            const res = data?.data.data
            message.success("Login Sucessfull")
            navigate("/home")
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Error Logging In", error)
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
                        handleSubmit,
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
                                    placeholder="Enter Email"
                                    type="password"
                                    name="password"
                                    className="form-input"
                                ></Input.Password>
                            </AntForm.Item>

                            <div className="auth-footer">
                                <Button className="submit-btn" onClick={() => handleLogin()}>Login</Button>

                                <span className='signup-link'>
                                    Don,t have an account <a href='#'>Sign Up</a>
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