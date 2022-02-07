import React from "react";

export default function Suggested(d) {
  return (
    <div className="m-0 sn" id={d.id}>
      <div className="card static h-max overflow-hidden">
        <h2 class=" w-full text-xl font-medium mt-2 text-gray-800 capitalize text-center md:text-2xl">
          Recommended Articles
        </h2>

        <div class="flex items-center justify-center w-full overflow-auto ">
          <div class="flex px-4 gap-2 mt-4 w-full lg:justify-center">
            <div class=" text-left">
              <div class="w-48 h-48 m-2">
                <img
                  class="object-cover w-full h-full object-center  mx-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                  alt="avatar"
                />
              </div>

              <div class="mt-2 pl-2">
                <h3 class="text-sm font-medium text-gray-700 ">Ahmed Omer</h3>
              </div>
            </div>

            <div class="w-ful l ma x-w-xs text-left">
              <div class="w-48 h-48 m-2">
                <img
                  class="object-cover w-full h-full object-center mx-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
              </div>

              <div class="mt-2 pl-2">
                <h3 class="text-sm font-medium text-gray-700 ">Jane Doe</h3>
              </div>
            </div>

            <div class="w-ful l ma x-w-xs text-left">
              <div class="w-48 h-48 m-2">
                <img
                  class="object-cover w-full h-full object-center mx-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                  alt="avatar"
                />
              </div>

              <div class="mt-2 pl-2">
                <h3 class="text-sm font-medium text-gray-700 ">Steve Ben</h3>
              </div>
            </div>

            <div class="w-ful l ma x-w-xs text-left">
              <div class="w-48 h-48 m-2">
                <img
                  class="object-cover w-full h-full object-center mx-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  alt="avatar"
                />
              </div>

              <div class="mt-2 pl-2">
                <h3 class="text-sm font-medium text-gray-700 ">Steve Ben</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
