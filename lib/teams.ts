
export const TEAMS = [
  {
    name: "Mechanical",
    description:
      "Mechanical designs, fabricates, and tests the physical hardware: frames, moving parts, mounts, and how loads transfer through the assembly. Work is modeled in CAD, materials are chosen for strength and weight, and parts are machined or sourced to fit the space and loads the design requires. Before other subsystems depend on a design, the team checks clearances, basic stiffness, and wear on sliding or rotating surfaces, and aligns with electrical and software on where wires run and how boards attach.",
    logoSrc: "/team-logos/mechanical.svg",
    photoSrc: "/team-photos/mechanical/mechanical.jpeg",
  },
  {
    name: "Electrical",
    description:
      "Electrical designs, builds, and tests how power and data move between batteries, circuit boards, sensors, and motors or other actuators. That includes fusing or protection, connector choices, grounding, and wiring harnesses labeled so problems can be traced quickly. Circuits are proven on the bench (continuity, supply voltages, and basic signal checks) before everything is integrated, and software is given a clear map of pins, timing, and what should happen when something faults.",
    logoSrc: "/team-logos/electrical.svg",
    photoSrc: "/team-photos/electrical/electrical.jpeg",
  },
  {
    name: "Software",
    description:
      "Software designs, implements, and tests the programs that read sensors, command outputs, and run control logic on the hardware. Work spans low-level device code, communication between chips, feedback control, and telemetry (live data from the system), using version control, repeatable builds, and tests with hardware connected when possible. The team refines calibration and error handling when links or sensors misbehave, staying aligned with electrical on voltage and timing assumptions.",
    logoSrc: "/team-logos/software.svg",
    photoSrc: "/team-photos/software/software.jpeg",
  },
  {
    name: "Business",
    description:
      "Business coordinates sponsors, budgets, and the paperwork that keeps parts orders and travel moving. That includes outreach, updates people can share upward, tracking spending against the plan, and lining up timelines with what the technical leads believe is realistic.",
    logoSrc: "/team-logos/business.svg",
    photoSrc: "/team-photos/business/business.jpeg",
  },
] as const;

export type Team = (typeof TEAMS)[number];
