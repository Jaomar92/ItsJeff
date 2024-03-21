import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <div>
            <a className="text-lime-300" href="https://storyset.com/work">
              Work illustrations by Storyset
            </a>
            <div>All rights to Jeffrey Aroun bin Omar 2024</div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <IoLogoInstagram
              size={28}
              className="text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
            />
            <IoLogoYoutube
              size={28}
              className="text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
            />
            <IoLogoLinkedin
              size={28}
              className="text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
            />
            <IoLogoTiktok
              size={28}
              className="text-neutral-300 hover:text-neutral-400 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
