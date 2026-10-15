import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import contactImg from "/src/assets/image/cart.png";

const ACCESS_KEY = "44ab0b4f-7ddc-4da8-9193-2987850b4f40"; // clave de web3forms.com

const emptyForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [policyOpen, setPolicyOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setSent(false);
    setError("");
  };

  // Cerrar con la tecla Escape y bloquear el scroll del fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (policyOpen) setPolicyOpen(false);
      else closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, policyOpen]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Nuevo mensaje del portafolio - ${form.name}`,
          from_name: "Portafolio web",
          ...form,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm(emptyForm);
      } else {
        setError("No se pudo enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setError("Error de conexión. Revisa tu internet e inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
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
            <button type="button" className="btn btn--yellow contact__send" onClick={openModal}>
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
                {error && <p className="modal__error">{error}</p>}
                <label className="modal__check">
                  <input type="checkbox" required />
                  <span>
                    Acepto que mis datos sean usados para responder a mi consulta, según la{" "}
                    <button type="button" className="modal__link" onClick={() => setPolicyOpen(true)}>
                      política de privacidad
                    </button>.
                  </span>
                </label>
                <button type="submit" className="btn btn--yellow" disabled={sending}>
                  {sending ? "Enviando..." : "Enviar Mensaje"} <FaPaperPlane />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {policyOpen && (
        <div className="modal modal--top" onClick={() => setPolicyOpen(false)}>
          <div className="modal__box modal__policy" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setPolicyOpen(false)} aria-label="Cerrar">
              <FiX />
            </button>
            <h3>Política de privacidad</h3>

            <h4>Responsable</h4>
            <p>Luis Tapia , desarrollador de Softwate, Lima, Perú. Contacto: resuresua@gmail.com.</p>

            <h4>Datos que recojo</h4>
            <p>Nombre, correo electrónico, teléfono (opcional) y el mensaje que envías mediante el formulario de contacto.</p>

            <h4>Para qué los uso</h4>
            <p>Únicamente para responder tu consulta y, si corresponde, enviarte una propuesta de trabajo. No los uso para publicidad ni los vendo o comparto con terceros.</p>

            <h4>Servicios externos</h4>
            <p>El formulario funciona con Web3Forms, que solo reenvía el mensaje a mi correo. El sitio registra el número de visitas de forma anónima, sin guardar datos personales.</p>

            <h4>Cuánto tiempo los guardo</h4>
            <p>El tiempo necesario para atender tu consulta, o hasta que pidas eliminarlos.</p>

            <h4>Tus derechos</h4>
            <p>Puedes pedir acceder, corregir o eliminar tus datos escribiendo a resuresua@gmail.com, conforme a la Ley N.º 29733 de Protección de Datos Personales.</p>

            <p className="modal__policy-date">Última actualización: 14 de octubre de 2026.</p>

            <button type="button" className="btn btn--blue" onClick={() => setPolicyOpen(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}