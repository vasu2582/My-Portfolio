import React from "react";

const Contact = () => {
    return (
        <>
        <span id="contact"></span>
        <div className="dark:bg-black dark:text-white py-14">
          <div className="container ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-dark py-8 px-6">
              <div className="col-span-2 space-y-3">
                <h1 className="text-5xl font-bold text-white">
                  Let's work together on your next project
                </h1>
                <p className="text-gray-400">
                  Ready to bring your ideas to life? Whether you're looking to build a stunning new website or develop a cutting-edge software solution, I’d love to collaborate with you. Let’s discuss how we can turn your vision into reality and achieve outstanding results together.
                </p>
              </div>
              <div className="grid place-items-center">
                <a
                  href="mailto:vasumittal1100@gmail.com"
                  className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Contact;