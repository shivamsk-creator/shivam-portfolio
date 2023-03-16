import React, { useEffect } from "react";
import profilePic from "./img/profile-pic.jpg";

let Homepage = () => {
  useEffect(() => {
    // Set Title of page
    document.title = `Shivam Singh Kushwaha`;
  });

  return (
    <section className="pb-10">
      <div className="home-section flex flex-col lg:flex-row justify-center items-center">
        {/* Left Photo  section */}
        <div className="lg:mx-24 ">
          <img
            className="rounded-full h-96 w-96"
            src={profilePic}
            alt="My Pic"
          />
        </div>
        {/* Right Content  section */}
        <div className=" text-[var(--primarytext)] font-semibold">
          {/* Profile Content */}
          <div className="profile-content px-8 md:px-20 lg:px-0">
            <h1 className="text-8xl  mt-16 mb-7 ">Hello</h1>
            <h3 className="text-2xl">A Bit About Me</h3>
            <p className="max-w-sm">
              I'm Shivam Singh Kushwaha, a Frontend Developer. I develop fully
              responsive and mobile friendly websites. I work on technologies
              like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS. My
              specialization in ReactJS. I host websites on GitHub using Git and
              AWS. Development is my passion and profession both.
            </p>
          </div>

          {/* Next Page Circles */}
          <div className="circles my-10 flex flex-wrap lg:flex-nowrap justify-center">
            <div className="mx-5 lg:my-0 my-5 resume text-[var(--primarytext)] text-xl bg-purple-400 w-32 h-32 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#02012e] transition-colors delay-100 ease-out duration-200">
              Resume
            </div>
            <div className=" mx-5 lg:my-0 my-5 resume text-[var(--primarytext)] text-xl bg-blue-400 w-32 h-32 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#02012e] transition-colors delay-100 ease-out duration-200">
              Projects
            </div>
            <div className="mx-5 lg:my-0 my-5 resume text-[var(--primarytext)] text-xl bg-green-400 w-32 h-32 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#02012e] transition-colors delay-100 ease-out duration-200">
              Contact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
