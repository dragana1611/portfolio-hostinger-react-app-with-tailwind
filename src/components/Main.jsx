import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen relative">
      <img
        className="w-full h-screen object-cover object-bottom"
        src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="coding"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700] m-auto w-full h-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Dragana Petrovic
          </h1>
          <h2 className="flex sm:tx3 text-2xl font-bold pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-center gap-5 pt-6 max-w-[200px] w-full">
            <a href="https://github.com/dragana1611" target="_blank">
              <FaGithub className="cursor-pointer " size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dragana-petrovic-b2059646/" target="_blank">
              <FaLinkedin className="cursor-pointer " size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
