import React from "react";
import { Navlinks } from "./Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="dark:bg-black text-white dark:text-white pt-10">
            <div className="container">
                <ul className="flex  items-center justify-center gap-6">
                    {
                        Navlinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a href={link}>{name}</a>
                            </li>
                          ))
                    }
                </ul>
            </div>

            {/* footer icons */}
            <div className="bg-dark container">
                <div className="mt-10 p-6 flex items-center justify-between gap-6 ">
                    <h1 className="text-3xl font-bold">Portfolio</h1>
                    <div className="flex gap-6">
                        <a href="mailto:vasumittal1100@gmail.com">
                            <FaEnvelope className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                        </a>
                        <a href="https://linkedin.com/in/vasu-mittal-b283a1240">
                            <FaLinkedin className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                        </a>
                        <a href="https://github.com/vasu2582">
                            <FaGithub className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                        </a>
                    </div>
                    <div className="hidden sm:block">&copy; {new Date().getFullYear()}. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;