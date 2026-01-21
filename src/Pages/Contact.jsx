import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" mt-32 w-4/5 m-auto pb-[10%]">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl flex flex-[1] p-6 items-center justify-center bg-bg-dark text-textPrimary-dark dark:text-textPrimary-light dark:bg-bg-light">
            Contact
          </h1>
          <div className="mt-4 text-xl flex-[1] text-stone-500 border border-bg-light dark:border-bg-dark p-4">
            <div className="flex gap-4 items-center">
              <label className="text-2xl">Email:</label>
              <a
                href="mailto:tenthinten@gmail.com"
                className="text-blue-600 hover:underline text-2xl"
              >
                tenthinten@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
