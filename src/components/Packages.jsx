import { FaCode, FaServer, FaCloud, FaCheck } from "react-icons/fa";

const specialties = [
  {
    name: "FRONTEND",
    subTitle: "React + Next.js",
    color: "#1565e6",
    icon: <FaCode />,
    desc: "Interfaces modernas, rápidas y responsivas.",
    features: [
      "React, Next.js y TypeScript",
      "Tailwind y CSS moderno",
      "Diseño responsive",
      "Consumo de APIs REST",
      "SEO y rendimiento",
      "Redux y manejo de estado",
      
    ],
  },
  {
    name: "BACKEND",
    subTitle: "Java + Spring",
    color: "#e50046",
    icon: <FaServer />,
    desc: "Desarrollo de APIs y sistemas empresariales robustos.",
    featured: true,
    features: [
      "Spring Boot y Security",
      "Hibernate y PostgreSQL",
      "Kafka y arquitectura",
      "Reactiva: Webflux / JPA",
      "JUnit y Mockito",
      "Swagger y Postman",
      
      "Python y Django",
    ],
  },
  {
    name: "CLOUD & DEVOPS",
    subTitle: "Automatización",
    color: "#1565e6",
    icon: <FaCloud />,
    desc: "Despliegue, infraestructura y observabilidad.",
    features: [
      "Linux y Docker",
      "Jenkins y CI/CD",
      "Prometheus y Grafana",
      "Cloud y Terraform",
      "Logs y monitoreo",
     
      
    ],
  },
];

export default function Packages() {
  return (
    <section className="packages" id="services">
      <div className="container packages__inner">
        <div className="packages__text">
          <p className="section-tag section-tag--blue">SERVICIOS Y PAQUETES</p>
          <h2>
            Soluciones Simples
            <span>Grandes resultados</span>
          </h2>
          <p className="packages__desc">
            Soluciones adaptables para negocios en crecimiento
          </p>
        </div>

        <div className="packages__grid">
          {specialties.map((s) => (
            <article
              className={`spec-card ${s.featured ? "spec-card--featured" : ""}`}
              key={s.name}
              style={{ "--c": s.color }}
            >
              {s.featured && <div className="spec-card__ribbon">MÁS SOLICITADO</div>}

              <div className="spec-card__head">
                <div>
                  <h3>{s.name}</h3>
                  <p className="spec-card__sub">{s.subTitle}</p>
                </div>
                <span className="spec-card__icon">{s.icon}</span>
              </div>

              <p className="spec-card__desc">{s.desc}</p>

              <ul>
                {s.features.map((f) => (
                  <li key={f}>
                    <FaCheck /> {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}