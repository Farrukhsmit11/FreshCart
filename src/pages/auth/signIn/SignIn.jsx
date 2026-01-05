import "./SignIn.css"
import SignInlogo from "../../../assets/signIn-logo.svg"
import { Form as AntForm, Button, Checkbox, Col, Input, Row } from "antd"
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  const navigate = useNavigate();

  const [form] = AntForm.useForm();

  return (
    <>

      <section className="section-padding">
        <div className="section-container">

          <Row>
            <Col span={13}>
              <img className="" src={SignInlogo} alt="Sign in illustration" />
            </Col>



            <AntForm className="auth-form" form={form} layout="vertical">

              <div className="form-content">

                <h1 className="signup-form-title">Sign In to FreshCart</h1>

                <p>Welcome back to FreshCart! Enter your email to get started.</p>
              </div>

              <AntForm.Item
              >

                <Input
                  className="email-input"
                  placeholder="Email"
                  name="email"
                ></Input>

              </AntForm.Item>

              <AntForm.Item
              >

                <Input.Password
                  className="password-input"
                  placeholder="Password"
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

          </Row>
        </div>
      </section>
    </>

  )
}

export default SignIn