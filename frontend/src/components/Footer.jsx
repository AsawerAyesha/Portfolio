import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}
