import React, { useContext } from "react";
import { Context } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faMultiply } from "@fortawesome/free-solid-svg-icons";

const MenuOptions = () => {
  const { setShowMenu } = useContext(Context);
  return (
    <div className="absolute bg-amber-50 w-[100vw]">
      <div className=" ml-5 sm:flex justify-around  ">
        <div>
          {/* col-1 */}
          <div
            onClick={() => setShowMenu(false)}
            className=" right-4 top-1.5 absolute cursor-pointer sm:hidden"
          >
            <FontAwesomeIcon icon={faMultiply} size="lg" />
          </div>
          <h3 className=" text-xs mb-3">Quick Access Links</h3>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Order Now</p>
            <p className="text-xs">Place your order for immediate assistance</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Track Delivery</p>
            <p className="text-xs">Follow your package in real time</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Chat Support</p>
            <p className="text-xs">Get help from our chatbot anytime</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">User Account</p>
            <p className="text-xs">Manage your orders and preferences here.</p>
          </div>
        </div>
        {/* col-2 */}
        <div>
          <h3 className=" text-xs mb-3">Additional Features</h3>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">FAQs</p>
            <p className="text-xs">Find answers to common questions.</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Contact Us</p>
            <p className="text-xs">Reach out for support and inquiries.</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Feedback</p>
            <p className="text-xs">Share your thoughts with us</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Blog</p>
            <p className="text-xs">Read our latest updates and tips</p>
          </div>
        </div>
        {/* col-3 */}
        <div>
          <h3 className=" text-xs mb-3">Explore More Pages</h3>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Privacy Policy</p>
            <p className="text-xs">Understand how we protect your data.</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Terms of Use</p>
            <p className="text-xs">Learn more about service.</p>
          </div>
        </div>
        {/* col-4 */}
        <div>
          <h3 className=" text-xs mb-3">Connect With Us</h3>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Social Media</p>
            <p className="text-xs">Follow us for updates and news </p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Help Desk</p>
            <p className="text-xs">Contact us for any issues</p>
          </div>
          <div className="mb-3">
            <p className="text-sm font-bold text-red-900">Support Center </p>
            <p className="text-xs">Get assistance with your orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOptions;
