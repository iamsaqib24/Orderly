import React from "react";
import boyImage from "../assets/me-light.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

export default function Contact() {
  return (
    <div className="mt-5 w-[90%] h-[25.2rem]  m-auto text-center pt-5">
      <img
        src={boyImage}
        alt="Shrey Sinha"
        className="w-[10rem] h-[15rem] m-auto"
      ></img>
      <div className="flex flex-wrap justify-center mb-10">
        <a href="https://www.linkedin.com/in/iamsaqib24/">
          <img
            src={linkedin}
            alt="linkedin"
            className="w-20 h-20 cursor-pointer"
          ></img>
        </a>
        <a href="https://twitter.com/iamsaqib24">
          <img
            src={twitter}
            alt="twitter"
            className="w-20 h-20 cursor-pointer"
          ></img>
        </a>
        <a href="https://github.com/iamsaqib24">
          <img
            src={github}
            alt="github"
            className="w-20 h-20 cursor-pointer"
          ></img>
        </a>
      </div>
    </div>
  );
}
