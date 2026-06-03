"use client";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { personalData } from "@/data/personalData";
import styles from "./About.module.scss";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "3", label: "Companies" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionHeading
          label="About Me"
          title="Passionate About Crafting Great Web Experiences"
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.card}>
              <div className={styles.cardGlow} />
              <div className={styles.avatarBlock}>
                <span className={styles.avatarInitials}>AT</span>
              </div>
              <h3 className={styles.cardName}>{personalData.name}</h3>
              <p className={styles.cardRole}>{personalData.title}</p>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <span>{personalData.location}</span>
                </div>
                <div className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <a href={`mailto:${personalData.email}`}>
                    {personalData.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
                </div>
              </div>
            </div>

            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className={styles.summary}>{personalData.summary}</p>

            <div className={styles.highlights}>
              {[
                {
                  icon: "⚡",
                  title: "Performance-First",
                  desc: "Obsessed with fast, optimized code and great Core Web Vitals scores.",
                },
                {
                  icon: "🧩",
                  title: "Clean Architecture",
                  desc: "Modular, maintainable components with separation of concerns.",
                },
                {
                  icon: "🌍",
                  title: "Global Apps",
                  desc: "Built i18n-ready apps serving users in multiple countries and languages.",
                },
                {
                  icon: "🔐",
                  title: "Security Conscious",
                  desc: "JWT auth, secure payment integrations, OWASP-aware coding practices.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className={styles.highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <span className={styles.highlightIcon}>{item.icon}</span>
                  <div>
                    <h4 className={styles.highlightTitle}>{item.title}</h4>
                    <p className={styles.highlightDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.education}>
              <h4 className={styles.educationLabel}>Education</h4>
              <div className={styles.educationItem}>
                <span className={styles.eduIcon}>🎓</span>
                <div>
                  <strong>Bachelor&apos;s of Software Engineering</strong>
                  <p>Comsats University Islamabad</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
