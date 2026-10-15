import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import proyecto1 from "/src/assets/image/web1.png";
import proyecto2 from "/src/assets/image/web2.png";
import proyecto3 from "/src/assets/image/web3.png";

const projects = [
  { title: "MIRANDA EVENTOS", type: "Pagina web con panel de administracion", img: proyecto1, url: "https://web-miranda-import.vercel.app/" },
  { title: "ARQUITECTURA TAPIA", type: "Pagina web, empresa de construccion y arquitectura", img: proyecto2, url: "https://luis-tapia.web.app/" },
  { title: "IFILM-REMODELACIONES", type: "Pagina web realizado con next.js optimizada para seo", img: proyecto3, url: "https://web-cristian-next.vercel.app/" },
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
          <a href="https://github.com/luisTapiaIgnacio" className="btn btn--white btn--shadow">
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
                
<a
  href={p.url}
  target="_blank"
  rel="noopener noreferrer"
  className="work-card__btn"
  aria-label={`Ver ${p.title}`}
>
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