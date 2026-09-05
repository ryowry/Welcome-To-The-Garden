"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText("ryowry");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
      <p className="text-white uppercase tracking-[0.4em] text-sm">Get In Touch</p>
      <h2 className="mt-4 text-5xl font-bold text-white">Contact</h2>
      <p className="mt-6 text-white max-w-md">
        For bookings, collaborations, or just to say hello — reach out below.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=officialbeatzspideyjuice@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white rounded-full px-8 py-3"
        >
          Business: officialbeatzspideyjuice@gmail.com
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rairohan204@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white rounded-full px-8 py-3"
        >
          Personal: rairohan204@gmail.com
        </a>
        <button
          onClick={handleCopyDiscord}
          className="border border-white text-white rounded-full px-8 py-3 cursor-pointer"
        >
          {copied ? "Copied!" : "Discord: ryowry"}
        </button>
      </div>

      <p className="mt-16 text-white text-sm">
        © {new Date().getFullYear()} ryowry. All rights reserved.
      </p>
    </section>
  );
}
