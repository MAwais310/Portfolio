"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Image from "next/image";
import { personalData } from "@/data/personalData";
import styles from "./Hero.module.scss";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Animated background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <motion.div {...fadeUp(0.1)} className={styles.badge}>
            <span className={styles.statusDot} />
            {personalData.availableForWork
              ? "Available for opportunities"
              : "Currently unavailable"}
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} className={styles.name}>
            Hi, I&apos;m{" "}
            <span className={styles.highlight}>{personalData.name}</span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} className={styles.titleWrapper}>
            <h2 className={styles.title}>{personalData.title}</h2>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className={styles.tagline}>
            {personalData.tagline}
          </motion.p>

          <motion.p {...fadeUp(0.5)} className={styles.summary}>
            {personalData.summary}
          </motion.p>

          <motion.div {...fadeUp(0.6)} className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
              <FiArrowDown className={styles.btnIcon} />
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get In Touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.7)} className={styles.socials}>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.avatarWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className={styles.avatarRing} />
          <div className={styles.avatarGlow} />
          <div className={styles.avatar}>
            <Image
              src="/profilee.png"
              alt={personalData.name}
              fill
              sizes="(max-width: 600px) 180px, 240px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
          <div className={styles.floatBadge1}>
            <span>5+ Years</span>
            <small>Experience</small>
          </div>
          <div className={styles.floatBadge2}>
            <span>20+</span>
            <small>Projects</small>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <FiArrowDown className={styles.scrollIcon} />
        <span>Scroll down</span>
      </motion.a>
    </section>
  );
}
