import ThinkingAvatar from "../assets/CartoonDevThinking.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-5xl xl:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
            {/* Image */}
            <div
              className="absolute -inset-6 md:-inset-10 lg:-inset-20 bg-linear-to-l
from-[#f97316] via-[#fb923c] to-[#f59e0b]
rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            <img
              src={ThinkingAvatar}
              alt="About Image"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2 max-w-xl mx-auto lg:mx-0"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>

          <p
            className={`text-xs sm:text-sm lg:text-base xl:text-lg mb-4 sm:mb-5 leading-relaxed
bg-linear-to-r from-orange-900/10 to-orange-900/5
p-4 sm:p-6 rounded-xl sm:rounded-2xl
backdrop-blur-sm
${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I’m a software engineer with a strong builder mindset, focused on
            creating well-structured, adaptable software. I primarily work with
            React and Java, and I enjoy designing systems that balance clarity,
            scalability, and maintainability.
          </p>

          <p
            className={`text-xs sm:text-sm lg:text-base xl:text-lg mb-6 sm:mb-8 leading-relaxed
bg-linear-to-r from-orange-900/10 to-orange-900/5
p-4 sm:p-6 rounded-xl sm:rounded-2xl
backdrop-blur-sm
${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="550"
          >
            What drives me is the process of bringing ideas to life through
            code. I like thinking through the problem, choosing the right tools,
            and refining solutions as requirements evolve. I value
            collaboration, continuous learning, and building software that holds
            up beyond its first version.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-center"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-400">
                Builder Mindset
              </div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Turning ideas into working software
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="650"
              className="text-center"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-400">
                Systems Thinking
              </div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Structure, scalability, maintainability
              </div>
            </div>

            <div
              className="sm:col-span-2 lg:col-span-2 flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-orange-400">
                Continuous Learning
              </div>
              <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Adapting tools to solve real problems
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
