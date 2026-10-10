import { FiCalendar, FiCode, FiSmile, FiAward, FiUser } 
from "react-icons/fi";

import VisitorsChart from "./VisitorsChart";

const stats = [
  { value: "2+", label: "Años de Experiencia", icon: <FiCalendar /> },
  { value: "15+", label: "Projectos Completados", icon: <FiCode /> },
  { value: "20+", label: "Clientes contentos", icon: <FiSmile /> },
  { value: "100%", label: "Clientes Satisfechos", icon: <FiAward /> },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-tag section-tag--blue">SOBRE MI</p>
          <h2>Me apasiona codificar y construir soluciones digitales</h2>
          <p className="about__desc">
            Hace tres años egresé de una carrera técnica y posteriormente complementé mi formación con estudios de Ingeniería de Software. Esto me permitió ampliar mis conocimientos sobre arquitectura de software, buenas prácticas de desarrollo y el ciclo de vida de las aplicaciones. Sin embargo, considero que la tecnología está en constante evolución y que siempre hay algo nuevo por aprender. <br/>
            Inicié mi experiencia profesional enfocado en el desarrollo frontend. Actualmente, desarrollo aplicaciones integrales, trabajando tanto en el frontend como en el backend, con una visión más completa de cada proyecto.

En mi tiempo libre, continúo capacitándome, explorando nuevas tecnologías y practicando con inteligencia artificial (IA), porque mi objetivo es ofrecer soluciones de calidad, mantenerme actualizado y convertirme en un profesional competente.
          </p>
          <a href="#" className="btn btn--blue">
            Learn More About Me <FiUser />
          </a>
        </div>

        <div>
  <div className="about__stats">
    {stats.map((s) => (
      <div className="stat" key={s.label}>
        <span className="stat__icon">{s.icon}</span>
        <div>
          <strong>{s.value}</strong>
          <p>{s.label}</p>
        </div>
      </div>
    ))}
  </div>
  <VisitorsChart />
</div>
      </div>
    </section>
  );
}