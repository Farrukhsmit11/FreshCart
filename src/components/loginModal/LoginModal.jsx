import { Formik } from "formik"
import { validationSchema } from "./Validations"
import { Modal, Form as AntForm, Input, Button, message } from "antd";
import "./LoginModal.css"
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpenloginModal, setIsOpenloginModal }) => {

    const [form] = AntForm.useForm();

    const initialValues = {
        name: "",
        email: "",
        password: ""
    }

    const handlesubmit = (values) => {
        setIsOpenloginModal(false);
        console.log(values);
    }

    const navigate = useNavigate();

    return (
        <Modal
            title={<span><h1 className="modal-title">Sign Up</h1></span>}
            open={isOpenloginModal}
            footer={
                <span>
                    <h1 className="footer-title">Already have an account? <a onClick={() => navigate("/signIn")} href="#">Sign In</a></h1>
                </span>
            }
            onCancel={() => setIsOpenloginModal(false)}
            destroyOnClose
            className="login-modal">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handlesubmit}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                    values,
                }) => (

                    <AntForm
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        className="sign-up-form"
                    >
                        <AntForm.Item
                            label={<span className="form-label">Name</span>}
                            validateStatus={errors.name && touched.name ? "error" : ""}
                            help={
                                errors.name && touched.name ? (
                                    <span className="form-error">{errors.name}</span>
                                ) : null
                            }
                        >
                            <Input
                                className="form-input"
                                name="name"
                                placeholder="Enter Your Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                            </Input>
                        </AntForm.Item>

                        <AntForm.Item
                            label={<span className="form-label">Email address</span>}
                            validateStatus={errors.email && touched.email ? "error" : ""}
                            help={
                                errors.email && touched.email ? (
                                    <span className="form-error">{errors.email}</span>
                                ) : null
                            }
                        >
                            <Input
                                name="email"
                                className="form-input"
                                placeholder="Enter Your Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </AntForm.Item>

                        <AntForm.Item
                            label={<span className="form-label">Password</span>}
                            validateStatus={errors.password && touched.password ? "error" : ""}
                            help={
                                errors.password && touched.password ? (
                                    <span className="form-error">{errors.password}</span>
                                ) : null
                            }
                        >
                            <Input.Password
                                type="password"
                                name="password"
                                className="form-input"
                                placeholder="Enter your Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <div className="signup-terms">
                                <p>By Signup, you agree to our <a href="#">Terms of Service & Privacy Policy</a></p>
                            </div>

                        </AntForm.Item>

                        <div className="form-actions">
                            <Button
                                type="default"
                                className="submit-btn"
                                htmlType="submit"
                            >Sign Up</Button>
                        </div>
                    </AntForm>
                )}
            </Formik>
        </Modal>
    )
}

export default LoginModal