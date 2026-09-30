import React, { useId } from "react";

// Drawn interface previews used as project covers until real screenshots are added.
// Each is an SVG on a 640×400 canvas, so it stays sharp at any size and costs almost nothing to load.

const C = {
  bg: "#211912",
  bar: "#2A2018",
  side: "#1C150F",
  panel: "#2A2018",
  stroke: "rgba(238,234,226,0.07)",
  line: "#3A2E22",
  gold: "#C6A15B",
  goldSoft: "#DCC088",
  em: "#5E8C73",
  ivory: "#EEEAE2",
  muted: "#B9AFA0",
  dim: "#7D7266",
  red: "#C9785D",
};

const Panel = ({ x, y, w, h }) => (
  <rect x={x} y={y} width={w} height={h} rx="6" fill={C.panel} stroke={C.stroke} />
);

const T = ({ x, y, size = 9, fill = C.muted, weight = 500, anchor = "start", children }) => (
  <text x={x} y={y} fontSize={size} fill={fill} fontWeight={weight} textAnchor={anchor}>
    {children}
  </text>
);

const Bar = ({ x, y, w, h = 6, fill = C.line }) => (
  <rect x={x} y={y} width={Math.max(w, 0)} height={h} rx={h / 2} fill={fill} />
);

const Pill = ({ x, y, w = 40, tone = "gold", children }) => {
  const color = { gold: C.gold, em: C.em, red: C.red }[tone];
  return (
    <g>
      <rect x={x} y={y - 9} width={w} height={13} rx="6.5" fill={color} fillOpacity="0.16" />
      <T x={x + w / 2} y={y} size={7.5} fill={color} weight={600} anchor="middle">
        {children}
      </T>
    </g>
  );
};

