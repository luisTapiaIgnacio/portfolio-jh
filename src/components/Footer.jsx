import {
  FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp,
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaHeart,
} from "react-icons/fa";

const explore = ["Sobre mi", "Servicios", "Mis proyectos", "Otros servicios", "Blog"];
const resources = ["Backend", "Desarrollo web Tips", "IA-modelos", "Librerias", "Tutorials"];

const socials = [
  { label: "Facebook", icon: <FaFacebookF />, href: "#" },
  { label: "Instagram", icon: <FaInstagram />, href: "#" },
  { label: "GitHub", icon: <FaGithub />, href: "#" },
  { label: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
  { label: "WhatsApp", icon: <FaWhatsapp />, href: "#" },
];

function Socials() {
  return (
    <div className="footer__social">
      {socials.map((s) => (
        <a href={s.href} aria-label={s.label} key={s.label}>{s.icon}</a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="logo">
            <span className="logo__name">Abierto a nuevas oportunidades</span>
            
          </a>
          <p>Nuevos retos, nuevas ideas, nuevas soluciones. ¿Creamos algo juntos?</p>
          
        </div>

        <div className="footer__col">
          <h4>ACCESOS</h4>
          <ul>
            {explore.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>RECURSOS</h4>
          <ul>
            {resources.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>CONTACTO</h4>
          <ul className="footer__contact">
            <li><FaEnvelope /> <a href="mailto:hello@mayadesigns.com">resuresua@gmail.com</a></li>
            <li><FaMapMarkerAlt /> Peru-Lima</li>
            <li><FaPhoneAlt /> <a href="tel:+51 999002030">(+51) 999002030</a></li>
          </ul>
          <Socials />
        </div>

        <div className="footer__badge">
          <span>El éxito es fruto de la perseverancia.</span>
          <FaHeart />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()}-Software Developer- Todos los derechos resevados</p>
          <div className="footer__legal">
            
            <a href="#">Creado por: ZCORP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}