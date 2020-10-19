import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeaderComponent = () => {
  AOS.init();

  return (
    <>
      <div
        className="text-center pb-5"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <h1
          className="login-title text-dark"
          style={{ fontFamily: "quicksand" }}
        >
          Registration/Login
        </h1>
        <p className="font-ubuntu text-black-50" id="register-p">
          Register and enjoy the additional features
        </p>
        <span className="font-ubuntu text-black-50">
          Are you already registered?
          <br />
          <button
            type=""
            className="btn btn-warning rounded-pill text-dark px-4"
            style={{ fontFamily: "quicksand", marginTop: "22px" }}
          >
            Login
          </button>
        </span>
      </div>
    </>
  );
};
