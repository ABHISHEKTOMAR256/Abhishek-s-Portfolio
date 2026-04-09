"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-16">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-500">Abhishek Tomar</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            A passionate developer building modern, responsive, and high-performance web applications.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#projects" className="bg-blue-500 px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              View Work
            </a>
            <a href="#contact" className="border border-gray-500 px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 mt-6">
            
            <Mail className="cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/PHOTO.jpeg"
            alt="Profile"
            width={300}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm a student and developer who loves creating creative and user-friendly applications.
          I enjoy solving real-world problems using technology and constantly improving my skills.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg"
            >
              <Image
                src={`/project${project}.png`}
                alt="Project"
                width={400}
                height={250}
                className="rounded-xl"
              />
              <h3 className="text-xl font-semibold mt-4">Project {project}</h3>
              <p className="text-gray-400 mt-2">
                Short description of your project showcasing your skills.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-xl hover:bg-blue-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-6">Let's build something amazing together.</p>

        <a
          href="mailto:your@email.com"
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Say Hello
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()} Abhishek. All rights reserved.
      </footer>
    </main>
  );
}
