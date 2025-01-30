import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div>
      <div className="w-full py-5 bg-red-900 text-white text-sm px-1 flex justify-between">
        <div>
          Ready to get started?{" "}
          <a className="underline-offset-1" href="/signup">
            Sign up for free
          </a>
        </div>
        <div className="mr-5 text-md">
          <a className="mr-10" href="/chat">
            Chat
          </a>
          <a href="/help">Help</a>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row gap-5">
        <img
          className=" w-full md:w-[50vw] bg-cover "
          src={assets.hero}
          alt=""
        />

        <div className="w-full md:w-[50vw]  flex flex-col  justify-center gap-3 p-6 ">
          <div className="font-Prata text-2xl sm:2xl md:text-4xl font-bold text-red-900 text-Prata p-2">
            Emergency Drone <br />
            Deliveries at Your Fingertips
          </div>
          <div className="text-xs p-2">
            Welcome to DROMED, where urgent needs meet cutting-edge drone
            technology. Our service ensures swift delivery of essential items
            right when you need them most.
          </div>
          <div className="flex gap-4">
            <button className=" bg-red-900 py-3 px-4  rounded text-white cursor-pointer">
              Order
            </button>
            <button className=" border border-red-900 text-xs  px-4 rounded cursor-pointer ">
              Create your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
