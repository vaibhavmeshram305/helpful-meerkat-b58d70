// Edit these items to change the engineering loadout.
export const skills = [
  {
    "title": "MATLAB / SIMULINK",
    "type": "MODELING ENGINE",
    "desc": "Mathematical and block-level simulation, RLC modeling, dq0 waveforms, grid methods and converter-controller studies.",
    "glyph": "wave"
  },
  {
    "title": "SIMSCAPE / SPS",
    "type": "ELECTRICAL SIMULATION",
    "desc": "Electrical network models and Specialized Power Systems components for circuit and converter-oriented investigations.",
    "glyph": "nodes"
  },
  {
    "title": "P / PI / PID",
    "type": "CONTROL SYSTEMS",
    "desc": "Feedback controllers, reference signals, proportional and integral action, transient behavior and tuning investigations.",
    "glyph": "sliders"
  },
  {
    "title": "PV / MPPT",
    "type": "RENEWABLE CONTROL",
    "desc": "PV monitoring, waveform filtering and explored voltage-reference generation for power-converter control.",
    "glyph": "sun"
  },
  {
    "title": "POWER FLOW",
    "type": "GRID OPERATIONS",
    "desc": "Admittance-matrix construction and Newton–Raphson power-system load-flow methods.",
    "glyph": "grid"
  },
  {
    "title": "ABC–DQ0",
    "type": "REFERENCE FRAMES",
    "desc": "Balanced and unbalanced three-phase input studies, stationary frames and synchronous rotating frames.",
    "glyph": "rotate"
  },
  {
    "title": "EMBEDDED C",
    "type": "CONTROLLER PROGRAMMING",
    "desc": "TI C2000 / F28335 Code Composer Studio exercises, waveform generation, filtering and linker configuration.",
    "glyph": "chip"
  },
  {
    "title": "LATEX / REPORTS",
    "type": "DOCUMENTATION",
    "desc": "Technical reports, structured manuscripts, equations, figures and engineering manuals.",
    "glyph": "page"
  },
  {
    "title": "KICAD / CAD",
    "type": "DESIGN TOOLS",
    "desc": "Exposure to KiCad and AutoCAD alongside electrical engineering documentation and design-oriented work.",
    "glyph": "design"
  },
  {
    "title": "EV CHARGING",
    "type": "RESEARCH INTEL",
    "desc": "Bidirectional charging interests, current-sharing logic, protection controls and grid integration topics.",
    "glyph": "bolt"
  },
  {
    "title": "HARMONICS",
    "type": "SIGNAL STUDIES",
    "desc": "Sine-wave harmonics, low-pass-filter exploration and dq0 transformation of nonideal three-phase inputs.",
    "glyph": "wave"
  },
  {
    "title": "TESTING",
    "type": "LAB EXPOSURE",
    "desc": "Electrical testing and documentation exposure at National Test House: insulation resistance, relay/switchgear and panel wiring.",
    "glyph": "check"
  }
];

// SVG symbols for each equipment category.
export const glyphs = {
  "wave": "<path d=\"M3 27h9l7-20 11 39 9-19h20\"/>",
  "nodes": "<rect x=\"8\" y=\"13\" width=\"13\" height=\"13\"/><rect x=\"43\" y=\"36\" width=\"13\" height=\"13\"/><path d=\"M21 20h18v22h4M39 7v13H21M39 7h16\"/>",
  "sliders": "<path d=\"M8 14h48M8 32h48M8 50h48\"/><rect x=\"18\" y=\"8\" width=\"10\" height=\"12\"/><rect x=\"36\" y=\"26\" width=\"10\" height=\"12\"/><rect x=\"17\" y=\"44\" width=\"10\" height=\"12\"/>",
  "sun": "<circle cx=\"32\" cy=\"32\" r=\"12\"/><path d=\"M32 4v12m0 32v12M4 32h12m32 0h12M12 12l9 9m22 22 9 9M52 12l-9 9M21 43l-9 9\"/>",
  "grid": "<circle cx=\"13\" cy=\"14\" r=\"5\"/><circle cx=\"51\" cy=\"15\" r=\"5\"/><circle cx=\"32\" cy=\"50\" r=\"5\"/><path d=\"M18 14h28M16 19l13 26M48 19 35 45\"/>",
  "rotate": "<path d=\"M16 15a24 24 0 0 1 40 15M48 21l8 9 7-10M48 50a24 24 0 0 1-40-15M16 43l-8-9-7 10\"/>",
  "chip": "<rect x=\"15\" y=\"15\" width=\"34\" height=\"34\" rx=\"3\"/><path d=\"M23 4v11m18-11v11M23 49v11m18-11v11M4 23h11m-11 18h11m34-18h11m-11 18h11\"/><path d=\"M25 25h14v14H25z\"/>",
  "page": "<path d=\"M16 5h24l10 10v44H16zM40 5v12h10M23 29h20M23 39h20M23 49h15\"/>",
  "design": "<path d=\"m8 51 23-40 24 40ZM26 41h19M31 31h8M40 16l12 12\"/>",
  "bolt": "<path d=\"m37 4-24 32h19l-5 24 25-34H34z\"/>",
  "check": "<path d=\"M21 35 29 43 45 23M32 4 53 13v17c0 15-11 25-21 30C21 55 11 45 11 30V13z\"/>"
};
