import { Link } from "react-router-dom";
import React from "react";

export default function Register() {
  return (
    <section className="">
      <div className="absolute zn1">
        <img src="/img/hero.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-5 col-lg-7 col-md-9 mt-150">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="contactForm border-1 rounded-12 px-40 pt-20 pb-40 md:px-25 md:py-30 bg-white"
            >
              <div className="text-center mb-20 md:mb-30">
                <h1 className="text-30">Register</h1>
                <div className="text-16 fw-300 mt-0 md:mt-15">
                  Let's create your account!
                </div>
              </div>
              <div className="form-input mt-20">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">First Name*</label>
              </div>

              <div className="form-input mt-20">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Last Name*</label>
              </div>
              <div className="form-input mt-20">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Mobile*</label>
              </div>
              <div className="form-input mt-20">
                <input type="email" required />
                <label className="lh-1 text-16 text-light-1">Your Email*</label>
              </div>

              <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
                <b> Register </b>
                <i className="icon-arrow-top-right ml-10"></i>
              </button>

              <div className="relative line mt-50 mb-30">
                <div className="line__word fw-500">OR</div>
              </div>
              <div className="row y-gap-15">

                <div className="col">
                  <button className="button -md -outline-red-1 text-red-1 col-12">
                    <i className="icon-google mr-10"></i>
                    Continue Google
                  </button>
                </div>
              </div>
              <div className="mt-20 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-accent-1">
                  Log In!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
