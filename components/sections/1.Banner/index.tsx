import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-cyan-400 min-h-[560px] h-fit -z-10">
      <div className=" container">
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5">
          <div>
            <h1 className="text-5xl font-extrabold">Hi, call me Jeff</h1>
            <p className="text-xl py-2 font-medium">
              I am a self taught developer of 4 years experience, 2 of which
              derived from a background in accounting and finance.
            </p>
            <p className="text-lg select-none">
              🔭 I am currently working on my own freelance website
            </p>
            <p className="text-lg select-none">
              🌱 I am currently learning to find ways to use github more
              organized in my projects
            </p>
            <p className="text-lg select-none">
              🚀 I am striving to be a remote full-stack developer
            </p>
            <p className="text-lg select-none">
              🤝 I hope to collaborate with small business who wish to improve
              their online presences
            </p>
            <p className="text-lg select-none">
              🔥 I enjoy learning, martial arts and programming
            </p>
            <p className="text-lg select-none">
              📍 I am based in Jakarta, Indonesia.
            </p>
            <p className="text-lg select-none">🌏 I am from Malaysia</p>
            <div className="py-6">
              <Button className="px-8 bg-yellow-400 hover:bg-yellow-500 text-lg font-bold text-black">
                Hire Me
              </Button>
            </div>
          </div>
          <div className="bg-[url(/Jeff.jpg)] bg-cover bg-no-repeat rounded-lg shadow-md min-h-[350px] w-full mb-6 "></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
