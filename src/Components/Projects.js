import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { categories, techStacks, projects } from "./projectData";
import { Title } from "./title";
import "react-tabs/style/react-tabs.css";

export default function Projects(d) {
  return (
    <div className="wrapper relative h-screen m-0" id={d.id}>
      <div className="card  absolute block p-3 overfl ow-y-clip">
        <h1 className="font-bold text-center">
          <Title text={"Projects"} />
        </h1>
        <Tabs>
          <TabList>
            <div className="w-full flex-row flex md:justify-center overflow-x-auto overflow-y-hidden h-max inner">
              <Tab>
                <h1 className=" whitespace-nowrap">All Projects</h1>
              </Tab>
              {categories.map((category, i) => (
                <Tab>
                  <h1 key={i}>{category.title}</h1>
                </Tab>
              ))}
            </div>
          </TabList>

          <TabPanel>
            <div className="All-projects overflow-y-auto inset-x-0 absolute bottom-10 top-24 rounded p-2 shadow-inner">
              <br />
              <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <div class="overflow-hidden group relative shadow-xl rounded-lg h-96 w-60 hover:scale-[95%] duration-500 md:w-80 m-auto">
                    <img
                      alt={project.title}
                      src={project.image}
                      class="max-h- 40 w-full object-cover absolute h-full z-0"
                    />
                    <div class=" absolute inset-0 opacity-75 duration-300 bg-slate-900 group-hover:opacity-0 w-full p-4"></div>
                    <div className=" absolute  bottom-0 w-full p-4 group-hover:hidden bg-gradient-to-t from-mygray m-0">
                      <p class="text-papayaWhip text-xl font-medium">
                        {project.title}
                      </p>
                    </div>
                    <div className="absolute w-full block -bottom-full group-hover:bottom-0 duration-300 eas e-linear z-10 ">
                      <div className="shade opacity- 40 -z-[1] absolute h-full w-full bottom-0">
                        <div className=" absolute  top-0 w-full h-1/4 bg-gradient-to-t from-mygray m-0"></div>
                        <div class="absolute bottom-0 h-3/4 bg-mygray w-full p-4"></div>
                      </div>
                      <div class=" w-full p-4">
                        <p class="text-papayaWhip text-xl font-medium">
                          {project.title}
                        </p>
                        <p class="text-gray-100 font-light text-sm break-words">
                          {!project.blogPost || project.blogPost === "#" ? (
                            project.description
                          ) : (
                            <>
                              {project.description.slice(0, 150)}
                              <span className="text-prim2Dark">
                                ...
                                <a
                                  href={project.blogPost}
                                  target={"_blank"}
                                  rel="noreferrer"
                                  className="text-xs"
                                >
                                  {" "}
                                  Read post
                                </a>
                              </span>
                            </>
                          )}
                        </p>
                        <div class="flex items-center justify-between mt-4">
                          {!project.github || project.github === "#" ? (
                            ""
                          ) : (
                            <>
                              <span className="block relative text-sm">
                                <a
                                  href={project.github}
                                  target={"_blank"}
                                  rel="noreferrer"
                                >
                                  Git
                                </a>
                              </span>
                            </>
                          )}{" "}
                          {!project.demo || project.demo === "#" ? (
                            ""
                          ) : (
                            <>
                              <span className="block relative text-sm">
                                <a
                                  href={project.demo}
                                  target={"_blank"}
                                  rel="noreferrer"
                                >
                                  Demo
                                </a>
                              </span>
                            </>
                          )}
                          {!project.live || project.live === "#" ? (
                            ""
                          ) : (
                            <>
                              <span className="block relative text-sm">
                                <a
                                  href={project.live}
                                  target={"_blank"}
                                  rel="noreferrer"
                                >
                                  Live project
                                </a>
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
          {categories.map((category, i) => (
            <TabPanel>
              <div
                key={i}
                className="All-projects overflow-y-scroll inset-x-0 absolute bottom-10 top-24 rounded p-2 shadow-inner"
              >
                <br />
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {projects
                    .filter((object) => object.category.includes(category.id))
                    .map((project, i) => (
                      <div class="overflow-hidden group relative shadow-lg rounded-lg h-96 w-60 hover:scale-[95%] duration-500 md:w-80 m-auto">
                        <img
                          alt={project.title}
                          src={project.image}
                          class="max-h- 40 w-full object-cover absolute h-full opac ity-40 z-0"
                        />
                        <div class="absolute inset-0 opacity-75 duration-300 bg-slate-900 group-hover:opacity-0 w-full p-4"></div>
                        <div className=" absolute  bottom-0 w-full p-4 group-hover:hidden bg-gradient-to-t from-mygray m-0">
                          <p class="text-papayaWhip text-xl font-medium">
                            {project.title}
                          </p>
                        </div>
                        <div className="absolute w-full block -bottom-full group-hover:bottom-0 duration-300 eas e-linear z-10 ">
                          <div className="shade opacity- 40 -z-[1] absolute h-full w-full bottom-0">
                            <div className=" absolute  top-0 w-full h-1/4 bg-gradient-to-t from-mygray m-0"></div>
                            <div class="absolute bottom-0 h-3/4 bg-mygray w-full p-4"></div>
                          </div>
                          <div class=" w-full p-4">
                            <p class="text-papayaWhip text-xl font-medium">
                              {project.title}
                            </p>
                            <p class="text-gray-100 font-light text-sm break-words">
                              {project.description}{" "}
                              {!project.blogPost || project.blogPost === "#" ? (
                                ""
                              ) : (
                                <>
                                  <span className="text-prim2Dark">
                                    ...
                                    <a
                                      href={project.blogPost}
                                      target={"_blank"}
                                      rel="noreferrer"
                                      className="text-xs"
                                    >
                                      {" "}
                                      Read post
                                    </a>
                                  </span>
                                </>
                              )}
                            </p>
                            <div class="flex items-center justify-between mt-4">
                              {!project.github || project.github === "#" ? (
                                ""
                              ) : (
                                <>
                                  <span className="block relative text-sm">
                                    <a
                                      href={project.github}
                                      target={"_blank"}
                                      rel="noreferrer"
                                    >
                                      Git
                                    </a>
                                  </span>
                                </>
                              )}
                              {!project.demo || project.demo === "#" ? (
                                ""
                              ) : (
                                <>
                                  <span className="block relative text-sm">
                                    <a
                                      href={project.demo}
                                      target={"_blank"}
                                      rel="noreferrer"
                                    >
                                      Demo
                                    </a>
                                  </span>
                                </>
                              )}
                              {!project.live || project.live === "#" ? (
                                ""
                              ) : (
                                <>
                                  <span className="block relative text-sm">
                                    <a
                                      href={project.live}
                                      target={"_blank"}
                                      rel="noreferrer"
                                    >
                                      Live project
                                    </a>
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
