import React from "react";

const Work = () => {
  return (
    <div className="bg-lime-300">
      <div className="container">
        <h2 className="font-bold text-3xl">My Journey</h2>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-[url(/macawesome.jpg)] bg-cover min-h-[300px] rounded-md shadow-lg"></div>
          <div>
            <p className="text-lg font-medium">
              Its been a long lonely journey in the programming world for me.
              What started off as just simply learning HTML and CSS during the
              pandemic all changed when I learnt javascript.
            </p>
            <p className="text-lg font-medium">
              <br />
              From Free Youtube tutorials using only sublime to investing in
              myself in Codecademy. I would have never imaged the opportunities
              programming has given me in applying in what I learned in my first
              job in accounting and finance.
            </p>
            <p className="text-lg font-medium">
              <br />
              There is a lot to learn but I geniuely enjoy seeing my creations
              and work come to life.
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
