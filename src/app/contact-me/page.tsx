"use client";

import React, { useState } from "react";
import { sendContactMessage } from "./action";

const ContactMePage = () => {
  const [status, setStatus] = useState("");

  const action = async (formData: FormData) => {
    const result = await sendContactMessage(formData);
    setStatus(result?.message || "Something went wrong");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4"
      style={{ backgroundImage: "url(/main-bg.webp)" }}
    >
      <form
        action={action}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>

        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          rows={4}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 rounded p-3 font-semibold transition"
        >
          Send Message
        </button>

        {status && <p className="text-green-400 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default ContactMePage;
