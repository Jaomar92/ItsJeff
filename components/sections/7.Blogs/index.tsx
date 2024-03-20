import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div className="py-8">
        <h3 className="text-3xl font-bold">My personal Journal</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        <div className="h-[300px] w-full bg-lime-500 rounded-md shadow-lg"></div>
        <div className="h-[300px] w-full bg-sky-500 rounded-md shadow-lg"></div>
        <div className="h-[300px] w-full bg-teal-500 rounded-md shadow-lg"></div>
        <div className="h-[300px] w-full bg-orange-500 rounded-md shadow-lg"></div>
      </div>
    </div>
  );
};

export default Blogs;
