'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { experienceData } from '@/data/experienceData';
import styles from './Experience.module.scss';

export default function Experience() {
  const [activeId, setActiveId] = useState(1);
  const active = experienceData.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionHeading
          label="Experience"
          title="My Professional Journey"
          subtitle="5+ years crafting digital products across telecom, fintech, and real estate."
        />

        <div className={styles.layout}>
          {/* Sidebar tabs */}
          <div className={styles.tabs}>
            {experienceData.map((exp) => (
              <button
                key={exp.id}
                className={`${styles.tab} ${activeId === exp.id ? styles.tabActive : ''}`}
                onClick={() => setActiveId(exp.id)}
              >
                <span className={styles.tabDot} />
                <div className={styles.tabText}>
                  <span className={styles.tabCompany}>{exp.company}</span>
                  <span className={styles.tabPeriod}>{exp.period}</span>
                </div>
                {exp.current && <span className={styles.currentBadge}>Current</span>}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <motion.div
            key={active.id}
            className={styles.panel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className={styles.panelHeader}>
              <div>
                <h3 className={styles.role}>{active.role}</h3>
                <p className={styles.company}>@ {active.company}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{active.period}</span>
                <span className={styles.location}>📍 {active.location}</span>
              </div>
            </div>

            <ul className={styles.points}>
              {active.points.map((point, i) => (
                <motion.li
                  key={i}
                  className={styles.point}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <span className={styles.bullet} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
