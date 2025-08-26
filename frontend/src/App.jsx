import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";

import {
  Code,
  Database,
  Boxes,
  FileCode,
  Palette,
  Github,
  GitBranch,
  Figma,
} from "lucide-react";

const projects = [
  {
    title: "Routine Mate",
    shortDesc: "A full-stack productivity assistant integrating tasks, habits, routines, and goals into one platform, with real-time collaboration and analytics.",
    details:`
      -A web-based productivity platform built using React, Node.js, Express, and PostgreSQL (Supabase).

-Provides an integrated dashboard for tasks, routines, habits, and goals, reducing fragmentation from using multiple apps.

-Designed with a modular PostgreSQL schema to ensure scalability, data integrity, and efficient queries.

-Implemented friend requests, goal collaboration, and notifications with PostgreSQL triggers & functions.

-Optimized database with indexes, caching (Redis), and query refactoring to improve performance and reduce response time.

-Frontend features include real-time updates, caching with React Query, activity logging, and smooth UI/UX.

My contributions:
✅ Database functions, triggers & schema design
✅ Backend integration with database tables (Node.js + Express)
✅ Frontend implementation for Routine & Habits pages (React)
✅ UI/UX design and prototyping on Figma`
  },
  {
  title: "Asaan Safar",
  shortDesc: "A ride-hailing service built in C++ using Data Structures & Algorithms (Linked Lists, Graphs, Queues, Hashing). Features include ride matching, dynamic pricing, route tracking, ride history, driver ratings, and a points system.",
  details:`
  A terminal-based ride-hailing system built using C++ and advanced Data Structures & Algorithms.

Features include user & driver management, ride request matching (using Graphs + Dijkstra’s algorithm), real-time route tracking, multi-stop rides, and dynamic pricing.

Implemented ride request queueing (FIFO), driver rating system, ride history (doubly linked list), and an in-app points system.

Focused on efficiency: Linked Lists, Graphs, Queues, and Hashing for secure password storage.

Collaborative project where I contributed to
✅ User & Driver Management
✅ In-App Points System`
},
  {
    title: "Music Player",
    shortDesc: "Full-stack web music app.",
    details:
       `
    A web-based music streaming application developed as part of my Full Stack Development internship.  

    Features include:  
    - User authentication and session management  
    - Create, update, and delete playlists  
    - Add/remove songs from playlists  
    - Audio playback controls (play, pause, skip, volume)  
    - Responsive UI for both desktop and mobile  

    Tech stack:  
    - Frontend: React (with Hooks & Context for state management), HTML, CSS, JavaScript  
    - Backend: Node.js & Express.js for REST APIs  
    - Database: PostgreSQL for storing users, playlists, and tracks  
    - File handling: Streaming audio with efficient caching  

    I designed the database schema, implemented backend APIs, developed the custom React-based audio player UI, and integrated the full playlist management system to deliver a complete end-to-end music player.  
  `
  },
  {
    title: "Social Networking Platform",
    shortDesc: "An interactive full-stack social networking web app with posts, comments, likes, friend requests, and real-time updates.",
    details:
     `
    A full-stack social media application developed as part of my internship project, focused on building a scalable and interactive platform.  

    Features include:  
    - User authentication (login & registration)  
    - Create, edit, and delete posts  
    - Like and comment functionality  
    - Friend request system with pending/accepted states  
    - Real-time updates using WebSockets  
    - User profile management and activity feed  

    Tech stack:  
    - Frontend: React (component-based UI, state management with hooks), HTML, CSS, JavaScript  
    - Backend: Node.js & Express.js for REST APIs  
    - Database: PostgreSQL for storing users, posts, comments, likes, and friendships  
    - Real-time: WebSockets for instant updates on posts and requests  

    I implemented both frontend and backend, including the database schema (users, posts, comments, likes, friends), WebSocket integration for real-time notifications, and UI design for smooth user experience.  
  `
  }
];

export default function App() {
  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <FileCode className="w-6 h-6" /> },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" /> },
    { name: "Express", icon: <Boxes className="w-6 h-6" /> },
    { name: "HTML", icon: <FileCode className="w-6 h-6" /> },
    { name: "CSS", icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", icon: <Code className="w-6 h-6" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Figma", icon: <Figma className="w-6 h-6" /> },
  ];

  return (
    <div className="bg-[#D2C1B6] text-[#1B3C53] font-sans">
      {/* Sticky Navbar */}
      <Navbar />
      <Hero />

      {/* Education + Experience */}
      <Section id="background" title="Education & Experience" className="py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-[#456882] text-white transition-transform"
          >
            <h3 className="font-bold text-xl mb-3">🎓 Education</h3>
            <ul className="space-y-2">
              <li>
                <strong>Bachelor’s in Computer Science</strong> – NUST
              </li>
              
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-[#456882] text-white transition-transform"
          >
            <h3 className="font-bold text-xl mb-3">💼 Experience</h3>
            <ul className="space-y-2">
              <li>
                <strong>Arch Technologies:</strong> Full-Stack Development Intern
              </li>
              <li>
                <strong>CETQAP:</strong> Quantum Computing & Qiskit projects
              </li>
              <li>
                <strong>Al-Khidmat Foundation:</strong> Internship and Volunteer Work
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" className="py-12">
  <div className="grid md:grid-cols-2 gap-6">
    {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>
</Section>


      {/* Skills */}
      <Section id="skills" title="Skills" className="py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 rounded-2xl shadow-md bg-[#456882] text-white font-medium"
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" className="py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Send me a message box */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="p-6 rounded-2xl shadow-lg bg-[#456882] text-white"
>
  <h3 className="font-bold text-xl mb-4">📩 Send me a message</h3>
  <ContactForm />
</motion.div>


          {/* Right: Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl shadow-lg bg-white text-[#1B3C53]"
          >
            <h3 className="font-bold text-xl mb-3">📞 Contact Info</h3>
            <p>Email: asawerayesha@.com</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/asawer-ayesha-3561ab292"
                target="_blank" 
                rel="noopener noreferrer"
                className="underline text-[#456882] font-semibold"
              >
                www.linkedin.com/in/asawer-ayesha-3561ab292
              </a>
            </p>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
