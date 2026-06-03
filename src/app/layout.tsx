import type { Metadata } from "next";
import "../styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";

export const metadata: Metadata = {
  title: "Muhammad Awais Tariq – Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 5+ years building scalable React.js and Next.js applications. Specialized in high-performance, responsive web apps with TypeScript, GraphQL, and modern UI patterns.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Muhammad Awais Tariq",
    "Islamabad",
    "Senior Frontend Developer",
    "JavaScript",
    "Redux",
    "GraphQL",
  ],
  authors: [
    {
      name: "Muhammad Awais Tariq",
      url: "https://www.linkedin.com/in/mawaistariq",
    },
  ],
  openGraph: {
    title: "Muhammad Awais Tariq – Senior Frontend Developer",
    description:
      "Building scalable, high-performance web experiences with React.js & Next.js.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
