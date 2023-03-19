import React from "react";
// import { NavLink } from "react-router-dom";

let Contact = () => {
  return (
    <section className="py-10">
      <div className="heading text-5xl  ml-5 sm:ml-0 text-center py-5">
        Better Together
      </div>
      <div className="contact-container flex flex-col lg:flex-row justify-evenly mt-20">
        <div className="left-section max-w-lg mx-auto">
          <div className="ml-5">
            <div className="text-3xl ">Let's Chat.</div>
            <div className="text-3xl ">Tell me about project.</div>
            <p className="mt-4">Lets create something together 🤘</p>

            <div className="reachout-details my-5">
              {/* mail */}
              <p className="my-1">
                If you want mail:{" "}
                <a href="mailto:ssk7860345351@gmail.com" target="_blank">
                  <span className="hover:text-purple-400 underline underline-offset-4 decoration-slate-500 hover:decoration-purple-400 transition-colors delay-100 ease-out duration-200">
                    ssk7860345351@gmail.com
                  </span>
                </a>
              </p>
              {/* Call */}
              <p className="my-1">
                If you want to hear my voice:{" "}
                <a href="tel:+917860345351" target="_blank">
                  <span className="hover:text-purple-400 underline underline-offset-4 decoration-slate-500 hover:decoration-purple-400 transition-colors delay-100 ease-out duration-200">
                    +91 7860345351
                  </span>
                </a>
              </p>
              {/* Call */}
              <p className="my-1">
                If you want to be influenced:{" "}
                <a
                  href="https://www.instagram.com/official_shivamsk/"
                  target="_blank"
                >
                  <span className="hover:text-purple-400 underline underline-offset-4 decoration-slate-500 hover:decoration-purple-400 transition-colors delay-100 ease-out duration-200">
                    @official_shivamsk
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-section mt-10 lg:mt-0">
          <div className="form px-5 sm:px-10">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="You want to ask..."
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="mx-5 my-5 resume text-[var(--primarytext)] text-xl bg-purple-500 w-32 h-32 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#02012e] transition-colors delay-100 ease-out duration-200"
                  >
                    <div>Submit</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
