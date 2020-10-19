import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { withRouter, useHistory, useLocation } from "react-router-dom";

export const HeaderComponent = withRouter(({ history }) => {
  AOS.init();

  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      <div
        className="text-center pb-5"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1
          className="login-title text-dark"
          style={{ fontFamily: "quicksand" }}
        >
          {currentUrl === "/" ? "Registration" : "Login"}
        </h1>
        <p className="font-ubuntu text-black-50" id="register-p">
          {currentUrl === "/"
            ? "Register and enjoy the additional features"
            : ""}
        </p>
        <span className="font-ubuntu text-black-50">
          {currentUrl === "/"
            ? "Are you already registered?"
            : "Are you already not registered?"}
          <br />
          <button
            type=""
            className="btn btn-warning rounded-pill text-dark px-4"
            style={{ fontFamily: "quicksand", marginTop: "22px" }}
            onClick={() => {
              history.push("/login");
            }}
          >
            {currentUrl === "/" ? "Login" : "Register"}
          </button>
        </span>
      </div>
    </>
  );
});
