export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Core Languages",
    icon: "⚡",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Context API"],
  },
  {
    category: "Styling",
    icon: "🎨",
    skills: ["SCSS / Sass", "Tailwind CSS", "MUI", "CSS Modules"],
  },
  {
    category: "APIs & Data",
    icon: "🔗",
    skills: ["REST API", "GraphQL", "Axios"],
  },
  {
    category: "Auth & Payments",
    icon: "🔐",
    skills: ["JWT", "Auth.js (NextAuth)"],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      "Git",
      "Jira",
      "Google Tag Manager",
      "Performance Optimization",
      "Unit Testing",
    ],
  },
];

export const techBadges = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "Git",
];
