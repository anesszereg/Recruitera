import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For Bootstrap JS functionality
import imageSignUp from '../assets/images/register.svg'
const SignUp = () => {
  return (
    <>
      {/* Start: Navbar Centered Links */}
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span>
              <br />Recruitera<br />
              <br />
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto"></ul>
          </div>
        </div>
      </nav>
      {/* End: Navbar Centered Links */}

      <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
          <div className="row">
            <div className="col-md-6 text-center">
              <img className="img-fluid w-100" src={imageSignUp} alt="Register" />
            </div>
            <div className="col-md-5 col-xl-4 text-center text-md-start">
              <h2 className="display-6 fw-bold mb-5">
                <span className="underline pb-1">
                  <strong>Sign up</strong>
                </span>
              </h2>
              <form method="post">
                <div className="mb-3">
                  <input className="shadow-sm form-control" type="email" name="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input className="shadow-sm form-control" type="password" name="password" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <input className="shadow-sm form-control" type="password" name="password_repeat" placeholder="Repeat Password" />
                </div>
                <div className="mb-5">
                  <button className="btn btn-primary shadow" 
                  onClick={()=>navigate('/Dashboard/Home')}
                  >
                    Create account
                  </button>
                </div>
              </form>
              <p className="text-muted">
                Have an account?{" "}
                <a  onClick={
                    ()=>navigate('/')
                }>
                  Log in&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-arrow-narrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12h14"></path>
                    <path d="M15 16l4-4"></path>
                    <path d="M15 8l4 4"></path>
                  </svg>
                </a>&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start: Footer Multi Column */}
      <footer></footer>
      {/* End: Footer Multi Column */}
    </>
  );
};

export default SignUp;
