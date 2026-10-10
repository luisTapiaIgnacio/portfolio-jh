import { FiArrowRight, FiChevronRight } from "react-icons/fi";

// Coloca las imágenes en la carpeta public/ con estos nombres
const projects = [
  { title: "Bloom & Wild", type: "E-Commerce Website", img: "/src/assets/image/proyecto-1.png" },
  { title: "Northland Studio", type: "Creative Agency Website", img: "/src/assets/image/proyecto-2.jfif" },
  { title: "Pure Balance", type: "Wellness Website", img: "/src/assets/image/proyecto-3.jfif" },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container work__inner">
        <div className="work__text">
          <p className="section-tag section-tag--yellow">PROYECTOS DESTACADOS</p>
          <h2>Mis tabajos mas recientes</h2>
          <span className="work__line" />
          <p className="work__desc">
            Cada proyecto es especial. Estos son algunos de los que me enorgullece haber creado.
          </p>
          <a href="#" className="btn btn--white btn--shadow">
            Explorar Proyectos <FiChevronRight />
          </a>
        </div>

        <div className="work__grid">
          {projects.map((p) => (
            <article className="work-card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="work-card__info">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.type}</p>
                </div>
                <a href="#" className="work-card__btn" aria-label={`Ver ${p.title}`}>
                  <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}