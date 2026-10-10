import { FaPaperPlane, FaStar, FaGem, FaCheck } from "react-icons/fa";

const packages = [
  {
    name: "BASICO",
    subTitle: "Presencia Digital",
    price: "$250 +",
    desc: "Ideal para emprendedores y pequeños negocios que quieren empezar a digitalizarse.",
    icon: <FaPaperPlane />,
    features: [
      "Web corporativas",
      "Langing page",
      "Web para profesionales",
      "Formulario y/o reservacion",
    ],
    popular: false,
  },
  {
    name: "SISTEMAS A MEDIDA",
    subTitle: "Soluciones a medida",
    price: "$500 +",
    desc: "Para negocios que necesitan controlar mejor sus operaciones y clientes",
    icon: <FaStar />,
    features: [
      "Sistemas de ventas y POS",
      "Inventario y administración",
      "Paneles administrativos",
      "Integración con otros sistemas",
      "Módulos según las necesidades",
    ],
    popular: true,
  },
  {
    name: "SISTEMAS INTELIGENTES",
    subTitle: "Automatización e IA",
    price: "$2200 +",
    desc: "Tecnología que automatiza tareas, conecta información y ayuda a tomar mejores decisiones",
    icon: <FaGem />,
    features: [
      "Automatización de procesos",
      "Asistentes virtuales",
      "E-Commerce",
      "Análisis y reportes inteligentes",
      "Integración de APIs",
    ],
    popular: false,
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
          {packages.map((pkg) => (
            <article
              className={`pkg-card ${pkg.popular ? "pkg-card--popular" : ""}`}
              key={pkg.name}
            >
              {pkg.popular && (
                <div className="pkg-card__ribbon">MOST POPULAR</div>
              )}

              <div className="pkg-card__head">
                <div>
                  <h3>{pkg.name}</h3>
                  {pkg.subTitle && (
                    <p className="pkg-card__sub">{pkg.subTitle}</p>
                  )}
                </div>
                <span className="pkg-card__icon">{pkg.icon}</span>
              </div>

              <p className="pkg-card__price">{pkg.price}</p>
              <p className="pkg-card__desc">{pkg.desc}</p>

              <ul>
                {pkg.features.map((f) => (
                  <li key={f}>
                    <FaCheck /> {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pkg-card__btn">
                Contratar paquete
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
