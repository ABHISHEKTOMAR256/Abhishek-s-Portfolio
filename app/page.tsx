"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

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
            
            <Link href="/certifications" className="border border-gray-500 px-6 py-2 rounded-xl hover:bg-gray-800 transition">
               Certifications
            </Link>
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
            src="/PHOTO.jpg"
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
    {[
      {
        id: 1,
        title: "Project 1",
        description: "I have made a quiz application whith the help of html,css,and javascript.",
        image: "/image.png",
      },
      {
        id: 2,
        title: "Project 2",
        description: "I have made a Citizen Portal which is a web application that allows citizens to access government services and information online.",
        image: "/image1.png",
      },
      {
        id: 3,
        title: "Project 3",
        description: "I have made a app for validating requirements of a project and also for tracking the progress of the project.",
        image: "/image2.png",
      },
    ].map((project) => (
      <motion.div
        key={project.id}
        whileHover={{ scale: 1.05 }}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="rounded-xl w-full object-cover"
        />
        <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
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
          href="mailto:abhitomar1608@email.com"
          target="_blank"
          rel="noopener noreferrer"

          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
        >
          EMAIL        
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-tomar-625202294/"
          target="_blank"
          rel="noopener noreferrer"

          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
                >
            LinkedIn
        </a>
        <a
          href="https://chat.whatsapp.com/Fkp22BmW4UkKTD3pw1pjeM?mode=gi_t"
           target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
                >
          Whatsapp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()} Abhishek. All rights reserved.
      </footer>
    </main>
  );
}
