import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-lime-300">
      <div className="container">
        <div className="py-8">
          <h3 className="text-3xl font-semibold">Portfolio</h3>
          <p className="font-medium py-5 text-lg">
            This Portfolio section is complied into three sections that consist
            of client and personal development projects
          </p>
          <div className="flex flex-col gap-5">
            {/** Web-Development -- Start */}
            <div>
              <h4 className="text-2xl font-mono">Web-development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p>
                    TenX Prime both before and after Revamping & Mobile and
                    Desktop <br /> -- client
                  </p>
                </div>
                <div>
                  <p>Vite - React, Swiper.js, HTML and CSS</p>
                </div>
                <div>
                  <p>
                    Vacuum Guy
                    <br />
                    --- Personal Project
                  </p>
                </div>
                <div>
                  <p>--- Next.js, tailwindcss, Shadcn</p>
                  <p>
                    Use Next.js as it is more optimized for SEO and plan to add
                    features of a CMS to be able to provide new and designed
                    slides as seasons changed, as well as have a booking
                    session.
                  </p>
                </div>
              </div>
            </div>
            {/** Web-Development -- End */}
            {/** Data-Analytics -- Start */}
            <div>
              <h4 className="text-2xl font-mono">Data-Analytics</h4>
              <p className="text-lg font-medium">
                Projects were sourced from Kaggle
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>Kaggle Projects ---personal</div>
                <div>
                  Push it on github to showcase your analysis and demonstarate
                  your skills
                  <br />
                  <br />
                  There will probably be a list of stuff so find stuff you would
                  like to get involved with.
                </div>
              </div>
            </div>
            {/** Data-Analytics -- End */}
            {/** Training -- Start */}
            <div>
              <h4 className="text-2xl font-mono">Training</h4>
              <div className="text-3xl font-mono w-full bg-yellow-400 rounded-md mt-5">
                <div className="grid gird-cols-1 md:grid-cols-2">
                  <div
                    className="p-6 bg-[url(/WIP.svg)] h-[350px] bg-no-repeat bg-center bg-contain"
                    style={{
                      filter:
                        "drop-shadow(10px -10px 5px rgba(225, 225, 225, 0.8))",
                    }}
                  ></div>
                  <div className="text-center md:text-left py-3">
                    <h5>Coming Soon</h5>
                    <p className="text-lg font-medium">
                      Production of videos is still on going but will be
                      published on youtube.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2">
                <div>Hello</div>
                <div>Bye</div>
              </div> */}
            </div>
            {/** Training -- End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
