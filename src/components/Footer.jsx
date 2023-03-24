import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#001b5e] text-white md:px-14 md:pt-12 px-4 pt-16 pb-5">
      <h2 className="text-center text-xl font-bold mt-9 mb-5">
        Portfolio Exercise
      </h2>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-around items-top">
          <div className="flex flex-col">
            <h3 className="text-left text-lg font-bold pb-3 hover:text-stone-400">
              About
            </h3>
            <a className="inline-block  hover:text-stone-400" href="#">
              Aim
            </a>
            <a className="inline-block  hover:text-stone-400" href="#">
              Vision
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-center text-lg font-bold pb-3 hover:text-stone-400">
              Contact
            </h3>
            <a className="inline-block hover:text-stone-400" href="#contact">
              <FaMailBulk className="inline-block mr-1" /> Email
            </a>
            <a
              className="inline-block  hover:text-stone-400"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <FaPhone className="inline-block mr-1" />
              Phone
            </a>
          </div>
          <div className="flex flex-col">
            <h3 className="text-left text-lg font-bold pb-3 hover:text-stone-400">
              Social Media
            </h3>
            <div className="flex flex-row justify-around">
              <a
                className="inline-block mr-2 hover:text-stone-400"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <FaFacebook size={18} />
              </a>
              <a
                className="inline-block mr-2 hover:text-stone-400"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <FaInstagram size={18} />
              </a>
              <a
                className="inline-block mr-2 hover:text-stone-400"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <FaTwitter size={18} />
              </a>
              <a
                className="inline-block mr-2 hover:text-stone-400"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center pt-9">
          <p>Copyright © 2023</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
