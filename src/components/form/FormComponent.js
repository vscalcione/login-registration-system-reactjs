import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { withRouter, useLocation } from "react-router-dom";

export const FormComponent = withRouter(({ history }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  AOS.init({
    duration: 1000,
  });

  const AgreementComponent = () => {
    return (
      <>
        <div
          className="form-check form-check-inline"
          style={{ marginTop: "23px" }}
        >
          <input
            type="checkbox"
            name="agreement"
            className="form-check-input"
            required
          />
          <label
            htmlFor="agreement"
            className="form-check-label font-ubuntu text-black-50"
          >
            Accepts terms, conditiions and policies (*)
          </label>
        </div>
      </>
    );
  };

  const Form = () => {
    return (
      <>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              placeholder="First Name "
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-row my-4">
          <div className="col">
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              className="form-control"
              placeholder="Birth Date"
            />
          </div>
        </div>
        <div className="form-row my-4">
          <div className="col">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password "
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm Password "
              required
            />
          </div>
        </div>
      </>
    );
  };

  const CustomFormComponent = () => {
    return (
      <>
        <div className="form-row my-4">
          <div className="col">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="form-row my-4">
          <div className="col">
            <input
              type="text"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password "
              required
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          id="registration-form"
        >
          {currentUrl === "/" ? <Form /> : <CustomFormComponent />}

          {currentUrl === "/" ? <AgreementComponent /> : ""}
          <div className="submit-btn text-center my-5">
            <button
              type=""
              className="btn btn-warning rounded-pill text-dark px-5"
              style={{ fontFamily: "quicksand" }}
            >
              {currentUrl === "/" ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
});
