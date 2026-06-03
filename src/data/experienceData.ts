export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  points: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Uruk IT Solutions Pvt Ltd",
    period: "Apr 2024 – Present",
    location: "Islamabad, Pakistan",
    current: true,
    points: [
      "Designed and developed responsible web applications using React.js and Next.js, ensuring optimal performance and user experience across devices.",
      "Built dynamic data-driven pages using .NET Core to manage Frontend and backend logic effectively.",
      "Implemented secure JWT-based authentication using Auth.js (NextAuth)",
      "Utilized Google Tag Manager for SEO tracking and analytics, improving visibility and user engagement.",
      "Implemented internationalization using next-intl, enabling multi-language support for Spanish, English, and English (UK).",
      "Used GitHub for version control and collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    id: 2,
    role: "Ui Developer",
    company: "Vizz Web Solutions Pvt Ltd",
    period: "Nov 2022 – Jan 2024",
    location: "Rawalpindi, Pakistan",
    current: false,
    points: [
      "Translate UI/UX designs into responsive, high-performance web applications using React.js and Custom Stack.",
      "Managed and interacted with MongoDB database for data storage",
      "Optimized application performance by implementing lazy loading, achieving a 50% reduction in load times.",
      "Managed development tasks using Jira, ensuring timely delivery and alignment with project objectives.",
    ],
  },
  {
    id: 3,
    role: "Ui Developer",
    company: "DILIGENT Technologies Pvt Ltd",
    period: "Mar 2022 – Nov 2022",
    location: "Islamabad, Pakistan",
    current: false,
    points: [
      "Built real estate and financial applications using Html, Scss, Jquery.",
      "Managed development tasks using Jira, ensuring timely delivery and alignment with project objectives.",
    ],
  },
];
