
export const PROJECT_YEAR = "2026–27";

export type ProjectStatus = "Continued" | "New" | "Flagship";

export type ProjectLead = {
  name: string;
  role?: "Main lead" | "Sub-lead";
};

export type ProjectImage = {
  /** Path under `public/`, e.g. "/projects/sawppy/1.jpg". */
  src: string;
  alt: string;
};

export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  status: ProjectStatus;
  /** e.g. "Continued core project". */
  category?: string;
  leads: ProjectLead[];
  tagline?: string;
  /** Short skill tags shown on the collapsed card. */
  areas: string[];
  /** Shown first as a featured card. */
  flagship?: boolean;
  overview?: string[];
  /** Rows of the "Relevant skills & engineering concepts" table. */
  skills?: { area: string; concepts: string }[];
  /** Extra sections shown after the skills table. */
  sections?: ProjectSection[];
  /** Images are optional; empty frames show until they are added. */
  images?: ProjectImage[];
  imageCaption?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "interactive-robot",
    name: "Interactive Robot",
    status: "Flagship",
    category: "New flagship project",
    leads: [{ name: "Andreas", role: "Main lead" }],
    tagline:
      "An original interactive robot that can sense people and respond through motion, lights, sound, or other behaviors.",
    areas: [
      "Mechatronics",
      "Perception",
      "Embedded",
      "Controls",
      "System architecture",
    ],
    flagship: true,
    overview: [
      "This is the project where we want to try something more original. The idea is an interactive robot (humanoid, creature-like, or somewhere in between) that can sense people and respond with motion, lights, sound, or other behaviors. The exact design is not locked yet. The team will decide what is realistic for Rev 1, then build around that instead of trying to cram every idea into the first version.",
    ],
    skills: [
      {
        area: "System architecture",
        concepts:
          "Requirements, subsystem definition, interfaces, tradeoffs, design reviews",
      },
      {
        area: "Mechanical / Mechatronics",
        concepts:
          "CAD, mechanisms, actuators, servo/motor selection, 3D printing, packaging",
      },
      {
        area: "Electrical / Embedded",
        concepts:
          "Power distribution, custom PCBs, microcontrollers, sensors, wiring, communication buses",
      },
      {
        area: "Controls",
        concepts:
          "Actuator control, motion sequencing, feedback, state machines, behavior control",
      },
      {
        area: "Perception / Software",
        concepts:
          "C++ / Python, OpenCV, cameras, tracking, gesture/object detection, ROS2 where useful",
      },
      {
        area: "Human-robot interaction",
        concepts:
          "Responsive behaviors, interaction design, safety, user testing",
      },
      {
        area: "Integration",
        concepts:
          "Bring-up, debugging, testing, documentation, subsystem coordination",
      },
    ],
    sections: [
      {
        title: "Scope comes first",
        paragraphs: [
          "The first job is deciding what Rev 1 actually needs to do. The team will pick a realistic form and feature set, define the major subsystems, and build something we can actually finish and test this year.",
        ],
      },
      {
        title: "Possible first-version features",
        bullets: [
          "A few expressive movements or gestures that work reliably.",
          "Person, face, or object tracking using a camera or simpler sensors.",
          "Reactions triggered by touch, proximity, or gestures.",
          "Lights, sound, or display feedback that makes the robot feel responsive.",
        ],
      },
    ],
    images: [],
    imageCaption:
      "Concept images of other interactive robots. These are not the property of EHC.",
  },
  {
    slug: "robotic-arm",
    name: "4-Axis Robotic Arm",
    status: "Continued",
    category: "Continued core project",
    leads: [{ name: "Xander" }, { name: "Andreas" }, { name: "Geetha" }],
    areas: [
      "Mechatronics",
      "PCB / power",
      "Servo control",
      "Embedded",
      "Kinematics",
      "ROS2 (later)",
    ],
    images: [],
  },
  {
    slug: "sawppy-rover",
    name: "Sawppy Rover Upgrades",
    status: "Continued",
    category: "Continued core project",
    leads: [{ name: "Blake" }, { name: "Argi" }, { name: "Yuto" }],
    tagline:
      "Improve a rover that already works: cleaner hardware, better sensing, and more autonomy.",
    areas: [
      "System integration",
      "PCB / wiring",
      "CAD",
      "ROS2",
      "OpenCV",
      "Autonomy",
    ],
    overview: [
      "Sawppy is one of EHC's longer-running projects and already drives through a web interface. This year is less about rebuilding the rover and more about making it cleaner, easier to maintain, and more capable. That means fixing weak mechanical parts, cleaning up the wiring, improving the electronics, adding sensing/cameras, and starting to experiment with ROS2 and autonomy.",
    ],
    skills: [
      {
        area: "Mechanical",
        concepts:
          "CAD redesign, structural improvements, mounts/enclosures, 3D printing, serviceability",
      },
      {
        area: "Electrical",
        concepts:
          "Power distribution, wiring architecture, connectors, soldering/crimping, custom PCB design",
      },
      {
        area: "Embedded",
        concepts:
          "Servo interfaces, Raspberry Pi / microcontrollers, sensor and camera integration",
      },
      {
        area: "Software / Robotics",
        concepts: "Python, ROS2, OpenCV, teleoperation, perception, autonomy",
      },
      {
        area: "Systems",
        concepts:
          "Retrofit design, interface management, reliability, testing, debugging an existing robot",
      },
    ],
    sections: [
      {
        title: "Proposed upgrades",
        bullets: [
          "Clean up the electrical architecture and move toward a custom PCB / organized electronics bay.",
          "Rework wiring and connectors so the rover is easier to troubleshoot, repair, and modify.",
          "Redesign mechanical parts that are weak, awkward, or difficult to service.",
          "Add a camera and experiment with OpenCV-based perception.",
          "Start integrating ROS2 and build toward more autonomous behavior, navigation, or higher-level control.",
        ],
      },
      {
        title: "Good fit if…",
        paragraphs: [
          "Pick Sawppy if you like improving something that already works. There is useful work here for mechanical, electrical, embedded, software, perception, and robotics members.",
        ],
      },
    ],
    images: [],
  },
  {
    slug: "line-following-robot",
    name: "Line Following Robot",
    status: "Continued",
    category: "Continued core project",
    leads: [
      { name: "Thomas", role: "Main lead" },
      { name: "Andreas", role: "Sub-lead" },
    ],
    tagline:
      "Take the current prototype and turn it into a cleaner, more repeatable line-following robot.",
    areas: ["ESP32", "Sensors", "Motor control", "PID", "PCB design"],
    overview: [
      "The line follower already moves, senses the line, and uses PID steering, but it is still very much a prototype. It uses an ESP32, a five-channel TCRT5000 IR sensor array, a TB6612FNG motor driver, and two geared DC motors. This quarter is about making it something we can run repeatedly without constantly babysitting it: better calibration, cleaner wiring, encoder feedback, stronger control tuning, and eventually a custom PCB.",
    ],
    skills: [
      {
        area: "Embedded",
        concepts:
          "ESP32 / Arduino C++, GPIO, ADC/digital sensing, PWM, interrupts / timing",
      },
      {
        area: "Controls",
        concepts:
          "PID control, error calculation, tuning, differential drive, closed-loop behavior",
      },
      {
        area: "Electrical",
        concepts:
          "Motor drivers, power regulation, sensor wiring, breadboarding, PCB design",
      },
      {
        area: "Sensors / Feedback",
        concepts:
          "IR reflectance sensing, calibration, wheel encoders, noise / filtering",
      },
      {
        area: "Mechanical",
        concepts:
          "Mobile robot chassis, motor mounting, wheel/caster geometry, 3D printing",
      },
      {
        area: "Testing",
        concepts:
          "Serial debugging, repeatable track tests, parameter tuning, performance comparison",
      },
    ],
    sections: [
      {
        title: "Proposed upgrades",
        bullets: [
          "Keep tuning the PID controller and improve sensor calibration so the robot tracks the line more consistently.",
          "Add wheel-encoder feedback so the two motors behave more consistently.",
          "Improve or redesign the sensor array if sensing becomes the main limitation.",
          "Move off the breadboard toward a custom PCB and cleaner power / connector layout.",
          "Refine the chassis and packaging so the robot feels like a finished platform instead of a prototype.",
        ],
      },
      {
        title: "Good fit if…",
        paragraphs: [
          "Pick LFR if you want embedded programming, sensors, motors, PID control, PCB work, and lots of hands-on testing. It is a good controls project because you can see the effect of a code or tuning change almost immediately.",
        ],
      },
    ],
    images: [],
  },
  {
    slug: "slam-robot",
    name: "SLAM Robot",
    status: "New",
    category: "New core project",
    leads: [
      { name: "Palak", role: "Main lead" },
      { name: "Geetha", role: "Sub-lead" },
    ],
    tagline:
      "Build a rover that can map a room, determine its location, and navigate autonomously.",
    areas: ["LiDAR", "Odometry", "Sensors", "Navigation", "Embedded controls"],
    overview: [
      "This is a new project, so the team gets to make a lot of the early design decisions. We want to build a differential-drive rover that can be driven manually, estimate its own motion, build an indoor map with 2D LiDAR, and then navigate around that map on its own. The challenge will be getting the mechanical, electrical, embedded, and software pieces to agree with each other.",
      "The progression for this project is still being planned out. A key milestone this quarter is setting up the architecture, understanding the underlying system and project requirements, then building a proof-of-concept physical design using already manufactured components.",
    ],
    skills: [
      {
        area: "Robotics software",
        concepts:
          "ROS2 (TBD), nodes/topics, TF frames, RViz, SLAM Toolbox, Nav2",
      },
      {
        area: "Localization",
        concepts:
          "Odometry, coordinate frames, sensor fusion, uncertainty, mapping/localization",
      },
      {
        area: "Sensors",
        concepts:
          "2D LiDAR, IMU, wheel encoders, calibration, sampling / noise",
      },
      {
        area: "Embedded / Controls",
        concepts:
          "ESP32 or STM32, encoder reading, PID wheel-speed control, motor drivers",
      },
      {
        area: "Electrical",
        concepts:
          "Battery / regulation, power distribution, grounding, wiring, integration",
      },
      {
        area: "Mechanical",
        concepts:
          "Differential-drive chassis, sensor mounting, wheel alignment, packaging",
      },
    ],
    sections: [
      {
        title: "Potential stretch work",
        paragraphs: [
          "If the core robot is working early, add a camera for object detection or semantic mapping, try another localization sensor, or use the platform as a future testbed for controls, computer vision, and machine learning.",
        ],
      },
    ],
    images: [],
    imageCaption: "Concept images of other open-source SLAM robots.",
  },
];
