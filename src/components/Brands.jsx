import { FaWater, FaPaperPlane, FaLeaf, FaMountain, FaSun, FaCubes } from "react-icons/fa";

const brands = [
  { name: "oceanic", icon: <FaWater /> },
  { name: "paperplane", icon: <FaPaperPlane /> },
  { name: "leaf & co.", icon: <FaLeaf /> },
  { name: "northern", icon: <FaMountain /> },
  { name: "sundaze", icon: <FaSun /> },
  { name: "hive digital", icon: <FaCubes /> },
];

export default function Brands() {
  // Se duplica la lista para que el bucle sea continuo
  const items = [...brands, ...brands];

  return (
    <section className="brands">
      <div className="container brands__viewport">
        <div className="brands__track">
          {items.map((b, i) => (
            <div className="brands__item" key={i} aria-hidden={i >= brands.length}>
              {b.icon}
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}