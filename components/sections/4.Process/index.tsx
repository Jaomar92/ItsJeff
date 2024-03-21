import React from "react";

const Process = () => {
  return (
    <div className="bg-slate-800 text-white pb-6">
      <div className="container">
        <div className="py-8">
          <h3 className="text-4xl font-semibold text-center">Services</h3>
        </div>
        <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border border-solid rounded-md p-5">
            <h4 className="text-2xl font-mono text-center mb-6">
              Web Development
            </h4>
            <div className="bg-[url(/Coding.svg)] h-[320px] bg-no-repeat bg-center bg-cover"></div>
            <p className="pt-5 text-lg font-medium text-center">
              From plain HTML & CSS for e-mail templates to full stack
              applications with API integrations that allow payments, user
              management systems, CMS and dash-boards to keep track of monthly
              KPI's.
            </p>
          </div>
          <div className="border border-solid rounded-md p-5">
            <h4 className="text-2xl font-mono text-center mb-6">
              Data Analytics
            </h4>
            <div className="bg-[url(/Data-bro.svg)] h-[320px] bg-no-repeat bg-center bg-cover"></div>
            <p className="pt-5 text-lg font-medium text-center">
              Got Data in need of finding opportunities. With Python mixed in
              with other libraries we can perform some insights for your
              business needs.
            </p>
          </div>
          <div className="border border-solid rounded-md p-5">
            <h4 className="text-2xl font-mono text-center mb-6">Training</h4>
            <div className="bg-[url(/team-bro.svg)] h-[320px] bg-no-repeat bg-center bg-cover"></div>
            <p className="pt-5 text-lg font-medium text-center">
              In need in some coaching. I prepare training modules for HTML,CSS
              and Javascript to bring novices up to speed on fundamental
              concepts of front-end developement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
