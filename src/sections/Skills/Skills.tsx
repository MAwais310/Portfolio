'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import { skillsData } from '@/data/skillsData';
import styles from './Skills.module.scss';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          subtitle="A broad toolkit refined through 5+ years of building production-grade applications."
          center
        />

        <div className={styles.grid}>
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.category}</h3>
              </div>
              <div className={styles.tagList}>
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={styles.tag}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
