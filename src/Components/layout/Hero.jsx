import headshot from "../../img/headshot.png";
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="w-[80%] m-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-4xl text-textSecondary-light dark:text-textSecondary-dark">
            Nice to meet you!
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-textPrimary-light dark:text-textPrimary-dark">
            I’m Tenzin Thinley
          </h1>

          <p className="mt-6 text-xl text-textSecondary-light dark:text-textSecondary-dark max-w-xl">
            Based in Toronto,Canada, Frontend developer who turns ideas into
            real, working products using JavaScript and React, with a focus on
            clean logic and continuous learning.
          </p>

          <div className="mt-8 flex justify-center items-center md:justify-start gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-cta-light hover:bg-surface-dark dark:bg-cta-dark border text-white dark:hover:text-textPrimary-dark dark:hover:bg-surface-dark font-medium">
              View Projects
            </a>

            <a href="/Tenzin_Resume.pdf" download className="px-6 py-3 rounded-lg border border-border-light hover:bg-surface-dark dark:border-border-light text-textPrimary-light hover:text-textPrimary-dark dark:text-textPrimary-light dark:hover:text-textPrimary-dark dark:bg-surface-light dark:hover:bg-surface-dark">
              Download Resume
            </a>
            <div>
              <div className="flex gap-4">
                <i className="fa-brands fa-linkedin text-4xl cursor-pointer text-[#0a66c2]"></i>
                <i className="fa-brands fa-github text-4xl cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={headshot}
            alt="Tenzin Thinley"
            className="w-72 md:w-[50%] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
