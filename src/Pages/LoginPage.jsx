import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lgin_image from '../assets/images/login.svg'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <>
      {/* Start: Navbar Centered Links */}
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span>
              <br />
              Recruitera
              <br />
              <br />
            </span>
          </a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto"></ul>
            <a className="btn btn-primary shadow" role="button" 
            onClick={()=>navigate('/Signup')}
            >Sign up</a>
          </div>
        </div>
      </nav>
      {/* End: Navbar Centered Links */}

      {/* Start: Login Form */}
      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                className="img-fluid w-100"
                src={Lgin_image}
                alt="Login Illustration"
              />
            </div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5">
                <span className="underline pb-1">
                  <strong>Login</strong>
                  <br />
                </span>
              </h2>
              <form method="post">
                <div className="mb-3">
                  <input className="shadow form-control" type="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input className="shadow form-control" type="password" name="password" placeholder="Password" />
                </div>
                <div className="mb-5">
                  <button className="btn btn-primary shadow" type="submit" onClick={()=>navigate('/Dashboard/Home')} >Log in</button>
                </div>
              </form>
              <p className="text-muted">
                <a href="forgottenPassword.html">Forgot your password?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End: Login Form */}

      {/* Start: Footer Multi Column */}
      <footer></footer>
      {/* End: Footer Multi Column */}
    </>
  );
};

export default LoginPage;
