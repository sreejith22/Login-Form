import React from "react";
import LoginForm from "../components/LoginForm";
import loginImage from "../media/images/auth.png";

const Login = () => {
  return (
    <section className="authpage_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="auth_form_section">
              <div className="title_grp">
                <h1>Sign In</h1>
                <p>
                  New User? <a>Create an account</a>
                </p>
              </div>

              <LoginForm />
              <div className="socialmedia_links">
                <h3>Or Sign In With</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <span className="auth_img">
              <img src={loginImage} alt="Auth" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
