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
  color: string;
  image: string;
  verifyUrl: string;
}

// =============================================
const certifications: Certification[] = [
  {
    id: 1,
    title: "Artificial Intelligence Certification",
    issuer: "Intel colab with chandigarh university",
    date: "AUG 2025",
    credentialId: "CERT-ID-001",
    skills: ["Artificial Intelligence", "Machine Learning"],
    color: "#3B82F6",
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
    color: "#8B5CF6",
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
    color: "#10B981",
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
    color: "#F59E0B",
    image: "/ds.jpeg",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "ECE Exhibition Workshop",
    issuer: "LOVELY PROFESSIONAL UNIVERSITY",
    date: "NOV 2025",
    credentialId: "CERT-ID-005",
    skills: ["Arduino", "ECE Projects"],
    color: "#EF4444",
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
// =============================================

// Parent container (stagger animation)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CertificationsPage() {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const allSkills = ["All", ...Array.from(new Set(certifications.flatMap((c) => c.skills)))];

  const filtered =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.skills.includes(filter));

  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "80px 24px",
        color: "#ffffff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "700" }}>
          My <span style={{ color: "#3B82F6" }}>Certifications</span>
        </h1>
        <p style={{ color: "#9CA3AF" }}>
          Verified credentials earned across various platforms.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "48px" }}>
        {allSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => setFilter(skill)}
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              border: filter === skill ? "2px solid #3B82F6" : "1px solid #374151",
              background: filter === skill ? "#1D4ED8" : "transparent",
              color: filter === skill ? "#ffffff" : "#9CA3AF",
              cursor: "pointer",
            }}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Cards Grid with stagger animation */}
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
            
            whileHover={{ scale: 1.03 }}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              background: "#0D1117",
              border: `1px solid ${hoveredId === cert.id ? cert.color : "#1F2937"}`,
              borderRadius: "16px",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ height: "3px", background: cert.color }} />

            <div style={{ width: "100%", height: "180px", position: "relative" }}>
              <Image src={cert.image} alt={cert.title} fill style={{ objectFit: "cover" }} />
            </div>

            <div style={{ padding: "20px" }}>
              <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>{cert.date}</span>

              <h3 style={{ margin: "10px 0" }}>{cert.title}</h3>

              <p style={{ color: cert.color }}>{cert.issuer}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "12px 0" }}>
                {cert.skills.map((skill) => (
                  <span key={skill} style={{ fontSize: "0.75rem", background: "#1F2937", padding: "4px 8px", borderRadius: "6px" }}>
                    {skill}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.7rem" }}>ID: {cert.credentialId}</span>
                <a href={cert.verifyUrl} target="_blank" style={{ color: cert.color }}>
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