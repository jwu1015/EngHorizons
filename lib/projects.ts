
export const PROJECT_YEAR = "2026–27";

export type ProjectStatus = "Continued" | "New" | "Flagship";

export type Project = {
  name: string;
  status: ProjectStatus;
  leads: string[];
  /** Skills members can learn and practice on this project. */
  areas: string[];
  /** Shown first as a featured card. */
  flagship?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Interactive Robot",
    status: "Flagship",
    leads: ["Andreas"],
    areas: [
      "Mechatronics",
      "Perception",
      "Embedded",
      "Controls",
      "System architecture",
    ],
    flagship: true,
  },
  {
    name: "4-Axis Robotic Arm",
    status: "Continued",
    leads: ["Xander", "Andreas", "Geetha"],
    areas: [
      "Mechatronics",
      "PCB / power",
      "Servo control",
      "Embedded",
      "Kinematics",
      "ROS2 (later)",
    ],
  },
  {
    name: "Sawppy Rover Upgrades",
    status: "Continued",
    leads: ["Blake", "Argi", "Yuto", "Shiven"],
    areas: [
      "System integration",
      "PCB / wiring",
      "CAD",
      "ROS2",
      "OpenCV",
      "Autonomy",
    ],
  },
  {
    name: "Line Following Robot",
    status: "Continued",
    leads: ["Thomas", "Andreas"],
    areas: ["ESP32", "Sensors", "Motor control", "PID", "PCB design"],
  },
  {
    name: "SLAM Robot",
    status: "New",
    leads: ["Palak", "Geetha"],
    areas: ["LiDAR", "Odometry", "Sensors", "Navigation", "Embedded controls"],
  },
];
