import React from "react";
import { GiGraduateCap, GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const aboutData = [
    {
      name: "Education",
      icon: (
        <GiGraduateCap className="text-5xl text-primary group-hover:text-white duration-300" />
      ),
      link: "#",
      description: "B.Tech in Electronics & Communication from National Institute of Technology, Kurukshetra. \nCGPA: 8.87",
    },
    {
      name: "Skills",
      icon: (
        <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
      ),
      link: "#",
      description: "C++, Data Structures & Algorithms, JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDb, Tailwind CSS, OOPS, DBMS, SQL",
    },
    {
      name: "Interests",
      icon: (
        <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />
      ),
      link: "#",
      description: "Problem Solving, Software Development, Web Development, Debugging, Continuous Learning, Product Building",
    },
  ];

const About = () => {
    return (
        <>
            <span id="about"></span>

            <div className="dark:bg-black dark:text-white py-14">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            aboutData.map((data) => (
                                <div className="card group space-y-3 p-4 bg-dark  hover:bg-primary duration-300 text-white">
                                    <div>{data.icon}</div>
                                    <h1 className="text-2xl font-bold">{data.name}</h1>
                                    <p>{data.description}</p>
                                    <a
                                        href={data.link}
                                        className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-white duration-300"
                                    >
                                        Learn more
                                    </a>
                                </div>
                              ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;