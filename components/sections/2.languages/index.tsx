"use client";
import React, { useEffect } from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const LanguagesList = [
  {
    id: 1,
    lang: "HTML5",
    icon: IoLogoHtml5,
  },
  {
    id: 2,
    lang: "CSS3",
    icon: IoLogoCss3,
  },
  {
    id: 3,
    lang: "JAVASCRIPT",
    icon: IoLogoJavascript,
  },
  {
    id: 4,
    lang: "PYTHON",
    icon: IoLogoPython,
  },
  {
    id: 5,
    lang: "Node.js",
    icon: IoLogoNodejs,
  },
  {
    id: 6,
    lang: "Django",
    icon: SiDjango,
  },
  {
    id: 7,
    lang: "React",
    icon: IoLogoReact,
  },
  {
    id: 8,
    lang: "Tailwindcss",
    icon: SiTailwindcss,
  },
  {
    id: 9,
    lang: "Supabase",
    icon: SiSupabase,
  },
  {
    id: 10,
    lang: "Redux",
    icon: SiRedux,
  },
];

const Languages = () => {
  useEffect(() => {
    console.log("Component rendered");
  }, []);
  return (
    <div className="bg-lime-300 h-[130px] z-20 overflow-x-clip">
      <div className="py-8 shadow-lg bg-red-700 skew-y-[4deg] relative -top-6">
        <div className="flex items-center gap-x-6 animate-loop-scroll">
          {LanguagesList.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-center gap-3">
                <item.icon className="text-white" size={38} />
                <p className="text-white font-semibold text-2xl">{item.lang}</p>
              </div>
            </div>
          ))}
          {LanguagesList.map((item) => (
            <div key={item.id} aria-hidden="true">
              <div className="flex items-center justify-center gap-3">
                <item.icon className="text-white" size={38} />
                <p className="text-white font-semibold text-2xl">{item.lang}</p>
              </div>
            </div>
          ))}
          {LanguagesList.map((item) => (
            <div key={item.id} aria-hidden="true">
              <div className="flex items-center justify-center gap-3">
                <item.icon className="text-white" size={38} />
                <p className="text-white font-semibold text-2xl">{item.lang}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
