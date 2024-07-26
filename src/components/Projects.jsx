import React from "react";
import web1 from "../assets/job.png"
import web2 from "../assets/news.png"
import web3 from "../assets/hosp.png"
import web4 from "../assets/port.png"

const ProjectsData = [
    {
      id: 1,
      name: "Job Connect Web App",
      image: web1,
      link: "https://github.com/vasu2582/Job-Connect",
      link2: "#",
    },
    {
        id: 2,
        name: "News Flow Web App",
        image: web2,
        link: "https://github.com/vasu2582/News-Flow-24x7",
        link2: "https://news-flow-24x7.netlify.app/",
    },
    {
      id: 3,
      name: "Life Pulse Healthcare Web App",
      image: web3,
      link: "https://github.com/vasu2582/Life-Pulse-Healthcare",
      link2: "https://life-pulse-healthcare.netlify.app",
    },
    {
      id: 4,
      name: "Portfolio Web Page",
      image: web4,
      link: "https://github.com/vasu2582/My-Portfolio",
      link2: "#",
    },
  ];

const Projects = () => {
    return (
        <>
            <span id="project"></span>

            <div className="dark:bg-black dark:text-white py-14">
                <div className="container">
                    <header className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="uppercase text-3xl font-bold">
                                Personal Projects
                            </h1>
                            <p>Explore my personal projects, showcasing my skills and creativity in web development and software engineering.</p>
                        </div>
                        <div>
                            <button className="bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white">
                                View All
                            </button>
                        </div>
                    </header>

                    {/* card section */}
                    <section>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* card */}
                            {
                                ProjectsData.map(({ id, name, image, link, link2 }) => {
                                    return (
                                        <div>
                                            <a href={link2}>
                                                <img src={image} alt="" className="h-[340px] sm:h-[420px] grid place-items-center p-3 sm:p-6" />
                                            </a>
                                            <div className="pt-4 space-y-3">
                                                <h1 className="text-3xl font-bold">{name}</h1>
                                                <div>
                                                    <a href={link} className="text-primary">
                                                        Github
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Projects;