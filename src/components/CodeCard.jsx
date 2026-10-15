import { useEffect, useState } from "react";

// Cada trozo de código con su color (c = clase CSS)
const jsTokens = (name) => [
  { t: "const", c: "kw" },
  { t: " developer ", c: "var" },
  { t: "= {\n" },
  { t: "  name: " },
  { t: `"${name}"`, c: "str" },
  { t: ",\n  skills: [" },
  { t: '"Django"', c: "str" },
  { t: ", " },
  { t: '"Python"', c: "str" },
  { t: ",\n    " },
  { t: '"JavaScript"', c: "str" },
  { t: ", " },
  { t: '"React"', c: "str" },
  { t: "],\n  passion: " },
  { t: '"Develop scalable\n    systems and AI integration"', c: "str" },
  { t: "\n};" },
];

// Diccionario de Python: edita aquí la frase y los temas
const pyTokens = () => [
  { t: "dev", c: "var" },
  { t: " = {\n  " },
  { t: '"frase"', c: "key" },
  { t: ": " },
  { t: '"You will always be"', c: "str" },
  { t: "\n    " },
  { t: '"in my heart, 0-01x3-1010"', c: "str" },
  { t: ",\n  " },
  { t: '"enfoque"', c: "key" },
  { t: ": [\n    " },
  { t: '"RAG"', c: "str" },
  { t: ",\n    " },
  { t: '"Spring WebFlux"', c: "str" },
  { t: ",\n    " },
  { t: '"Hibernate, kafka"', c: "str" },
   { t: ",\n    " },
  { t: '"Arq. Hexagonal "', c: "str" },
  { t: ",\n  ],\n}" },
];

const PAUSE = 3500; // pausa antes de volver a escribir

export default function CodeCard({
  lang = "js",
  name = "Alex",
  className = "",
  delay = 0,
  speed = 45,
}) {
  const tokens = lang === "python" ? pyTokens() : jsTokens(name);
  const fullText = tokens.map((tk) => tk.t).join("");
  const total = fullText.length;
  const lines = fullText.split("\n").length;
  const [count, setCount] = useState(0);

  // Efecto máquina de escribir: suma una letra cada "speed" ms y reinicia al terminar
  useEffect(() => {
    const done = count >= total;
    const wait = done ? PAUSE : count === 0 ? delay + speed : speed;
    const id = setTimeout(() => setCount(done ? 0 : count + 1), wait);
    return () => clearTimeout(id);
  }, [count, total, delay, speed]);

  // Posición donde empieza cada trozo dentro del texto completo
  const starts = [];
  tokens.reduce((pos, tk) => {
    starts.push(pos);
    return pos + tk.t.length;
  }, 0);

  return (
    <div className={`code-card ${className}`} aria-hidden="true">
      <div className="code-card__bar">
        <span>&lt;/&gt; Code</span>
        <i className="code-card__dot" />
      </div>
      {/* El alto se fija según las líneas para que la tarjeta no crezca al escribir */}
      <pre
        className="code-card__body"
        style={{ minHeight: `calc(${lines * 1.7}em + 28px)` }}
      >
        {tokens.map((tk, i) => (
          <span key={i} className={tk.c ? `tk-${tk.c}` : undefined}>
            {tk.t.slice(0, Math.max(0, count - starts[i]))}
          </span>
        ))}
        <span className="code-card__cursor" />
      </pre>
    </div>
  );
}
