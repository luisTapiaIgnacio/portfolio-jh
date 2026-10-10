import { FiMapPin, FiMail, FiPhone, FiClock, FiLinkedin } from "react-icons/fi";
import { FaFacebookF, FaTiktok, FaGithub } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span><FiMapPin /> Gracias por tu mensaje. Te responderé lo antes posible.</span>
        <a href="mailto:resuresua@gmail.com"><FiMail /> resuresua@gmail.com</a>
        <a href="tel:+51999002030"><FiPhone /> (+51) 999 002 030</a>
        <span><FiClock /> Lunes - Sabado: 9:00 AM - 6:00 PM </span>
        <div className="topbar__social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>
    </div>
  );
}