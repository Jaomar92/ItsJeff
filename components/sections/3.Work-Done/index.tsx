import React from "react";

const Work = () => {
  return (
    <div className="bg-lime-300">
      <div className="container">
        <h2 className="font-bold text-3xl">My Journey</h2>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[url(/macawesome.jpg)] bg-cover min-h-[300px] rounded-md  shadow-[0px 20px 0]"></div>
          <div>
            <p className="text-lg font-medium">
              Embarking on my journey in the programming world has been an
              enriching experience, one that began with humble steps during the
              pandemic. What started with learning HTML and CSS soon evolved as
              I delved into the depths of JavaScript.
            </p>
            <p className="text-lg font-medium">
              <br />
              Transitioning from free YouTube tutorials to investing in
              platforms like Codecademy marked a significant shift in my
              approach. It was a journey of self-discovery, where I realized the
              vast potential programming holds, even in fields seemingly distant
              like accounting and finance.
            </p>
            <p className="text-lg font-medium">
              <br />
              With each project, I find a renewed sense of fulfillment,
              witnessing my ideas materialize into functional creations. The
              learning curve is steep, but the joy of seeing my work come to
              life makes every challenge worthwhile.
            </p>
            <p className="text-lg font-medium">
              <br />
              The Moto I live by:- <br />
              <br />
              <span className="text-xl font-bold">
                <em>Wing it don't swing it, But if you gotta than swing it.</em>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
