import React from "react";
import SwiperCards from "./SwiperCards";

let Resume = () => {
  return (
    <section className="py-10">
      <div className="heading text-5xl w-1/2 ml-5 sm:ml-0 text-center py-5">
        Resume
      </div>
      {/* Work Experience  */}
      <div className="work-experience flex flex-col sm:flex-row py-10 border border-t-0 border-r-0 border-l-0 border-b-gray-400 mx-5 sm:mx-20">
        <div className="left-box text-2xl w-1/2 flex sm:justify-center">
          <div>
            Work <br /> Experience
          </div>
        </div>
        <div className="right-box flex mt-10 sm:mt-0">
          <div className="duration w-28">2023 - Present</div>
          <div className="content mx-5">
            <h3 className="text-lg mb-5">Frontend Developer</h3>
            <p className="max-w-xs">
              Working as a frontend Developer in Seek Solution LLP.
            </p>
          </div>
        </div>
      </div>

      {/* Education  */}
      <div className="education flex flex-col sm:flex-row py-20 border border-t-0 border-r-0 border-l-0 border-b-gray-400 mx-5 sm:mx-20">
        <div className="left-box text-2xl w-1/2 flex justify-center">
          <div>Education</div>
        </div>
        <div className="right-box mt-10 sm:mt-0 ">
          <div className="flex">
            <div className="duration w-28">2022 - Present</div>
            {/* BCA */}
            <div className="content mx-5">
              <h3 className="text-lg mb-4">
                BCA - Bachelor of Computer Applications
              </h3>
              <p className="max-w-xs">
                Persuing BCA from Chandigarh University.
              </p>
            </div>
          </div>
          {/* Web development */}
          <div className="content flex mt-10">
            <div className="duration w-28">2021 - 2022</div>
            <div className="mx-5">
              <h3 className="text-lg mb-4">Web Development - LinkedIn</h3>
              <p className="max-w-xs">
                Certification course of Web Development by LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Skills & Expertise  */}
      <div className="Skills flex flex-col sm:flex-row py-10 mx-5 sm:mx-20">
        <div className="left-box text-2xl w-1/2 flex justify-center">
          <div>
            Skills <br /> & Expertise
          </div>
        </div>
        <div className="right-box flex mt-10 sm:mt-0 ">
          <div className="duration w-28"></div>
          <div className="content mx-5">
            <SwiperCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
