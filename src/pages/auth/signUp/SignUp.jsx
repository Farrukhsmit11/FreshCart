import { Col, Row, Form as AntForm, Input, Button } from "antd"
import signUpImg from "../../../assets/signUp-img.svg"
import { Formik } from "formik"
import { signUpSchema } from "./SignUpSchema"
import "./SignUp.css"

const SignUp = () => {

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    const [form] = AntForm.useForm();

    const onSubmit = (value, { resetForm }) => {
        console.log("Signup sucessfull", value)
        form.resetFields();
        resetForm();
    }

    return (
        <section className="sign-up-section">
            <div className="section-container">
                <Row justify="space-between" align="middle">
                    <Col lg={10} md={6} span={12} order={2}>
                        <img src={signUpImg} />
                    </Col>

                    <Col lg={13} md={12} span={12} order={2}>

                        <Formik
                            validationSchema={signUpSchema}
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                        >

                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                errors,
                                touched,
                                values

                            }) => (
                                <>
                                    <div className="sign-up-header">
                                        <h1>Get Start Shopping</h1>
                                        <p>Welcome to FreshCart! Enter your email to get started.</p>
                                    </div>

                                    <AntForm
                                        layout="vertical"
                                        form={form}
                                        onFinish={handleSubmit}
                                    >
                                        <Row gutter={[10]}>

                                            <Col span={7}>
                                                <AntForm.Item
                                                    validateStatus={errors.firstName && touched.firstName ? "error" : ""}
                                                    help={
                                                        errors.firstName && touched.firstName ? (
                                                            <span className="form-error">{errors.firstName}</span>
                                                        ) : null
                                                    }
                                                >
                                                    <Input
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className="name-input"
                                                        name="firstName"
                                                        value={values.firstName}
                                                        placeholder="First Name"
                                                    ></Input>
                                                </AntForm.Item>
                                            </Col>

                                            <Col span={7}>
                                                <AntForm.Item
                                                    validateStatus={errors.lastName && touched.lastName ? "error" : ""}
                                                    help={
                                                        errors.lastName && touched.lastName ? (
                                                            <span className="form-error">{errors.lastName}</span>
                                                        ) : null
                                                    }
                                                >
                                                    <Input
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className="name-input"
                                                        name="lastName"
                                                        value={values.lastName}
                                                        placeholder="Last Name"
                                                    ></Input>
                                                </AntForm.Item>
                                            </Col>

                                            <Col span={14}>
                                                <AntForm.Item
                                                    validateStatus={errors.email && touched.email ? "error" : ""}
                                                    help={
                                                        errors.email && touched.email ? (
                                                            <span className="form-error">{errors.email}</span>
                                                        ) : null
                                                    }
                                                >
                                                    <Input
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className="email-input"
                                                        name="email"
                                                        value={values.email}
                                                        placeholder="Email Address"
                                                    ></Input>
                                                </AntForm.Item>
                                            </Col>

                                            <Col span={14}>
                                                <AntForm.Item
                                                    validateStatus={errors.password && touched.password ? "error" : ""}
                                                    help={
                                                        errors.password && touched.password ? (
                                                            <span className="form-error">{errors.password}</span>
                                                        ) : null
                                                    }
                                                >
                                                    <Input.Password
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className="password-input"
                                                        name="password"
                                                        value={values.password}
                                                        placeholder="***"
                                                    ></Input.Password>
                                                </AntForm.Item>
                                            </Col>
                                        </Row>

                                        <Col span={14} className="sign-up-actions">
                                            <Button className="register-btn" htmlType="submit">Register</Button>
                                        </Col>

                                        <p className="form-description">
                                            By continuing, you agree to our{" "}
                                            <a href="#" className="agree-to-terms">Terms of Service</a>
                                            <span className="ampersand"> & </span>
                                            <a href="#" className="agree-to-terms">Privacy Policy</a>
                                        </p>

                                    </AntForm>

                                </>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </div>
        </section >
    )
}

export default SignUp