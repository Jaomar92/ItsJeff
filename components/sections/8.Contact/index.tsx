import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-indigo-500 select-none">
      <div className="container p-8">
        <div className="border border-solid rounded-md  shadow-lg bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="min-h-[300px] p-5">
              <div
                className="p-6 bg-[url(/Mail-bro.svg)] h-[350px] bg-no-repeat bg-center bg-contain"
                style={{
                  filter:
                    "drop-shadow(10px -10px 5px rgba(225, 225, 225, 0.8))",
                }}
              ></div>
            </div>

            <div className="min-h-[300px] p-5 w-full">
              <h3 className="font-semibold text-3xl text-white underline">
                Contact Form
              </h3>
              <form className="flex flex-col">
                <label className="text-font-medium text-lg">Name</label>
                <input
                  type="text"
                  className="rounded-md text-lg p-1 my-2"
                ></input>
                <label className="text-font-medium text-lg">Email</label>
                <input
                  type="text"
                  className="rounded-md text-lg p-1 my-2"
                ></input>
                <label className="text-font-medium text-lg">
                  Project Description
                </label>
                <input
                  type="text"
                  className="rounded-md text-lg p-1 my-2"
                ></input>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
