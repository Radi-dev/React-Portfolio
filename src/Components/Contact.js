import React from "react";
import { Title } from "./title";

export default function Contact(d) {
  return (
    <div className="wrapper min-h-screen max-w-full" id={d.id}>
      <div className="card h-max py-5 mb-8">
        <div className="bg-mygray flex flex-col border border-gray-900 rounded-lg p-6 box-border">
          <div className="text-white mt-10">
            <h1 className="font-bold text-4xl">Contact me</h1>
            <p className="font-semibold">
              <a href="mailto:">
                <Title text={"Send me an email!"} />
              </a>
            </p>
          </div>
          <form className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-10 text-white">
            <div className="flex flex-col space-y-8">
              <input
                type="text"
                placeholder="Full name"
                className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"
              />

              <input
                type="text"
                placeholder="Email"
                className="border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500"
              />
            </div>
            <textarea
              name="textarea"
              placeholder="text..."
              rows="8"
              className="border rounded-lg py -3 p x-3 bg-gray-700 border-gray-700 placeholder-gray-500"
            ></textarea>
            <button className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold md:col-span-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
