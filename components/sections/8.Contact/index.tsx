import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-500">
      <div className="container p-8">
        <div className="border border-solid rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="min-h-[300px] p-5 border-r w-[70%]">
              Contact title
            </div>

            <div className="min-h-[300px] p-5 w-full">Contact Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
