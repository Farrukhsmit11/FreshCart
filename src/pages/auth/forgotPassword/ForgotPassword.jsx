import "./ForgotPassword.css"
import forgotPasswordlogo from "../../../assets/forgot-password-logo.svg"
import { Form as AntForm, Button, Input } from "antd"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [form] = AntForm.useForm();

    return (
        <div className="container">
            <div className="row justify-content-center">
                 
                <div className="col-lg-4 col-md-12 col-12">
                    <img className="" src={forgotPasswordlogo} />
                </div>

                <div className="col-lg-4 col-md-12 col-12">

                    <AntForm className="auth-form" form={form} layout="vertical">

                        <div className="form-content">
                            <h1 className="forget-form-title">Forgot Your password?</h1>
                            <p className="forget-form-subtitle">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                        </div>

                        <Input
                            className="form-input"
                            placeholder="Email"
                        ></Input>

                        <div className="form-actions">
                            <Button htmlType="submit" className="sign-up-btn">Reset Password</Button>
                            <Button onClick={() => navigate("/signIn")} htmlType="submit" className="back-btn">Back</Button>
                        </div>

                    </AntForm>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword