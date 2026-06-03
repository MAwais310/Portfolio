"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiLinkedin, FiPhone } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { personalData } from "@/data/personalData";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link as a simple working fallback
    const mailto = `mailto:${personalData.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          center
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className={styles.infoText}>
              I&apos;m currently open to new opportunities. Whether it&apos;s a
              full-time role, freelance project, or just a friendly chat — my
              inbox is always open.
            </p>

            <div className={styles.contactLinks}>
              <a
                href={`mailto:${personalData.email}`}
                className={styles.contactLink}
              >
                <span className={styles.linkIcon}>
                  <FiMail />
                </span>
                <div>
                  <small>Email</small>
                  <span>{personalData.email}</span>
                </div>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.linkIcon}>
                  <FiLinkedin />
                </span>
                <div>
                  <small>LinkedIn</small>
                  <span>Muhammad Awais Tariq</span>
                </div>
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className={styles.contactLink}
              >
                <span className={styles.linkIcon}>
                  <FiPhone />
                </span>
                <div>
                  <small>Phone</small>
                  <span>{personalData.phone}</span>
                </div>
              </a>
            </div>

            <div className={styles.availabilityCard}>
              <span className={styles.dot} />
              <div>
                <strong>Available for Work</strong>
                <p>Open to Senior Frontend / Full-Stack roles</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={6}
                className={styles.textarea}
              />
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${sent ? styles.sent : ""}`}
            >
              {sent ? (
                "✓ Opening email client..."
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
