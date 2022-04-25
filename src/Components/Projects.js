import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { siteData } from "./projectData";
import { Title } from "./title";
import "react-tabs/style/react-tabs.css";

import { database as db } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function Projects(d) {
  const [loading, setLoading] = useState(true);
  const [projectsObj, setProjectsObj] = useState([]);

  //const categoriesObj = siteData.site.projectCategories;
  //const projectsObj = siteData.site.projects;

  if (loading && !projectsObj.length) {
    const projectsRef = ref(db, "/site/projects");
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      //const newestFirst = posts.reverse();
      setProjectsObj(data);
      setLoading(false);
    });
  }
  const o = Object.values(projectsObj).map((project) =>
    Object.keys(project.category)
  );
  const categoriesFlattened = [].concat.apply([], o);
  //const activeCategories = Object.values(projectsObj).map((value) =>Object.keys(value.category)).filter((a) => categoriesFlattened.includes(a[0]))// && !activeCategories.includes(a[0]) );
  const activeCategories=[];
  categoriesFlattened.forEach(item => {
    activeCategories.includes(item)?console.log():activeCategories.push(item);
  });
  
  console.log(categoriesFlattened,activeCategories);
  return (
    <>
      <div
        className={` hidden wrapper place-items-center fixed top-0 min-h-screen w-full z-20`}
      >
        <div className="fixed bg-gray-900 w-full h-full opacity-80 -z-10"></div>

        <div className=" mx-auto relative bg-prim2 flex flex-col border border-gray-900 rounded-lg p-2 box-border">
          gggg
        </div>
      </div>
      <div className="wrapper relative h-screen m-0" id={d.id}>
        <div className="card absolute block p-3 overfl ow-y-clip">
          <h1 className="font-bold text-center">
            <Title text={"Projects"} />
          </h1>
          {loading ? (
            <p className="text-center mt-20">Loading .....</p>
          ) : (
            <Tabs>
              <TabList>
                <div className="w-full flex-row flex md:justify-center overflow-x-auto overflow-y-hidden h-max inner">
                  <Tab>
                    <h1 className=" whitespace-nowrap">All Projects</h1>
                  </Tab>
                  {activeCategories.map((category, i) => (
                    <Tab>
                      <h1 key={i}>{category}</h1>
                    </Tab>
                  ))}
                </div>
              </TabList>

              <TabPanel>
                <div className="all-projectsObj flex just ify-items-center overflow-y-auto inset-x-0 max-w-[1200px] m x-auto absolute bottom-10 top-24 rounded p-2 shadow-inner">
                  <br />
                  <div className="pb-10 md:columns-2 lg:columns-3 mx-auto space-y-3">
                    {Object.values(projectsObj).map((project, i) => (
                      <div className=" break-inside-avoid overflow-hidden group relative shadow-xl rounded-lg hover:scale-[95%] duration-500 w-full max-w-[20rem]">
                        <img
                          alt={project.title}
                          src={project.images.cover}
                          className="max-h-96 min-h-[8rem] w-full object-cover object-center z-0"
                        />
                        <div className=" absolute inset-0 opacity-[.30] duration-300 bg-gray-900 group-hover:opacity-0 w-full p-4"></div>

                        <div className="absolute w-full -bottom-full group-hover:bottom-0 duration-300 z-10 ">
                          <div className="shade opacity-70 -z-[1] absolute h-full w-full bottom-0">
                            <div className=" absolute  top-0.5 w-full h-1/4 bg-gradient-to-t from-mygray m-0"></div>
                            <div className="absolute bottom-0 h-3/4 bg-mygray w-full p-4"></div>
                          </div>
                          <div className=" w-full p-4">
                            <p className="text-papayaWhip text-xl font-bold">
                              {project.title}
                            </p>
                            <p className="text-gray-100 font-light text-sm break-words">
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
                            <div className="flex items-center justify-between mt-4">
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
              {activeCategories.map((category, i) => (
                <TabPanel>
                  <div
                    key={i}
                    className="category-projectsObj flex overflow-y-auto inset-x-0 max-w-[1200px] absolute bottom-10 top-24 rounded p-2 shadow-inner"
                  >
                    <br />
                    <div className="pb-10 column s-2 md:columns-2 lg:columns-3 mx-auto space-y-3">
                      {Object.values(projectsObj)
                        .filter((project) =>
                          Object.keys(project.category).includes(category)
                        )
                        .map((project, i) => (
                          <div className=" break-inside-avoid overflow-hidden group relative shadow-xl rounded-lg w-full hover:scale-[95%] duration-500 max-w-[20rem]">
                            <img
                              alt={project.title}
                              src={project.images.cover}
                              className="max-h-96 min-h-[8rem] w-full object-cover object-center z-0"
                            />
                            <div className="absolute inset-0  opacity-[.30] duration-300 bg-slate-900 group-hover:opacity-0 w-full p-4"></div>

                            <div className="absolute w-full block -bottom-full group-hover:bottom-0 duration-300 z-10 ">
                              <div className="shade opacity-70 -z-[1] absolute h-full w-full bottom-0">
                                <div className=" absolute  top-0.5 w-full h-1/4 bg-gradient-to-t from-mygray m-0"></div>
                                <div className="absolute bottom-0 h-3/4 bg-mygray w-full p-4"></div>
                              </div>
                              <div className=" w-full p-4">
                                <p className="text-papayaWhip text-xl font-bold">
                                  {project.title}
                                </p>
                                <p className="text-gray-100 font-light text-sm break-words">
                                  {project.description}{" "}
                                  {!project.blogPost ||
                                  project.blogPost === "#" ? (
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
                                <div className="flex items-center justify-between mt-4">
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
          )}
        </div>
      </div>
    </>
  );
}
