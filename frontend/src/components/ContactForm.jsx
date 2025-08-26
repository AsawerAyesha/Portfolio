import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Server response:", data);

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error connecting to server");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    className="p-2 rounded-lg text-black placeholder-gray-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    className="p-2 rounded-lg text-black placeholder-gray-500"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows="4"
    value={formData.message}
    onChange={handleChange}
    className="p-2 rounded-lg text-black placeholder-gray-500"
  />

  <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
    Send Message
  </button>
</form>


  );
}
