import { FaPython, FaReact, FaLinux, FaJava, FaDocker, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Python/Django", level: 65, icon: <FaPython />, color: "#3776ab" },
  { name: "React", level: 55, icon: <FaReact />, color: "#149eca" },
  { name: "S.O. Linux", level: 40, icon: <FaLinux />, color: "#0f1f3d" },
  { name: "Java/SpringBoot", level: 60, icon: <FaJava />, color: "#e76f00" },
  { name: "Next.js", level: 70, icon: <SiNextdotjs />, color: "#0f1f3d" },
  { name: "Docker", level: 40, icon: <FaDocker />, color: "#2496ed" },
  { name: "Postgresql", level: 70, icon: <SiPostgresql />, color: "#336791" },
  { name: "JavaScript", level: 70, icon: <FaJs />, color: "#e8b800" },
  { name: "Git/Github", level: 85, icon: <FaGitAlt />, color: "#f05033" },
];
 
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills__head">
          <p className="section-tag section-tag--blue">MIS HABILIDADES</p>
          <h2>Tecnologias con los que trabaje</h2>
          <span className="skills__line" />
        </div>

        <div className="skills__grid">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <span className="skill__icon" style={{ color: s.color }}>{s.icon}</span>
              <div className="skill__body">
                <div className="skill__top">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}