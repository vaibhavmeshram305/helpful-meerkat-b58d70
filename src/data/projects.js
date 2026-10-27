// Edit these nine operations to change mission cards, descriptions and briefings.
export const projects = [
  {
    "id": "OP-01",
    "title": "Dual-Path EV Charging Controller",
    "kind": "Research simulation in progress",
    "groups": [
      "ev",
      "sim",
      "control"
    ],
    "icon": "⚡",
    "description": "Main / auxiliary charging paths with PI current-sharing and protection.",
    "tags": [
      "Simulink",
      "PI Control",
      "EV Charging",
      "Specialized Power Systems"
    ],
    "overview": "Ongoing MATLAB/Simulink Specialized Power Systems research on a 1.5 kW main path and a 0.5 kW auxiliary path, including transient assistance, current-sharing concepts and current limitation.",
    "tasks": [
      "Explore reference-current generation for main and auxiliary paths.",
      "Inspect PI-controller tuning, transient response and auxiliary current peaks.",
      "Add current limiting and protection logic to the model."
    ],
    "scope": "Research simulation still under development. Current overshoot and PI tuning are being investigated. No hardware validation, production charger or verified performance improvement is claimed."
  },
  {
    "id": "OP-02",
    "title": "Series & Parallel RLC Modeling",
    "kind": "Simulation and technical report",
    "groups": [
      "sim",
      "writing"
    ],
    "icon": "∿",
    "description": "Transient response, resonance and comparison of circuit configurations.",
    "tags": [
      "MATLAB",
      "Simulink",
      "Simscape",
      "RLC"
    ],
    "overview": "Theoretical and simulation-oriented comparison of series and parallel RLC circuits, with transient behavior, frequency response and engineering applications.",
    "tasks": [
      "Develop Simulink circuit models and describe response behavior.",
      "Compare series and parallel arrangements through circuit theory.",
      "Prepare a detailed technical report with equations and applications."
    ],
    "scope": "Modeling exercises and technical documentation. Hardware measurements are not asserted."
  },
  {
    "id": "OP-03",
    "title": "abc–dq0 Frame Transformations",
    "kind": "Simulation exercise",
    "groups": [
      "sim",
      "grid"
    ],
    "icon": "⌁",
    "description": "Stationary and rotating reference-frame analysis of three-phase signals.",
    "tags": [
      "dq0",
      "50 Hz",
      "Harmonics",
      "Three Phase"
    ],
    "overview": "Study of abc–dq0 transformation using 100 V RMS, 50 Hz three-phase waveforms in stationary and synchronously rotating reference frames.",
    "tasks": [
      "Investigate balanced abc and reversed phase-sequence signals.",
      "Include third, fifth and seventh harmonic components and magnitude unbalance.",
      "Compare the representation of different inputs in both reference frames."
    ],
    "scope": "Coursework-oriented simulation exercise; not presented as published experimental research."
  },
  {
    "id": "OP-04",
    "title": "PV / MPPT Ripple Control Concept",
    "kind": "Control simulation concept",
    "groups": [
      "sim",
      "control"
    ],
    "icon": "☀",
    "description": "Filtering measured voltage/power ripple and forming PI-generated voltage reference.",
    "tags": [
      "PV",
      "MPPT",
      "PI Control",
      "Converters"
    ],
    "overview": "A MATLAB/Simulink control approach explored for PV voltage and power ripple filtering and reference generation.",
    "tasks": [
      "Compare raw distorted measurements with low-pass-filtered signals.",
      "Derive residual/error quantities from differences between measurements and filtered waveforms.",
      "Study PI-generated voltage reference and the downstream converter duty control."
    ],
    "scope": "Proposed and iteratively examined configuration. No verified gain in efficiency, MPPT tracking or energy yield is asserted."
  },
  {
    "id": "OP-05",
    "title": "Load-Flow & Grid Analysis",
    "kind": "Numerical method exploration",
    "groups": [
      "grid",
      "sim"
    ],
    "icon": "⌘",
    "description": "Y-bus construction and Newton–Raphson load-flow programming.",
    "tags": [
      "Y-bus",
      "NR Method",
      "Power Grid"
    ],
    "overview": "Educational exploration of nodal admittance and power-flow methods for electric network models.",
    "tasks": [
      "Work through 5-bus Y-bus formulation.",
      "Explore Newton–Raphson solution logic.",
      "Examine programming for IEEE 14-bus and 30-bus networks."
    ],
    "scope": "Numerical-method exercises; no measured power-grid deployment or benchmarked solver performance is claimed."
  },
  {
    "id": "OP-06",
    "title": "TI C2000 Waveform Programming",
    "kind": "Embedded C programming exercises",
    "groups": [
      "embedded"
    ],
    "icon": "▥",
    "description": "Signal generation, filtering and programming studies in TI Code Composer Studio.",
    "tags": [
      "Embedded C",
      "F28335",
      "CCS",
      "Harmonics"
    ],
    "overview": "Programming studies around TI TMS320F28335 / DSP2833x and Code Composer Studio, addressing waveform generation and numerical routines.",
    "tasks": [
      "Develop harmonic sine and sawtooth waveform code.",
      "Explore low-pass filtering and convolution routines.",
      "Work through include paths, linker configuration and target setup issues."
    ],
    "scope": "Source-code and toolchain exercises; validated physical hardware operation is not claimed."
  },
  {
    "id": "OP-07",
    "title": "EV Charging Technologies Review",
    "kind": "Technical review",
    "groups": [
      "ev",
      "writing"
    ],
    "icon": "▣",
    "description": "Charging architectures, standards, safety, communications and grid integration.",
    "tags": [
      "OCPP",
      "ISO 15118",
      "EVSE",
      "DAB"
    ],
    "overview": "Technical review work surveying EV charging technology, infrastructure, converter architectures and emerging integration directions.",
    "tasks": [
      "Review two-stage charger and dual-active-bridge converter concepts.",
      "Study OCPP, ISO 15118 and charging-station communication links.",
      "Discuss grid integration, safety and future charging directions."
    ],
    "scope": "Review and technical writing; not a claim to have built or tested the described charger technologies."
  },
  {
    "id": "OP-08",
    "title": "Gravity-Inspired Power Flow Control",
    "kind": "Proposed research concept only",
    "groups": [
      "grid",
      "writing",
      "control"
    ],
    "icon": "◎",
    "description": "Concept exploring congestion management in power networks.",
    "tags": [
      "Congestion",
      "Power Flow",
      "Control",
      "Research Idea"
    ],
    "overview": "An exploratory research proposal around gravity-inspired power-flow control for electrical-network congestion reduction.",
    "tasks": [
      "Define the power-network congestion problem.",
      "Propose the conceptual control mechanism and distinguish it from conventional approaches.",
      "Outline possible implementation stages, tradeoffs and investigation needs."
    ],
    "scope": "Research idea and technical formulation, not a verified algorithm, peer-reviewed result or deployed controller."
  },
  {
    "id": "OP-09",
    "title": "MATLAB & Simulink Technical Manual",
    "kind": "Technical writing / learning resource",
    "groups": [
      "writing",
      "sim"
    ],
    "icon": "▤",
    "description": "Expanded educational manual covering modeling and electrical applications.",
    "tags": [
      "Technical Writing",
      "LaTeX",
      "MATLAB",
      "Simulink"
    ],
    "overview": "Structured educational writing on MATLAB and Simulink concepts, electrical engineering applications, discrete-time systems and development workflows.",
    "tasks": [
      "Document MATLAB foundations and Simulink blocks.",
      "Cover electrical engineering models and discrete-time analysis.",
      "Write about logging, verification and embedded deployment concepts."
    ],
    "scope": "Educational manual and documentation; no certification as an official software training publication is implied."
  }
];
