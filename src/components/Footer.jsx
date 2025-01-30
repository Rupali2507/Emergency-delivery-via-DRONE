import React, { useContext } from "react";
import { Context } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { assets } from "../assets/assets";

const Footer = () => {
  const { navigate } = useContext(Context);
  return (
    <div className="bg-red-900 p-10 flex flex-col gap-10  text-xs text-white ">
      <div className="flex flex-col   md:flex-row gap-5 ">
        {/* 1 */}
        <div className="gap-4 md:w-1/2 flex flex-col ">
          <div>
            <img className="w-1/4" src={assets.logo} alt="" />
          </div>
          <div className=" flex flex-col gap-4">
            <div className="">
              Subscribe to our newsletter for the latest updates on features and
              services.
            </div>
            <div className="flex  gap-2">
              <input
                className="px-6 py-2 border"
                type="email"
                placeholder="Your email here"
              />
              <button className="px-6 py-2 border">Join</button>
            </div>
            <div className="text-black">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex  md:w-1/2 justify-between md:mt-30">
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-sm font-medium pb-1.5">
              Quick Links
            </h1>
            <div className="cursor-pointer" onClick={() => navigate("/about")}>
              About Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/services")}
            >
              Services
            </div>
            <div className="cursor-pointer" onClick={() => navigate("/about")}>
              Support
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-sm font-medium pb-1.5">Resources</h1>
            <div className="cursor-pointer" onClick={() => navigate("/about")}>
              FAQ
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/services")}
            >
              Testimonials
            </div>
            <div className="cursor-pointer" onClick={() => navigate("/about")}>
              Our happy constomers
            </div>
            <div
              className="cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              success story
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-sm font-medium pb-1.5">
              Connect With Us
            </h1>
            <div
              className="cursor-pointer flex gap-2"
              onClick={() => navigate("/facebook")}
            >
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </div>
            <div
              className="cursor-pointer flex gap-2"
              onClick={() => navigate("/instagram")}
            >
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </div>
            <div
              className="cursor-pointer flex gap-2"
              onClick={() => navigate("/x")}
            >
              <FontAwesomeIcon icon={faXTwitter} />X
            </div>
            <div
              className="cursor-pointer flex gap-2"
              onClick={() => navigate("/contact")}
            >
              <FontAwesomeIcon icon={faYoutube} />
              YouTube
            </div>
          </div>
        </div>
        {/* 3 */}
      </div>
      <div>
        <hr className="border border-black" />
        <div className="text-black mt-2 flex justify-between">
          <div> @ 2025 DROMED. All rights reserved.</div>
          <div className=" flex justify-around gap-2">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/privacy");
              }}
            >
              Privacy Policy
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/terms");
              }}
            >
              Terms Of services
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate("/cookies");
              }}
            >
              Cookies Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
