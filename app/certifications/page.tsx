"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  image: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Artificial Intelligence Certification",
    issuer: "Intel collab with Chandigarh University",
    date: "AUG 2025",
    credentialId: "CERT-ID-001",
    skills: ["Artificial Intelligence", "Machine Learning"],
    image: "/ai.jpeg",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "HTML, CSS Certification",
    issuer: "Cisco Networking Academy",
    date: "DEC 2025",
    credentialId: "CERT-ID-002",
    skills: ["HTML", "CSS"],
    image: "/html.jpeg",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Workshop of Google Kaggle",
    issuer: "Google",
    date: "NOV 2025",
    credentialId: "CERT-ID-003",
    skills: ["Kaggle Tools", "Data Analysis"],
    image: "/kaggle.jpeg",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Data Science Certification",
    issuer: "Infosys Springboard",
    date: "MARCH 2026",
    credentialId: "CERT-ID-004",
    skills: ["Data Science", "Python"],
    image: "/ds.jpeg",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "ECE Exhibition Workshop",
    issuer: "Lovely Professional University",
    date: "NOV 2025",
    credentialId: "CERT-ID-005",
    skills: ["Arduino", "ECE Projects"],
    image: "/ece.jpeg",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "Python Programming Certification",
    issuer: "Saylor Academy",
    date: "DEC 2025",
    credentialId: "CERT-ID-006",
    skills: ["Python", "Programming Fundamentals"],
    color: "#6366F1",
    image: "/python.jpeg",
    verifyUrl: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CertificationsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const allSkills: string[] = [
    "All",
    ...Array.from(new Set(certifications.flatMap((c) => c.skills))),
  ];

  const filtered: Certification[] =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.skills.includes(filter));

  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "80px 24px",

        color: "#e6e6e6",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Big name, front and center, different font */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "16px" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          Abhishek Tomar
        </h2>
        <div
          style={{
            height: "1px",
            width: "80px",
            background: "#3a3a3a",
            margin: "16px auto 0",
          }}
        />
      </motion.div>


      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#ffffff" }}>

          My Certifications
        </h1>

        <p style={{ color: "#8a8a8a" }}>
          Verified credentials earned across various platforms.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "48px" }}>
        {allSkills.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => setFilter(skill)}
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: filter === skill ? "1px solid #ffffff" : "1px solid #2a2a2a",
              background: filter === skill ? "#1a1a1a" : "transparent",
              color: filter === skill ? "#ffffff" : "#8a8a8a",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {skill}
          </button>
        ))}
      </div>


      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {filtered.map((cert) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}

            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              background: "#0a0a0a",

              border: `1px solid ${hoveredId === cert.id ? "#ffffff" : "#1f1f1f"}`,
              borderRadius: "16px",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >




            <div style={{ height: "3px", background: "#3a3a3a" }} />

            <div style={{ width: "100%", height: "180px", position: "relative" }}>
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "20px" }}>
              <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>{cert.date}</span>


              <h3 style={{ margin: "10px 0", color: "#ffffff" }}>{cert.title}</h3>


              <p style={{ color: "#b0b0b0" }}>{cert.issuer}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "12px 0" }}>
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.75rem",
                      background: "#1a1a1a",
                      color: "#c9c9c9",
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }}

>
                    {skill}
                  </span>
                ))}
              </div>


              <div style={{ display: "flex", justifyContent: "space-between", color: "#8a8a8a" }}>
                <span style={{ fontSize: "0.7rem" }}>ID: {cert.credentialId}</span>

                <a
                  href={cert.verifyUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#ffffff" }}
                >
                  Verify ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}