import React, { useId } from "react";

// The "before" side of the before/after slider: the spreadsheets and sticky notes a business
// runs on before it has a proper system. Same 640×400 canvas as ProjectMocks, so the two line up.
//
// Cell text conventions: a leading "!" marks an error cell (red), a leading "~" is crossed out.

const P = {
  paper: "#F4F1EA",
  bar: "#E4DDD0",
  tool: "#ECE6DA",
  head: "#E8E1D4",
  grid: "#D6CDBE",
  text: "#4F473D",
  dim: "#8C8375",
  red: "#B8503A",
  redBg: "#F3D5CB",
  yellow: "#F2D67A",
  peach: "#F3B89B",
  ink: "#4A3B28",
};

const HAND = "'Marker Felt', 'Segoe Print', 'Bradley Hand', cursive";
const ROW_H = 24;
const TOP = 88;

function Sheet({ label, file, formula, cols, rows, notes }) {
  const uid = useId().replace(/:/g, "");
  const xs = cols.reduce((acc, c) => [...acc, acc[acc.length - 1] + c.w], [26]);

  return (
    <svg viewBox="0 0 640 400" className="block w-full h-auto" fontFamily="Manrope, sans-serif" role="img" aria-label={label}>
      <defs>
        <clipPath id={`c${uid}`}>
          <rect width="640" height="400" rx="10" />
        </clipPath>
        <filter id={`s${uid}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#3A2A1A" floodOpacity="0.25" />
        </filter>
      </defs>
      <g clipPath={`url(#c${uid})`}>
        <rect width="640" height="400" fill={P.paper} />

        {/* title bar, toolbar, formula bar */}
        <rect width="640" height="28" fill={P.bar} />
        {[16, 30, 44].map((cx) => (
          <circle key={cx} cx={cx} cy="14" r="4" fill={P.grid} />
        ))}
        <text x="320" y="17.5" fontSize="8.5" fill={P.dim} textAnchor="middle">
          {file}
        </text>
        <rect y="28" width="640" height="22" fill={P.tool} />
        {Array.from({ length: 14 }, (_, i) => (
          <rect key={i} x={12 + i * 22} y="34" width="14" height="10" rx="2" fill={P.grid} />
        ))}
        <line x1="0" y1="70.5" x2="640" y2="70.5" stroke={P.grid} />
        <text x="12" y="63" fontSize="8.5" fill={P.dim} fontStyle="italic">
          fx
        </text>
        <text x="32" y="63" fontSize="8.5" fill={P.text}>
          {formula}
        </text>

        {/* column letters and row numbers */}
        <rect y="71" width="640" height="17" fill={P.head} />
        <rect y="71" width="26" height="329" fill={P.head} />
        {cols.map((c, i) => (
          <text key={i} x={(xs[i] + xs[i + 1]) / 2} y="83" fontSize="8" fill={P.dim} textAnchor="middle">
            {String.fromCharCode(65 + i)}
          </text>
        ))}
        {Array.from({ length: 13 }, (_, r) => (
          <g key={r}>
            <text x="13" y={TOP + r * ROW_H + 15.5} fontSize="7.5" fill={P.dim} textAnchor="middle">
              {r + 1}
            </text>
            <line x1="0" y1={TOP + (r + 1) * ROW_H + 0.5} x2="640" y2={TOP + (r + 1) * ROW_H + 0.5} stroke={P.grid} />
          </g>
        ))}
        {xs.map((x) => (
          <line key={x} x1={x + 0.5} y1="71" x2={x + 0.5} y2="400" stroke={P.grid} />
        ))}

        {/* header row */}
        {cols.map((c, i) => (
          <text key={c.t} x={xs[i] + 6} y={TOP + 15.5} fontSize="8.5" fontWeight="700" fill={P.text}>
            {c.t}
          </text>
        ))}

        {/* data */}
        {rows.map((row, r) =>
          row.map((cell, i) => {
            if (!cell) return null;
            const y = TOP + (r + 1) * ROW_H;
            const error = cell.startsWith("!");
            const struck = cell.startsWith("~");
            const text = error || struck ? cell.slice(1) : cell;
            return (
              <g key={`${r}-${i}`}>
                {error && <rect x={xs[i] + 1} y={y + 1} width={cols[i].w - 1} height={ROW_H - 1} fill={P.redBg} />}
                <text x={xs[i] + 6} y={y + 15.5} fontSize="8.5" fill={error ? P.red : struck ? P.dim : P.text} fontWeight={error ? 700 : 400}>
                  {text}
                </text>
                {struck && (
                  <line x1={xs[i] + 5} y1={y + 12.5} x2={xs[i] + 8 + text.length * 4.4} y2={y + 12.5} stroke={P.red} strokeWidth="1" />
                )}
              </g>
            );
          })
        )}

        {/* sticky notes */}
        {notes.map((n, i) => (
          <g key={i} transform={`rotate(${n.rot} ${n.x + n.w / 2} ${n.y + n.h / 2})`}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} fill={n.color === "peach" ? P.peach : P.yellow} filter={`url(#s${uid})`} />
            <rect x={n.x + n.w / 2 - 18} y={n.y - 6} width="36" height="12" fill="#FFFFFF" fillOpacity="0.55" />
            {n.lines.map((line, j) => (
              <text key={j} x={n.x + 12} y={n.y + 26 + j * 17} fontSize="12.5" fill={P.ink} fontFamily={HAND}>
                {line}
              </text>
            ))}
          </g>
        ))}
      </g>
      <rect x="0.5" y="0.5" width="639" height="399" rx="10" fill="none" stroke="rgba(28,23,18,0.25)" />
    </svg>
  );
}

function InventoryBefore() {
  return (
    <Sheet
      label="Before: stock tracked in a messy spreadsheet"
      file="stock_count_FINAL_v3 (1).xlsx"
      formula="=SUM(C2:C48)   ← wrong range?"
      cols={[
        { t: "Item", w: 160 },
        { t: "Qty", w: 70 },
        { t: "Last count", w: 90 },
        { t: "Supplier", w: 110 },
        { t: "Notes", w: 184 },
      ]}
      rows={[
        ["Steel sheet 2mm", "40?", "12 Mar", "Rahim Steel", "ask Karim"],
        ["Hex bolts M8", "!0", "2 Feb", "—", "!OUT — order??"],
        ["Packing film", "15", "12 Mar", "PolyPack", "~20 (old count)"],
        ["Aluminium rod", "420", "", "Rahim Steel", ""],
        ["PVC granules", "!#REF!", "9 Jan", "?", ""],
        ["Paint (grey)", "6 tins", "28 Feb", "", "who took 2?"],
        ["Hex bolts M8", "80", "12 Mar", "", "duplicate row?"],
        ["Welding rods", "", "", "", ""],
      ]}
      notes={[
        { x: 440, y: 238, w: 160, h: 88, rot: 5, color: "yellow", lines: ["Bolts ran out AGAIN", "production stopped", "2 days!"] },
        { x: 290, y: 306, w: 132, h: 66, rot: -6, color: "peach", lines: ["Stock count Fri?", "who's doing it"] },
      ]}
    />
  );
}

function RentBefore() {
  return (
    <Sheet
      label="Before: rent tracked in a copied spreadsheet"
      file="rent_2026 (copy) - Copy.xlsx"
      formula='=IF(D4="yes","paid","CALL")'
      cols={[
        { t: "Unit", w: 70 },
        { t: "Tenant", w: 120 },
        { t: "Rent", w: 90 },
        { t: "Paid?", w: 80 },
        { t: "Notes", w: 254 },
      ]}
      rows={[
        ["A-101", "Rahman", "18,000", "yes", ""],
        ["A-204", "Karim", "16,500", "yes", "tap leaking — called 3x"],
        ["B-102", "Sultana", "21,000", "!??", "said she paid cash"],
        ["B-305", "Hossain", "18,000", "!NO", "2 months — call again"],
        ["C-110", "Akter", "15,000", "yes", ""],
        ["C-204", "", "", "", "!vacant? check"],
        ["A-305", "Chowdhury", "19,500", "part", "~3,000 left   5,000 left?"],
      ]}
      notes={[
        { x: 438, y: 232, w: 150, h: 72, rot: 4, color: "yellow", lines: ["Lease A-204", "expires when??"] },
        { x: 282, y: 300, w: 136, h: 70, rot: -5, color: "peach", lines: ["Lift repair —", "call Tues"] },
      ]}
    />
  );
}

function SchoolBefore() {
  const names = ["Rafi A.", "Nadia K.", "Sami H.", "Tania M.", "Farhan A.", "Jui B.", "Arif R.", "Mim S."];
  const fees = ["paid", "!due", "paid", "?", "!due", "paid", "paid", "?"];
  const rows = names.map((name, r) => [
    name,
    ...Array.from({ length: 12 }, (_, c) => {
      const v = (r * 7 + c * 3) % 11;
      return v === 0 ? "!A" : v === 1 ? "" : "P";
    }),
    fees[r],
  ]);
  return (
    <Sheet
      label="Before: attendance and fees in a paper-style register"
      file="attendance_class8B_final_final.xlsx"
      formula='=COUNTIF(B3:M3,"A")'
      cols={[
        { t: "Student", w: 110 },
        ...Array.from({ length: 12 }, (_, i) => ({ t: String(i + 1), w: 32 })),
        { t: "Fees", w: 120 },
      ]}
      rows={rows}
      notes={[
        { x: 446, y: 240, w: 150, h: 72, rot: 5, color: "yellow", lines: ["12 students", "fees unpaid?"] },
        { x: 292, y: 304, w: 146, h: 68, rot: -6, color: "peach", lines: ["Parent meeting —", "who calls whom?"] },
      ]}
    />
  );
}

export const BEFORE_MOCKS = {
  inventory: InventoryBefore,
  rent: RentBefore,
  school: SchoolBefore,
};
