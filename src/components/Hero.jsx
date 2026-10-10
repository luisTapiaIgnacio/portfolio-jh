import { FiArrowRight, FiPlay } from "react-icons/fi";
import heroImg from "/src/assets/hero.png";
import CodeCard from "./CodeCard";
/*import CodeCard from "./CodeCard";*/

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__text">
          
          <h1>
            <span className="hero__dark">Hola soy Jhona</span>
            <span className="hero__blue">FULL STACK DEVELOPER</span>
            <span className="hero__script">Bienvenido...!</span>
          </h1>
          <p className="hero__desc">
           Desarrollo aplicaciones web y sistemas inteligentes con Python, Java y React, optimizados para rendimiento y experiencia de usuario.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--blue">
              Ver mis proyectos<FiArrowRight />
            </a>
            <a href="#intro" className="btn btn--white">
              <span className="play">
                <FiPlay />
              </span>{" "}
              Ver presentacion
            </a>
          </div>

          <p className="hero__note">¡Construyamos algo increíble juntos!</p>
        </div>

        <div className="hero__media">
  <div className="hero__blob" />
  <CodeCard className="code-card--back" lang="python" name="Alex" speed={75} delay={1200} />
  <img src={heroImg} alt="Luis, freelance web designer" />
  <CodeCard className="code-card--front" lang="js" speed={40} />
  <div className="hero__badge">
    <strong>+2</strong>
    <span>años de experiencia</span>
  </div>
</div>

      </div>
    </section>
  );
}
