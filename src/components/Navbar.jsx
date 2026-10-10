import { Fragment, useEffect, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

// id = el id de la sección a la que apunta cada menú
const links = [
  { label: "INICIO", id: "home" },
  { label: "SOBRE MI", id: "about" },
  { label: "PROYECTOS", id: "work" },
  { label: "SERVICIOS", id: "services" },
  { label: "CONTACTO", id: "contact" },
  { label: "BLOG", id: "blog" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // menú móvil abierto/cerrado

  useEffect(() => {
    const onScroll = () => {
      // Sombra al bajar
      setScrolled(window.scrollY > 10);

      // Marca el menú de la sección que está pasando bajo el navbar
      const line = window.scrollY + 120;
      let current = links[0].id;
      let currentTop = -1;
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line && el.offsetTop > currentTop) {
          current = id;
          currentTop = el.offsetTop;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#" className="logo">
          <img src="/src/assets/image/logo-z.png" alt="logo" />
        </a>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {links.map((link, i) => (
            <Fragment key={link.id}>
              {i > 0 && <span className="navbar__sep">|</span>}
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : ""}
                onClick={() => {
                  setActive(link.id);
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            </Fragment>
          ))}
        </nav>

        <a href="#contact" className="btn btn--yellow">
          Contactame <FiArrowRight />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}