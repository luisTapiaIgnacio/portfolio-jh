// Datos de ejemplo: reemplázalos por los reales (ver nota al final del archivo)
const data = [
  { month: "Ene", visits: 120 },
  { month: "Feb", visits: 180 },
  { month: "Mar", visits: 160 },
  { month: "Abr", visits: 240 },
  { month: "May", visits: 310 },
  { month: "Jun", visits: 290 },
  { month: "Jul", visits: 380 },
  { month: "Ago", visits: 450 },
];

// Medidas del gráfico (SVG)
const W = 420;
const H = 210;
const PAD = { top: 30, right: 18, bottom: 28, left: 40 };

export default function VisitorsChart() {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const max = Math.ceil(Math.max(...data.map((d) => d.visits)) / 100) * 100;

  const x = (i) => PAD.left + (i * innerW) / (data.length - 1);
  const y = (v) => PAD.top + innerH - (v / max) * innerH;

  const line = data.map((d, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(d.visits)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${PAD.top + innerH} L${PAD.left},${PAD.top + innerH} Z`;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => Math.round(max * t));

  const last = data[data.length - 1];
  const lastX = x(data.length - 1);
  const lastY = y(last.visits);
  const total = data.reduce((sum, d) => sum + d.visits, 0);

  return (
    <div className="visits">
      <div className="visits__head">
        <h3>VISITANTES POR MES</h3>
        <span>Total: <strong>{total.toLocaleString("es-PE")}</strong></span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Gráfico de visitantes por mes">
        {/* Líneas guía y valores del eje Y */}
        {ticks.map((t) => (
          <g key={t}>
            <line className="visits__grid" x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} />
            <text className="visits__label" x={PAD.left - 8} y={y(t) + 3} textAnchor="end">{t}</text>
          </g>
        ))}

        {/* Meses en el eje X */}
        {data.map((d, i) => (
          <text className="visits__label" key={d.month} x={x(i)} y={H - 8} textAnchor="middle">{d.month}</text>
        ))}

        <path className="visits__area" d={area} />
        <path className="visits__line" d={line} />

        {data.map((d, i) => (
          <circle className="visits__dot" key={d.month} cx={x(i)} cy={y(d.visits)} r="3.5">
            <title>{`${d.month}: ${d.visits} visitas`}</title>
          </circle>
        ))}

        {/* Etiqueta con el valor del último mes */}
        <g transform={`translate(${Math.min(lastX - 22, W - 46)}, ${lastY - 28})`}>
          <rect className="visits__badge" width="44" height="20" rx="5" />
          <text className="visits__badge-text" x="22" y="14" textAnchor="middle">{last.visits}</text>
        </g>
      </svg>
    </div>
  );
}

/*
  NOTA: una web hecha solo con React no puede contar visitantes por sí sola.
  Para datos reales necesitas un servicio de analítica (por ejemplo Google Analytics)
  o tu propio backend que guarde las visitas, y luego cargar aquí esos números
  con fetch dentro de un useEffect en lugar del arreglo "data".
*/