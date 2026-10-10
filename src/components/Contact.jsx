import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import contactImg from "/src/assets/image/cart.png";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setSent(false);
  };

  // Cerrar con la tecla Escape y bloquear el scroll del fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: aquí va el envío real (fetch a tu API, EmailJS, Formspree, etc.)
    console.log("Datos del formulario:", form);
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <img src={contactImg} alt="" className="contact__img" />

        <div className="contact__body">
          <h2>TIENE ALGUN PROYECTO EN MENTE?</h2>
          <p>Me encantaría saber más al respecto. Envíame un mensaje y empecemos...!</p>

          {/* Los 3 campos solo abren el popup */}
          <div className="contact__bar">
            <input type="text" placeholder="nombre" readOnly onClick={openModal} />
            <input type="text" placeholder="email" readOnly onClick={openModal} />
            <input type="text" placeholder="Mensaje" readOnly onClick={openModal} className="contact__bar-msg" />
            <button type="button" className="btn btn--yellow" onClick={openModal}>
              Enviar Mensaje <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__box" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal} aria-label="Cerrar">
              <FiX />
            </button>

            {sent ? (
              <div className="modal__success">
                <h3>Mensaje enviado!</h3>
                <p>Gracias por tu mensaje. Te responderé lo antes posible</p>
                <button className="btn btn--blue" onClick={closeModal}>cerrar</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Conversemos sobre tu proyecto</h3>
                <input name="name" type="text" placeholder="Nombre" value={form.name} onChange={handleChange} required autoFocus />
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input name="phone" type="tel" placeholder="Telefono" value={form.phone} onChange={handleChange} />
                <textarea name="message" placeholder="Mensaje" rows="5" value={form.message} onChange={handleChange} required />
                <button type="submit" className="btn btn--yellow">
                  Enviar Mensaje <FaPaperPlane />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}