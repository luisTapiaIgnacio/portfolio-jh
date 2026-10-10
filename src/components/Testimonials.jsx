import { useState } from "react";
import { FiChevronRight, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Coloca las fotos en public/ con estos nombres
const reviews = [
  {
    text: "Luis demostró un enfoque impecable en cada etapa del proyecto. Supo modelar y analizar nuestras necesidades, y convertirlas en soluciones prácticas y eficientes.",
    name: "Jorge Gamarra",
    role: "Sub Director, Sydemsoft",
    img: "/src/assets/image/user04.jpg",
  },
  {
    text: "  Su capacidad para transmitir ideas y colaborar con el equipo fue clave.No solo domina frontend y backend, sino que también aporta creatividad y claridad en cada decisión.",
    name: "Angelo Poma",
    role: "CEO, Zcorp Solution",
    img: "/src/assets/image/user03.jpg",
  },
  {
    text: " Gracias a la automatización que implementó, logramos reducir tiempos y duplicar la eficiencia de nuestros procesos.",
    name: "Lourdes Tapia",
    role: "Contadora, Finanzas B&L",
    img: "/src/assets/image/user01.jpg",
  },
  {
    text: " Excelente comunicación y entrega puntual. luis convirtió nuestras ideas en sistemas funcionales",
    name: "Santiago Muñoz",
    role: "Director, Woo Web",
    img: "/src/assets/image/user02.jpg",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const total = reviews.length;

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  // Se muestran 2 reseñas a la vez
  const visible = [reviews[start], reviews[(start + 1) % total]];

  return (
    <section className="testi" id="reviews">
      <div className="container testi__inner">
        <div className="testi__text">
          <p className="section-tag section-tag--yellow">Testimonios</p>
          <h2>
            Clientes contentos
            <span>Resultados reales</span>
          </h2>
          <a href="#" className="btn btn--white btn--shadow">
            Leer mas reseñas <FiChevronRight />
          </a>
        </div>

        <div className="testi__grid">
          {visible.map((r) => (
            <article className="testi-card" key={r.name}>
              <FaQuoteLeft className="testi-card__quote" />
              <p className="testi-card__text">{r.text}</p>
              <div className="testi-card__author">
                <img src={r.img} alt={r.name} />
                <div>
                  <h3>{r.name}</h3>
                  <p>{r.role}</p>
                  <div className="testi-card__stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testi__nav">
          <button onClick={prev} aria-label="Reseña anterior"><FiArrowUp /></button>
          <button onClick={next} aria-label="Reseña siguiente"><FiArrowDown /></button>
        </div>
      </div>
    </section>
  );
}