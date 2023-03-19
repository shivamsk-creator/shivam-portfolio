import React from "react";
import { NavLink } from "react-router-dom";

let Footer = () => {
  return (
    <footer>
      <div className="footer-box text-[var(--primarytext)] border border-b-0 border-r-0 border-l-0 border-t-gray-400 mx-10 pt-10 pb-16">
        {/* <hr className="" /> */}
        <div className=" flex justify-between lg:justify-around lg:items-center md:justify-around md:items-center flex-wrap">
          {/* Phone */}
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
          {/* Mail */}
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
          {/* Follow */}
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
              {/* Whatsapp */}
              <a href="https://wa.link/5sdd6i" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={40}
                  height={40}
                  viewBox="0 0 32 32"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Copyright */}
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
