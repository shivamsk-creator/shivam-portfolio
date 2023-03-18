import React from "react";
import { NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <footer>
      <div className="footer-box text-[var(--primarytext)] border border-b-0 border-r-0 border-l-0 border-t-gray-400 mx-10 pt-10 pb-16">
        {/* <hr className="" /> */}
        <div className=" flex justify-between lg:justify-around lg:items-center md:justify-around md:items-center flex-wrap">
          <div className="phone max-w-xs mx-2 my-2">
            <div className="text-xl font-semibold">Phone</div>
            <div className="font-semibold my-1">
              <a href="tel:+917860345351" target="_blank">
                <span className="hover:text-purple-400 underline underline-offset-4 decoration-slate-500 hover:decoration-purple-400 transition-colors delay-100 ease-out duration-200">
                  +91 7860345351
                </span>
              </a>
            </div>
          </div>
          <div className="email max-w-xs mx-2 my-2">
            <div className="text-xl font-semibold">Email</div>
            <div className="font-semibold my-1">
              <a href="mailto:ssk7860345351@gmail.com" target="_blank">
                <span className="hover:text-purple-400 underline underline-offset-4 decoration-slate-500 hover:decoration-purple-400 transition-colors delay-100 ease-out duration-200">
                  ssk7860345351@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="follow max-w-xs mx-2 my-2">
            <div className="text-xl font-semibold">Follow Me</div>
            <div className="font-semibold my-1 flex lg:items-center">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shivam-singh-kushwaha/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={40}
                  height={40}
                  viewBox="0 0 30 30"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/official_shivamsk/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={40}
                  height={40}
                  viewBox="0 0 32 32"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="copyright max-w-xs mx-2 my-2">
            <div className="font-semibold">
              &#169; 2023 By
              <NavLink to="/">
                {" "}
                <span className="underline underline-offset-4 decoration-slate-500 hover:decoration-white">
                  {" "}
                  Shivam Singh Kushwaha
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