function Window({ label, url, brand, nav, active = 0, children }) {
  const clip = `w${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 640 400"
      className="block w-full h-auto"
      fontFamily="Manrope, sans-serif"
      role="img"
      aria-label={label}
    >
      <defs>
        <clipPath id={clip}>
          <rect width="640" height="400" rx="10" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="640" height="400" fill={C.bg} />
        <rect width="640" height="30" fill={C.bar} />
        {[18, 32, 46].map((cx) => (
          <circle key={cx} cx={cx} cy="15" r="4" fill={C.line} />
        ))}
        <rect x="230" y="7.5" width="180" height="15" rx="7.5" fill={C.bg} />
        <T x={320} y={18} size={7.5} fill={C.dim} anchor="middle">
          {url}
        </T>

        <rect y="30" width="120" height="370" fill={C.side} />
        <T x={16} y={54} size={10.5} fill={C.ivory} weight={700}>
          {brand}
        </T>
        {nav.map((item, i) => {
          const y = 82 + i * 22;
          const on = i === active;
          return (
            <g key={item}>
              {on && <rect x="8" y={y - 12} width="104" height="18" rx="4" fill={C.gold} fillOpacity="0.14" />}
              <rect x="16" y={y - 7} width="7" height="7" rx="1.5" fill={on ? C.gold : C.line} />
              <T x={30} y={y} size={8.5} fill={on ? C.goldSoft : C.dim} weight={on ? 600 : 500}>
                {item}
              </T>
            </g>
          );
        })}
        {children}
      </g>
      <rect x="0.5" y="0.5" width="639" height="399" rx="10" fill="none" stroke="rgba(238,234,226,0.14)" />
    </svg>
  );
}

function StudyMock() {
  const leaders = [
    ["Nadia", 26],
    ["You", 21.5],
    ["Arif", 18.2],
  ];
  return (
    <Window
      label="StudyTrack dashboard preview"
      url="studytrack / dashboard"
      brand="StudyTrack"
      nav={["Dashboard", "Sessions", "Flashcards", "Leaderboard", "Settings"]}
    >
      <T x={136} y={58} size={13} fill={C.ivory} weight={600}>
        Ready to focus?
      </T>
      <T x={624} y={58} size={8.5} fill={C.dim} anchor="end">
        12-day streak
      </T>

      <Panel x={136} y={72} w={176} h={184} />
      <T x={150} y={92} size={8.5} fill={C.dim}>
        Focus session
      </T>
      <circle cx="224" cy="160" r="48" fill="none" stroke={C.line} strokeWidth="8" />
      <circle
        cx="224"
        cy="160"
        r="48"
        fill="none"
        stroke={C.gold}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="210 302"
        transform="rotate(-90 224 160)"
      />
      <T x={224} y={166} size={19} fill={C.ivory} weight={600} anchor="middle">
        18:42
      </T>
      <T x={224} y={180} size={7.5} fill={C.dim} anchor="middle">
        remaining
      </T>
      <T x={224} y={238} size={8.5} anchor="middle">
        Pomodoro 3 of 4 · Algorithms
      </T>

      <Panel x={324} y={72} w={300} h={112} />
      <T x={338} y={92} size={8.5} fill={C.gold}>
        Flashcards · 24 due today
      </T>
      <T x={338} y={119} size={12.5} fill={C.ivory} weight={600}>
        What is the time complexity
      </T>
      <T x={338} y={136} size={12.5} fill={C.ivory} weight={600}>
        of binary search?
      </T>
      {["Again", "Hard", "Good", "Easy"].map((b, i) => (
        <g key={b}>
          <rect
            x={338 + i * 70}
            y="152"
            width="62"
            height="18"
            rx="4"
            fill={i === 2 ? C.gold : C.line}
            fillOpacity={i === 2 ? 0.9 : 1}
          />
          <T x={369 + i * 70} y={164} size={8} fill={i === 2 ? C.side : C.muted} weight={600} anchor="middle">
            {b}
          </T>
        </g>
      ))}

      <Panel x={324} y={196} w={144} h={60} />
      <T x={338} y={215} size={8.5} fill={C.dim}>
        This week
      </T>
      <T x={338} y={242} size={17} fill={C.ivory} weight={600}>
        21.5 h
      </T>
      <Panel x={480} y={196} w={144} h={60} />
      <T x={494} y={215} size={8.5} fill={C.dim}>
        Cards reviewed
      </T>
      <T x={494} y={242} size={17} fill={C.ivory} weight={600}>
        312
      </T>

      <Panel x={136} y={268} w={488} h={118} />
      <T x={150} y={289} size={9} fill={C.ivory} weight={600}>
        Leaderboard · this week
      </T>
      <T x={610} y={289} size={8} fill={C.dim} anchor="end">
        Hours
      </T>
      {leaders.map(([name, h], i) => {
        const y = 312 + i * 26;
        const you = name === "You";
        return (
          <g key={name}>
            <T x={150} y={y + 3} size={9} fill={C.dim}>
              {i + 1}
            </T>
            <circle cx="170" cy={y} r="7" fill={you ? C.gold : C.line} />
            <T x={184} y={y + 3} size={9} fill={you ? C.ivory : C.muted} weight={you ? 600 : 500}>
              {name}
            </T>
            <Bar x={250} y={y - 3} w={320} />
            <Bar x={250} y={y - 3} w={(320 * h) / 26} fill={you ? C.gold : C.em} />
            <T x={610} y={y + 3} size={9} anchor="end">
              {h}
            </T>
          </g>
        );
      })}
    </Window>
  );
}

function InventoryMock() {
  const kpis = [
    ["Items in stock", "1,284", C.ivory],
    ["Low stock", "17", C.gold],
    ["Open orders", "46", C.ivory],
    ["Suppliers", "32", C.ivory],
  ];
  const stockIn = [40, 52, 46, 60, 58, 72, 64, 80, 70, 86, 78, 92];
  const stockOut = [34, 48, 50, 52, 60, 62, 66, 70, 72, 76, 80, 84];
  return (
    <Window
      label="Inventory dashboard preview"
      url="erp / overview"
      brand="Inventory"
      nav={["Overview", "Items", "Movements", "Purchase orders", "Suppliers", "Audit log"]}
    >
      <T x={136} y={58} size={13} fill={C.ivory} weight={600}>
        Inventory overview
      </T>
      <circle cx="540" cy="55" r="3" fill={C.em} />
      <T x={624} y={58} size={8.5} fill={C.em} anchor="end">
        Live · updated 2s ago
      </T>

      {kpis.map(([label, value, color], i) => {
        const x = 136 + i * 124;
        return (
          <g key={label}>
            <Panel x={x} y={72} w={116} h={62} />
            <T x={x + 12} y={92} size={8.5} fill={C.dim}>
              {label}
            </T>
            <T x={x + 12} y={121} size={18} fill={color} weight={600}>
              {value}
            </T>
          </g>
        );
      })}

      <Panel x={136} y={146} w={300} h={150} />
      <T x={150} y={166} size={9} fill={C.ivory} weight={600}>
        Stock movement · 12 weeks
      </T>
      <rect x="322" y="159" width="7" height="7" rx="1.5" fill={C.gold} />
      <T x={333} y={166} size={7.5} fill={C.dim}>
        In
      </T>
      <rect x="352" y="159" width="7" height="7" rx="1.5" fill={C.em} />
      <T x={363} y={166} size={7.5} fill={C.dim}>
        Out
      </T>
      {stockIn.map((h, i) => (
        <g key={i}>
          <rect x={156 + i * 23} y={280 - h} width="8" height={h} rx="1.5" fill={C.gold} fillOpacity="0.9" />
          <rect x={165 + i * 23} y={280 - stockOut[i]} width="8" height={stockOut[i]} rx="1.5" fill={C.em} />
        </g>
      ))}
      <line x1="150" y1="280.5" x2="422" y2="280.5" stroke={C.line} />

      <Panel x={448} y={146} w={176} h={150} />
      <T x={462} y={166} size={9} fill={C.ivory} weight={600}>
        Reorder alerts
      </T>
      {["Steel sheet 2mm", "Hex bolts M8", "Packing film", "PVC granules"].map((item, i) => {
        const y = 192 + i * 26;
        return (
          <g key={item}>
            <T x={462} y={y} size={8.5}>
              {item}
            </T>
            <Pill x={572} y={y} w={40} tone={i === 1 ? "red" : "gold"}>
              {i === 1 ? "Order" : "Low"}
            </Pill>
          </g>
        );
      })}

      <Panel x={136} y={308} w={488} h={78} />
      {["Item", "On hand", "Reorder at", "Status"].map((h, i) => (
        <T key={h} x={[150, 330, 410, 500][i]} y={327} size={8} fill={C.dim}>
          {h}
        </T>
      ))}
      {[
        ["Aluminium rod", "420", "150", "In stock", "em"],
        ["Hex bolts M8", "80", "200", "Reorder", "red"],
      ].map(([item, onHand, at, status, tone], i) => {
        const y = 349 + i * 20;
        return (
          <g key={item}>
            <T x={150} y={y} size={8.5} fill={C.ivory}>
              {item}
            </T>
            <T x={330} y={y} size={8.5}>
              {onHand}
            </T>
            <T x={410} y={y} size={8.5}>
              {at}
            </T>
            <Pill x={500} y={y} w={48} tone={tone}>
              {status}
            </Pill>
          </g>
        );
      })}
    </Window>
  );
}

function PropertyMock() {
  const units = [
    ["A-101 · Rahman", "Paid", "em"],
    ["A-204 · Karim", "Paid", "em"],
    ["B-102 · Sultana", "Due", "gold"],
    ["B-305 · Hossain", "Overdue", "red"],
    ["C-110 · Akter", "Paid", "em"],
  ];
  const tickets = [
    ["Leaking tap · A-204", "Assigned · today", C.red],
    ["Lift inspection · B", "Scheduled · Thu", C.gold],
    ["Door lock · C-110", "New · 2h ago", C.em],
  ];
  return (
    <Window
      label="Property management portal preview"
      url="properties / overview"
      brand="Properties"
      nav={["Overview", "Units", "Tenants", "Rent", "Maintenance", "Reports"]}
    >
      <T x={136} y={58} size={13} fill={C.ivory} weight={600}>
        3 buildings · 42 units
      </T>
      <T x={624} y={58} size={8.5} fill={C.dim} anchor="end">
        This month
      </T>

      <Panel x={136} y={72} w={232} h={118} />
      <T x={150} y={92} size={8.5} fill={C.dim}>
        Rent collected
      </T>
      <T x={150} y={128} size={26} fill={C.ivory} weight={600}>
        86%
      </T>
      <T x={214} y={127} size={9}>
        36 of 42 units
      </T>
      <Bar x={150} y={146} w={204} h={8} />
      <Bar x={150} y={146} w={204 * 0.86} h={8} fill={C.gold} />
      <T x={150} y={176} size={8} fill={C.dim}>
        6 payments due · 2 overdue
      </T>

      <Panel x={380} y={72} w={244} h={118} />
      <T x={394} y={92} size={8.5} fill={C.dim}>
        Occupancy
      </T>
      <circle cx="440" cy="140" r="30" fill="none" stroke={C.line} strokeWidth="11" />
      <circle
        cx="440"
        cy="140"
        r="30"
        fill="none"
        stroke={C.em}
        strokeWidth="11"
        strokeDasharray="175 189"
        transform="rotate(-90 440 140)"
      />
      <T x={440} y={144} size={11} fill={C.ivory} weight={600} anchor="middle">
        93%
      </T>
      {[
        [C.em, "39 occupied"],
        [C.line, "3 vacant"],
        [C.gold, "2 leases renew soon"],
      ].map(([color, text], i) => (
        <g key={text}>
          <circle cx="492" cy={122 + i * 20} r="3.5" fill={color} />
          <T x={502} y={125 + i * 20} size={8.5}>
            {text}
          </T>
        </g>
      ))}

      <Panel x={136} y={202} w={300} h={184} />
      <T x={150} y={222} size={9} fill={C.ivory} weight={600}>
        Units
      </T>
      {units.map(([unit, status, tone], i) => {
        const y = 248 + i * 28;
        return (
          <g key={unit}>
            {i > 0 && <line x1="150" y1={y - 16.5} x2="422" y2={y - 16.5} stroke={C.stroke} />}
            <T x={150} y={y} size={8.5} fill={C.ivory}>
              {unit}
            </T>
            <Pill x={372} y={y} w={48} tone={tone}>
              {status}
            </Pill>
          </g>
        );
      })}

      <Panel x={448} y={202} w={176} h={184} />
      <T x={462} y={222} size={9} fill={C.ivory} weight={600}>
        Maintenance
      </T>
      <T x={610} y={222} size={8} fill={C.gold} anchor="end">
        4 open
      </T>
      {tickets.map(([title, meta, color], i) => {
        const y = 236 + i * 46;
        return (
          <g key={title}>
            <rect x="460" y={y} width="152" height="38" rx="4" fill={C.bg} />
            <circle cx="472" cy={y + 13} r="3.5" fill={color} />
            <T x={482} y={y + 16} size={8.5} fill={C.ivory}>
              {title}
            </T>
            <T x={482} y={y + 29} size={7.5} fill={C.dim}>
              {meta}
            </T>
          </g>
        );
      })}
    </Window>
  );
}

function SchoolMock() {
  const students = ["RA", "NK", "SH", "TM", "FA", "JB"];
  const fees = [
    ["Class 6", 0.92],
    ["Class 7", 0.78],
    ["Class 8", 0.85],
  ];
  const enrollment = [52, 56, 55, 61, 64, 63, 70, 74, 78, 84];
  const pts = enrollment.map((v, i) => [156 + (i * 260) / 9, 368 - (v - 50) * 2.1]);
  const line = pts.map((p) => p.join(",")).join(" ");
  return (
    <Window
      label="School operations dashboard preview"
      url="school / attendance"
      brand="School"
      nav={["Dashboard", "Admissions", "Attendance", "Fees", "Parents", "Reports"]}
      active={2}
    >
      <T x={136} y={58} size={13} fill={C.ivory} weight={600}>
        Class 8 · Section B
      </T>
      <T x={624} y={58} size={8.5} fill={C.dim} anchor="end">
        Term 2
      </T>

      <Panel x={136} y={72} w={300} h={168} />
      <T x={150} y={92} size={9} fill={C.ivory} weight={600}>
        Attendance · last 4 weeks
      </T>
      {students.map((s, r) => (
        <g key={s}>
          <T x={150} y={115 + r * 13} size={7.5} fill={C.dim}>
            {s}
          </T>
          {Array.from({ length: 20 }, (_, c) => {
            const absent = (r * 7 + c * 3) % 17 === 0;
            const late = !absent && (r * 5 + c * 2) % 13 === 0;
            return (
              <rect
                key={c}
                x={176 + c * 12.5}
                y={106 + r * 13}
                width="10"
                height="10"
                rx="2"
                fill={absent ? C.gold : late ? C.goldSoft : C.em}
                fillOpacity={absent ? 0.95 : late ? 0.45 : 0.55 + ((r + c) % 4) * 0.1}
              />
            );
          })}
        </g>
      ))}
      <T x={150} y={210} size={8} fill={C.dim}>
        Class average
      </T>
      <T x={150} y={229} size={15} fill={C.ivory} weight={600}>
        94.2%
      </T>
      <T x={228} y={228} size={8.5}>
        3 absences flagged to parents today
      </T>

      <Panel x={448} y={72} w={176} h={168} />
      <T x={462} y={92} size={9} fill={C.ivory} weight={600}>
        Fee collection
      </T>
      {fees.map(([cls, pct], i) => {
        const y = 120 + i * 38;
        return (
          <g key={cls}>
            <T x={462} y={y} size={8.5}>
              {cls}
            </T>
            <T x={610} y={y} size={8.5} fill={C.ivory} anchor="end">
              {Math.round(pct * 100)}%
            </T>
            <Bar x={462} y={y + 8} w={148} />
            <Bar x={462} y={y + 8} w={148 * pct} fill={i === 1 ? C.gold : C.em} />
          </g>
        );
      })}

      <Panel x={136} y={252} w={300} h={134} />
      <T x={150} y={272} size={9} fill={C.ivory} weight={600}>
        Enrollment
      </T>
      <T x={422} y={272} size={8.5} fill={C.em} anchor="end">
        +8% this year
      </T>
      <polygon points={`156,372 ${line} 416,372`} fill={C.gold} fillOpacity="0.08" />
      <polyline points={line} fill="none" stroke={C.gold} strokeWidth="2" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={C.gold} />
      ))}
      <line x1="150" y1="372.5" x2="422" y2="372.5" stroke={C.line} />

      <Panel x={448} y={252} w={176} h={134} />
      <T x={462} y={272} size={9} fill={C.ivory} weight={600}>
        Parent messages
      </T>
      {[
        ["Mrs. Akter", "Re: fee receipt"],
        ["Mr. Hasan", "Absence noted, thanks"],
        ["Mrs. Roy", "Parent meeting Saturday?"],
      ].map(([name, msg], i) => {
        const y = 296 + i * 30;
        return (
          <g key={name}>
            <circle cx="470" cy={y} r="7" fill={C.line} />
            <T x={484} y={y - 2} size={8.5} fill={C.ivory}>
              {name}
            </T>
            <T x={484} y={y + 10} size={7.5} fill={C.dim}>
              {msg}
            </T>
          </g>
        );
      })}
    </Window>
  );
}

export const MOCKS = {
  study: StudyMock,
  inventory: InventoryMock,
  property: PropertyMock,
  school: SchoolMock,
};
