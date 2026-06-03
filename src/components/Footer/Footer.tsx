"use client";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { personalData } from "@/data/personalData";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>
            AT<span className={styles.dot}>.</span>
          </span>
          <p className={styles.tagline}>
            Building premium web experiences from Islamabad.
          </p>
        </div>

        <div className={styles.socials}>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <FiLinkedin />
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <FiGithub />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email"
            className={styles.socialLink}
          >
            <FiMail />
          </a>
        </div>

        <p className={styles.copy}>
          © {year} {personalData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
