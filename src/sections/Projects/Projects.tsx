"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { projectsData } from "@/data/projectsData";
import styles from "./Projects.module.scss";

const categories = ["All", "Telecom", "Fintech", "E-commerce"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="A selection of production applications I've built and shipped."
          center
        />

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imageGlow} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    style={{
                      objectFit: "cover",
                      objectPosition: project.imagePosition ?? "center top",
                    }}
                  />
                  <div className={styles.imageShade} />
                  <div className={styles.imageOverlay}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.overlayBtn}
                      aria-label={`Visit ${project.title}`}
                    >
                      <FiExternalLink />
                      Visit Website
                    </a>
                  </div>
                  <span className={styles.categoryBadge}>
                    {project.category}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.cardEyebrow}>{project.description}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.longDescription}</p>

                  <div className={styles.techList}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.cardFooter}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.visitBtn}
                    >
                      <FiExternalLink />
                      Visit Website
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
