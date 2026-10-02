
export type Project = {
  name: string;
  /** Team names from `lib/teams.ts` that work on this project. */
  teams: string[];
  status: "Planning" | "In progress" | "Complete";
  description: string;
  /** Optional image in `public/projects/`. */
  imageSrc?: string;
};

/** Add real club projects here. The Projects page shows an empty state while this is empty. */
export const PROJECTS: Project[] = [];
