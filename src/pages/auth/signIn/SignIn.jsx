import "./SignIn.css"
import SignInlogo from "../../../assets/signIn-logo.svg"
import { Form as AntForm, Button, Checkbox, Col, Input, Row } from "antd"
import { Formik } from "formik"
import { signInSchema } from "./Validation"
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  const [form] = AntForm.useForm();

  const initialValues = {
    email: "",
    password: ""
  }

  const handlesubmit = (values, { resetForm }) => {
    console.log(values);
    form.resetFields();
    resetForm()
  }

  const navigate = useNavigate()

  return (
    <>
      <section className="auth-section">
        <div className="section-container">
          <Row gutter={[16, 16]} align="middle">
            <Col lg={11}>
              <img className="" src={SignInlogo} alt="Sign in illustration" />
            </Col>

            <Formik
              initialValues={initialValues}
              validationSchema={signInSchema}
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

                <Col lg={8} md={24} sm={24} order={2}>
                  <AntForm
                    onFinish={handleSubmit}
                    className="auth-form"
                    form={form} layout="vertical">

                    <div className="form-content">

                      <h1 className="signup-form-title">Sign In to FreshCart</h1>

                      <p>Welcome back to FreshCart! Enter your email to get started.</p>
                    </div>

                    <AntForm.Item
                      className="form-item"
                      validateStatus={errors.email && touched.email ? "error" : ""}
                      help={
                        errors.email && touched.email ? (
                          <span className="form-error">{errors.email}</span>
                        ) : null
                      }
                    >
                      <Input
                        className="email-input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                        value={values.email}
                        name="email"
                      ></Input>

                    </AntForm.Item>

                    <AntForm.Item
                      validateStatus={errors.password && touched.password ? "error" : ""}
                      help={
                        errors.password && touched.password ? (
                          <span className="form-error">{errors.password}</span>
                        ) : null
                      }
                      className="form-item"
                    >
                      <Input.Password
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className="password-input"
                        placeholder="****"
                        name="password"
                      ></Input.Password>

                    </AntForm.Item>

                    <div className="auth-form-content">

                      <div className="form-check">

                        <Checkbox className="form-check-input">Remember me</Checkbox>

                      </div>

                      <div className="forgot-password-main">
                        Forgot Password?
                        <a href="#" onClick={() => navigate("/forgotPassword")}>Reset it</a>
                      </div>
                    </div>

                    <div className="form-actions">
                      <Button htmlType="submit" className="sign-in-btn">Sign In</Button>
                    </div>

                    <div className="auth-footer">
                      <p>Don't have an account?</p>
                      <a href="#" onClick={() => {
                        navigate("/signUp")
                      }}>Sign Up</a>
                    </div>

                  </AntForm>
                </Col>
              )

              }
            </Formik>
          </Row>
        </div>
      </section >

    </>

  )
}

export default SignIn