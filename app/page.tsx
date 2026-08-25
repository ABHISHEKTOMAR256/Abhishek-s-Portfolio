"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-neutral-200 min-h-screen px-6 md:px-16">
      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-20 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.18),transparent_35%)]" />

  {/* LEFT SIDE */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl"
  >
    <p className="tracking-[0.35em] uppercase text-blue-400 text-sm mb-6">
      AI/ML Engineer & Full-Stack Developer
    </p>

    <h1 className="leading-none font-extrabold">
      <span className="block text-6xl md:text-8xl text-white">
        ABHISHEK
      </span>

      <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent">
        TOMAR
      </span>
    </h1>

    <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl">
      B.Tech CSE Student at LPU — AI/ML Enthusiast — Full-Stack Developer.
      Building intelligent and scalable applications.
    </p>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4 mt-10">

      <a
        href="#projects"
        className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
      >
        View My Work →
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
      >
        Contact Me
      </a>

      <Link
        href="/certifications"
        className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
      >
        Certifications
      </Link>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-xl border border-blue-500/30 hover:border-blue-500"
      >
        View CV
      </a>

    </div>

    {/* Download Card */}
    <div className="mt-8 w-fit bg-[#08111f] border border-blue-500/20 rounded-2xl px-6 py-5">
      <h3 className="font-semibold text-white">
        Download CV
      </h3>

      <p className="text-sm text-neutral-400 mt-1">
        Get my resume in PDF format
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

      <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
        <h3 className="text-3xl font-bold">5+</h3>
        <p className="text-neutral-400">Projects</p>
      </div>

      <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
        <h3 className="text-3xl font-bold">2+</h3>
        <p className="text-neutral-400">Years Learning</p>
      </div>

      <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
        <h3 className="text-3xl font-bold">10+</h3>
        <p className="text-neutral-400">Technologies</p>
      </div>

      <div className="bg-[#08111f] border border-blue-500/10 rounded-2xl p-5">
        <h3 className="text-3xl font-bold">3+</h3>
        <p className="text-neutral-400">Certificates</p>
      </div>

    </div>
  </motion.div>

  {/* RIGHT SIDE */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative"
  >

    {/* Blue Blob */}
    <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500 rounded-full blur-3xl opacity-40" />

    {/* Outer Frame */}
    <div
      className="
      absolute inset-0
      rotate-[-4deg]
      border border-blue-500
      rounded-[32px]
      shadow-[0_0_40px_rgba(59,130,246,0.6)]
      "
    />

    {/* Image */}
    <div className="relative overflow-hidden rounded-[32px]">
      <Image
        src="/PHOTO.jpg"
        alt="Profile"
        width={500}
        height={650}
        className="object-cover"
      />
    </div>

    {/* Availability Card */}
    <div className="mt-6 bg-[#08111f] border border-green-500/20 rounded-2xl p-5">

      <p className="text-green-400 font-medium">
        ● Available for Opportunities
      </p>

      <p className="text-neutral-400 mt-2">
        Let's build something amazing together.
      </p>

    </div>

  </motion.div>

</section>
  {/* Blue Shape Behind */}
  <div className="absolute left-0 top-24 w-40 h-32 bg-blue-500 rounded-[40%] blur-sm opacity-80 z-0" />

  {/* Tilted Border Frame */}
  <div className="absolute inset-0 rotate-[-4deg] border border-blue-500 rounded-[24px] z-10" />

  {/* Image */}
  <div className="absolute inset-0 z-20 overflow-hidden rounded-[24px]">
    <Image
      src="/PHOTO.jpg"
      alt="Profile"
      fill
      className="object-cover"
    />
  </div>

</div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I am a B.Tech Computer Science student at Lovely Professional University
          with interests in AI/ML, Full-Stack Development, IoT, and Renewable
          Energy Systems. I enjoy building real-world solutions such as SUVIDHA,
          AI-assisted requirement validation tools, and smart energy harvesting
          systems.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: "SUVIDHA – Smart Urban Digital Helpdesk",
              description:
                "I have made a quiz application whith the help of html,css,and javascript.",
              image: "/image1.png",
            },
            {
              id: 2,
              title: "AI Requirement Validator",
              
              image: "/image.png",
            },
            {
              id: 3,
              title: "Interactive Quiz Application",
              description:
                "I have made a app for validating requirements of a project and also for tracking the progress of the project.",
              image: "/image2.png",
            },
            {
              id: 4,
              title: "Pawmarg Trust Api with Razorpay.",
              description: "I have develope this website for the NGO.",
              image: "/image3.png",
            },
            {
              id: 5,
              title: "Shopping Website api with Whatsapp",
              description:
                "I have develope this website for my Client to give Shopping website links to their customer to increase the sale.",
              image: "/image4.png",
            },
            {
              id: 6,
              title: "Twin Vision",
              description:
                "Developed this website for taking client and to show our work to them.",
              image: "/image5.png",
            },
            {
              id: 7,
              title: "Student Survival (*Ongoing*)",
              description:
                "Developed For Student to check their attendence and Placement requirement for specific companies like Amazon,Flipkart,TCS etc.",
              image: "/image6.png",
            },
          ].map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02, borderColor: "#ffffff" }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-xl w-full object-cover border border-neutral-900"
              />
              <h3 className="text-xl font-semibold mt-4 text-white">
                {project.title}
              </h3>
              <p className="text-neutral-400 mt-2 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-white transition text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 text-center border-t border-neutral-900">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-neutral-400 mb-8">Let's build something together.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:abhitomar1608@email.com"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <Mail size={18} /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-tomar-625202294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>

          <a
            href="https://chat.whatsapp.com/Fkp22BmW4UkKTD3pw1pjeM?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:border-white transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-neutral-600 border-t border-neutral-900">
        © {new Date().getFullYear()} Abhishek Tomar. All rights reserved.
      </footer>
    </main>
  );
}