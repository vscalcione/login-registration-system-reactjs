import React from "react";
import CameraSolidSvg from "../../assets/camera-solid.svg";
import ProfileIcon from "../../assets/profile/profile-icon.png";

import AOS from "aos";
import "aos/dist/aos.css";

export const ProfileImageComponent = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <>
      <div className="upload-profile-image d-flex justify-content-center pb-5">
        <div className="text-center" data-aos="fade-right" data-aos-delay="100">
          <div className="d-flex justify-content-center">
            <img
              className="camera-icon"
              src={CameraSolidSvg}
              alt="camera-solid-svg"
            />
          </div>
          <img
            src={ProfileIcon}
            className="img rounded-circle"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <small className="form-text text-black-50">
            Choose a Profile Image
          </small>
          <input
            type="file"
            className="form-control-file"
            name="profileUpload"
            id="upload-profile"
          />
        </div>
      </div>
    </>
  );
};
