import { FaReact, FaPython, FaJava, FaLinux, FaDocker, FaJenkins } from "react-icons/fa";
import { SiSpringboot, SiTerraform, SiPostgresql, SiRedis, SiDjango } from "react-icons/si";

const brands = [
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Terraform", icon: <SiTerraform /> },
];

export default function Brands() {
  // Se duplica la lista para que el bucle sea continuo
  const items = [...brands, ...brands];

  return (
    <section className="brands">
      <div className="container brands__viewport">
        <div className="brands__track">
          {items.map((b, i) => (
            <div className="brands__item" key={i} aria-hidden={i >= brands.length}>
              {b.icon}
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}