export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  image: string;
  imagePosition?: string;
  techStack: string[];
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SendCredit",
    description:
      "Canadian telecommunications platform with multi-language support and integrated global payment gateways.",
    longDescription:
      "A Canadian-based telecommunications web application built with Next.js 14 App Router. Features server-side rendering, secure JWT authentication via Auth.js, Pay360 and Adyen payment integration, and full internationalization for English, Spanish, and UK English.",
    url: "https://sendcredit.com/en/us",
    image: "/send-credit.png",
    imagePosition: "center top",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Auth.js",
      "Redux Toolkit",
      "React Query",
      "Pay360",
      "Adyen",
      "next-intl",
    ],
    category: "Telecom",
  },
  {
    id: 2,
    title: "Talk Home App",
    description:
      "International calling and communication platform with real-time features and seamless UX.",
    longDescription:
      "A global communication platform for affordable international calling. Developed with Next.js and integrates real-time features, smooth payment flows, and a highly optimized multilingual interface.",
    url: "https://app.talk-home.com/en",
    image: "/tha.png",
    imagePosition: "center top",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST API",
      "i18n",
      "SCSS",
    ],
    category: "Telecom",
  },
  {
    id: 3,
    title: "Talk Home Cards",
    description:
      "Digital calling card management platform with secure payment processing.",
    longDescription:
      "A digital calling card platform that allows users to purchase and manage international calling cards. Features secure Adyen checkout integration, card tokenization, and 3D Secure authentication.",
    url: "https://cards.talk-home.com/",
    image: "/thcc.png",
    imagePosition: "center top",
    techStack: [
      "Next.js",
      "Adyen Checkout",
      "TypeScript",
      "SCSS",
      "React Query",
    ],
    category: "Fintech",
  },
  {
    id: 4,
    title: "Mobile Talk Home",
    description:
      "Canadian telecommunications Platform with Dynamic Subscription & SIM Management Engines",
    longDescription:
      "A comprehensive telecom web application delivering highly responsive interfaces for 5G network plans. Integrates advanced state management for dynamic 30-day/12-month plan configurations, frictionless user onboarding (new vs. existing flows), real-time quick top-ups, and streamlined PAC/STAC carrier porting functionalities.",
    url: "https://mobile.talk-home.com/",
    image: "/talk-home.png",
    imagePosition: "center top",
    techStack: ["HTML", "SCSS", ".Net Mvc", "SQL"],
    category: "Telecom",
  },
  {
    id: 5,
    title: "RWG Mobile Wales",
    description: "RWG Mobile – Telecom E-Commerce & SIM Management Platform",
    longDescription:
      "A high-performance, fully responsive telecommunications web application built to streamline SIM card orders, mobile top-ups, and subscription management.",
    url: "https://www.rwgmobile.wales/",
    image: "/rwg.png",
    imagePosition: "center top",
    techStack: [
      "Next.js",
      "Redux Toolkit",
      "SCSS",
      "REST API",
      "Responsive Design",
    ],
    category: "Telecom",
  },
  {
    id: 6,
    title: "Ultimate Marine",
    description:
      "Florida-Based Luxury Marine Platform with Real-Time Multi-Location Inventory Engines",
    longDescription:
      "A comprehensive e-commerce and dealership web application showcasing premium boat brands across four regional showrooms. Integrates dynamic frontend filtering for new, demo, and used marine inventory, complex service-scheduling modules, interactive boat show/event timelines, and automated financing and trade-in submission funnels.",
    url: "https://ultimatemarine.com/",
    image: "/ultimate.png",
    imagePosition: "center top",
    techStack: ["React.js", "Node.Js", "Responsive Design"],
    category: "E-commerce",
  },
];
