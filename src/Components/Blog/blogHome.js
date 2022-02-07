import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Setup from "../Setup";
export default function BlogHome(d = "blog") {
  return (
    <div className=" card overflow-hidden bg -white h-full mx-auto w-full relative ">
      <div className="  h-full m-0 sn mt-2" id={d.id}>
        <div class="overflow-y-scroll mt-20 h-full space-y-3 lg:bg-gray-50 border-gray-400 border z-10 rounded-lg mb-3">
          <div class="bg- gray-200 h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div class="mb-3">
              <h1 class="text-3xl font-bold">Today</h1>
              <p class="text-sm text-gray-500 uppercase font-bold">
                THURSDAY 6 AUGUST
              </p>
            </div>
            <div class="mb-5">
              <a
                href="#"
                class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center",
                  backgroundSize: "cover",
                }}
              >
                <div class="absolute top-0 right-0 -mt-3 mr-3">
                  <div class="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
                    <i class="mdi mdi-fire text-base align-middle"></i>{" "}
                    <span class="align-middle">FRESH</span>
                  </div>
                </div>
                <div class="h-48"></div>
                <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                  Tasnim Lacey New Album Out&nbsp;Now
                </h2>
                <div class="flex w-full items-center text-sm text-gray-300 font-medium">
                  <div class="flex-1 flex items-center">
                    <div
                      class="rounded-full w-8 h-8 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Gwen Thomson</div>
                  </div>
                  <div>
                    <i class="mdi mdi-thumb-up"></i> 18
                  </div>
                </div>
              </a>
            </div>
            <div class="mb-5">
              <a
                href="#"
                class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80) center",
                  backgroundSize: "cover",
                }}
              >
                <div class="h-48"></div>
                <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">
                  Top 5 Cocktail Bars in&nbsp;NYC
                </h2>
                <div class="flex w-full items-center text-sm text-gray-300 font-medium">
                  <div class="flex-1 flex items-center">
                    <div
                      class="rounded-full w-8 h-8 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/women/55.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Kayden Buckley</div>
                  </div>
                  <div>
                    <i class="mdi mdi-thumb-up"></i> 7
                  </div>
                </div>
              </a>
            </div>
            <div class="mb-3">
              <h1 class="text-3xl font-bold">Yesterday</h1>
              <p class="text-sm text-gray-500 uppercase font-bold">
                WEDNESDAY 5 AUGUST
              </p>
            </div>
            <div class="flex -mx-1 mb-5">
              <div class="w-1/2 px-1">
                <a
                  href="#"
                  class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="h-24"></div>
                  <h3 class="text-lg font-bold text-white leading-tight">
                    DJ Dan Spins The Wheels
                  </h3>
                </a>
                <a
                  href="#"
                  class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="h-32"></div>
                  <h3 class="text-lg font-bold text-white leading-tight">
                    Top Travels Destinations For 2020
                  </h3>
                </a>
              </div>
              <div class="w-1/2 px-1">
                <a
                  href="#"
                  class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="h-32"></div>
                  <h3 class="text-lg font-bold text-white leading-tight">
                    M&S Launches New Makeup Range!
                  </h3>
                </a>
                <a
                  href="#"
                  class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="h-24"></div>
                  <h3 class="text-lg font-bold text-white leading-tight">
                    APT Set To Be A&nbsp;Ripper
                  </h3>
                </a>
              </div>
            </div>
            <div class="mb-3">
              <h1 class="text-3xl font-bold">Previous</h1>
            </div>
            <div>
              <a
                href="#"
                class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div
                  class="block h-24 w-2/5 rounded overflow-hidden"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div class="pl-3 w-3/5">
                  <p class="text-xs text-gray-500 uppercase font-semibold">
                    SPORTS
                  </p>
                  <h3 class="text-md font-semibold leading-tight mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                    <div
                      class="rounded-full w-5 h-5 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/men/41.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Jack Ryan</div>
                  </div>
                </div>
              </a>
            </div>
            <hr class="border-gray-200 my-3" />
            <div>
              <a
                href="#"
                class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div
                  class="block h-24 w-2/5 rounded overflow-hidden"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div class="pl-3 w-3/5">
                  <p class="text-xs text-gray-500 uppercase font-semibold">
                    ART
                  </p>
                  <h3 class="text-md font-semibold leading-tight mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                    <div
                      class="rounded-full w-5 h-5 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/men/63.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Kevin Jackson</div>
                  </div>
                </div>
              </a>
            </div>
            <hr class="border-gray-200 my-3" />
            <div>
              <a
                href="#"
                class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div
                  class="block h-24 w-2/5 rounded overflow-hidden"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div class="pl-3 w-3/5">
                  <p class="text-xs text-gray-500 uppercase font-semibold">
                    MUSIC
                  </p>
                  <h3 class="text-md font-semibold leading-tight mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                    <div
                      class="rounded-full w-5 h-5 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/women/11.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Rowena Wheeler</div>
                  </div>
                </div>
              </a>
            </div>
            <hr class="border-gray-200 my-3" />
            <div>
              <a
                href="#"
                class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
              >
                <div
                  class="block h-24 w-2/5 rounded overflow-hidden"
                  style={{
                    background:
                      "url(https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div class="pl-3 w-3/5">
                  <p class="text-xs text-gray-500 uppercase font-semibold">
                    WORLD
                  </p>
                  <h3 class="text-md font-semibold leading-tight mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                    <div
                      class="rounded-full w-5 h-5 mr-3"
                      style={{
                        background:
                          "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div>Gwen Thomson</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
