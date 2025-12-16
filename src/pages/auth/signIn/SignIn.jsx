import "./SignIn.css"
import SignInlogo from "../../../assets/signIn-logo.svg"
import { Formik } from "formik"
import { Form as AntForm, Button, Checkbox, Input } from "antd"
import { signInSchema } from "./Validation"
import { useNavigate } from "react-router-dom"
import Banner from "../../../components/banner/Banner"

const SignIn = () => {

  const initialValues = {
    email: "",
    password: ""
  }

  const navigate = useNavigate();

  const [form] = AntForm.useForm();

  return (
    <>

      {/* <Banner /> */}

      <section className="section-padding">
        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-12 col-12">
              <img className="img-fluid" src={SignInlogo} alt="Sign in illustration" />
            </div>

            <div className="col-lg-4 col-md-12 col-12">

              <Formik
                initialValues={initialValues}
                validationSchema={signInSchema}
              >

                {({
                  errors,
                  handleSubmit,
                  touched,
                  handleBlur,
                  handleChange,
                  values
                }) => (

                  <AntForm className="auth-form" onFinish={handleSubmit} form={form} layout="vertical">

                    <div className="form-content">

                      <h1 className="signup-form-title">Sign In to FreshCart</h1>

                      <p>Welcome back to FreshCart! Enter your email to get started.</p>
                    </div>

                    <AntForm.Item
                      help={
                        errors.email && touched.email ? (
                          <span className="form-error">{errors.email}</span>
                        ) : null
                      }
                      validateStatus={errors.email && touched.email ? "error" : ""}>

                      <Input
                        className="email-input"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                      ></Input>

                    </AntForm.Item>

                    <AntForm.Item
                      help={
                        errors.password && touched.password ? (
                          <span>{errors.password}</span>
                        ) : null
                      }
                    >

                      <Input.Password
                        className="password-input"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        name="password"
                      ></Input.Password>

                    </AntForm.Item>

                    <div className="form-footer">

                      <div className="checkbox-main">

                        <Checkbox>Remember me</Checkbox>
                      </div>

                      <div className="forgot-password">

                        <p>Forgot Password?</p>

                        <a href="#" onClick={() => navigate("/forgotPassword")}>Reset It</a>

                      </div>

                    </div>

                    <div className="form-actions">
                      <Button htmlType="submit" className="sign-up-btn">Sign Up</Button>
                    </div>

                  </AntForm>

                )}

              </Formik>

            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default SignIn