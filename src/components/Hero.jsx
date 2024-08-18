import React, { useState, useEffect } from "react";
import PersonImg from "../assets/image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    const [index, setIndex] = useState(0);
    const texts = ["Web Developer", "Software Developer", "Creative Coder"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); 

        return () => clearInterval(interval);
    }, []);

    const handleResumeClick = () => {
        window.location.href = "https://drive.google.com/file/d/1sq6FDY6ARCptclXn2LC4ZYgoVBYpAcoK/view?usp=drive_link"; 
    };

    return (
        <div className="dark:bg-black dark:text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    <div className="">
                        <img src={PersonImg} alt="" className="" />
                    </div>
                    <div className="space-y-3 ">
                        <p className="text-primary text-3xl">Hello I'm Vasu</p>
                        <h1 className="text-5xl font-semibold transition-all duration-500">{texts[index]}</h1>
                        <p>
                            I’m a dynamic developer with expertise in both web and software development. I excel at creating intuitive user interfaces and building scalable backend systems, driven by a passion for delivering high-quality, impactful solutions.
                        </p>

                        <div className="flex gap-6">
                            <a href="https://linkedin.com/in/vasu-mittal-b283a1240">
                                <FaLinkedin className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                            </a>
                            <a href="https://github.com/vasu2582">
                                <FaGithub className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
                            </a>
                        </div>
                        
                        <button 
                            className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white"
                            onClick={handleResumeClick}
                        >
                            View Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

