import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  // Aparece cuando bajas más de 400px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "scroll-top--show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
    >
      <FiArrowUp />
    </button>
  );
}