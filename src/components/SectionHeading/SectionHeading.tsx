'use client';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.scss';

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = false }: Props) {
  return (
    <motion.div
      className={`${styles.wrapper} ${center ? styles.center : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
