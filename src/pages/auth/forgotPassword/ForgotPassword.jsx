import "./ForgotPassword.css"
import forgotPasswordlogo from "../../../assets/forgot-password-logo.svg"
import { Form as AntForm, Button, Col, Input, Row } from "antd"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import { forgotPasswordSchema } from "./ForgotPasswordSchema"

const ForgotPassword = () => {

    const navigate = useNavigate();

    const [form] = AntForm.useForm();

    const initialValues = {
        email: ""
    }

    const handlesubmit = (values, { resetForm }) => {
        console.log(values)
        resetForm();
    }

    return (
        <>
            <section className="auth-section">
                <div className="section-container">
                    <Row>
                        <Col md={18} lg={12} span={19}>
                            <img className="" src={forgotPasswordlogo} />
                        </Col>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={forgotPasswordSchema}
                            onSubmit={handlesubmit}
                        >
                            {({
                                handleSubmit,
                                handleBlur,
                                handleChange,
                                errors,
                                touched,
                                values
                            }) => (

                                <Col md={12} lg={7} >
                                    <AntForm onFinish={handleSubmit} className="auth-form" form={form} layout="vertical">

                                        <div className="form-content">
                                            <h1 className="forget-form-title">Forgot Your password?</h1>
                                            <p className="forget-form-subtitle">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
                                        </div>

                                        <AntForm.Item
                                            validateStatus={errors.email && touched.email ? "error" : ""}
                                            help={
                                                errors.email && touched.email ? (
                                                    <span className="reset-form-error">{errors.email}</span>
                                                ) : null
                                            }
                                        >
                                            <Input
                                                className="form-input"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                name="email"

                                            ></Input>
                                        </AntForm.Item>

                                        <div className="form-actions">
                                            <Button htmlType="submit" className="reset-password-btn">Reset Password</Button>
                                            <Button onClick={() => navigate("/signIn")} htmlType="submit" className="back-btn">Back</Button>
                                        </div>

                                    </AntForm>
                                </Col>
                            )}
                        </Formik>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ForgotPassword