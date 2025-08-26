import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-[#1B3C53] text-[#D2C1B6] rounded-2xl shadow-lg p-6 cursor-pointer transition-all hover:shadow-xl"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      {/* Short description (always visible) */}
      <p className="text-sm mb-2">{project.shortDesc}</p>

      {/* Expanded details (toggle on click) */}
      {expanded && (
        <p className="text-sm text-[#F5EDE6] mt-2">{project.details}</p>
      )}
    </div>
  );
}
