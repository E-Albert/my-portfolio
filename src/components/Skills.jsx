import ReactIcon from "../assets/reactIcon.png";
import awsLogo from "../assets/awsCloudLogo.png";
import blenderLogo from "../assets/blenderLogo.png";
import cssLogo from "../assets/cssLogo.png";
import dockerLogo from "../assets/dockerLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import javaLogo from "../assets/javaLogo.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import postgresLogo from "../assets/postgresLogo.png";
import springbootLogo from "../assets/springbootLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import unityLogo from "../assets/unityLogo.png";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "React", icon: ReactIcon },
    { name: "Java", icon: javaLogo },
    { name: "Spring Boot", icon: springbootLogo },
    { name: "JavaScript", icon: javascriptLogo },
    { name: "HTML", icon: htmlLogo },
    { name: "CSS", icon: cssLogo },
    { name: "Tailwind", icon: tailwindLogo },
    { name: "MySQL", icon: mysqlLogo },
    { name: "Postgres", icon: postgresLogo },
    { name: "AWS", icon: awsLogo },
    { name: "Docker", icon: dockerLogo },
    { name: "Unity", icon: unityLogo },
    // { name: "Blender", icon: blenderLogo },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Skills
            </span>
          </h1>
          <p
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            Technologies and tools used to build reliable, scalable software.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="flex flex-wrap -m-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-3 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4"
              data-aos="fade-up"
            >
              <div
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
                className="p-4 sm:p-5 rounded-2xl border
                  hover:border-orange-500/50
                  hover:-translate-y-2
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #374151, #1f2937)"
                        : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl p-2
                      flex items-center justify-center
                      transition-transform duration-300
                      hover:scale-105"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Label */}
                  <h3
                    className="text-sm sm:text-base font-semibold"
                    style={{ color: darkMode ? "white" : "#1f2937" }}
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
