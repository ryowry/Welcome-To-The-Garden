"use client";

export default function Socials() {
  const socials = [
    { name: "YouTube", handle: "@ryowry", url: "https://www.youtube.com/@ryowry" },
    { name: "Instagram (Artist)", handle: "@ryowry_", url: "https://www.instagram.com/ryowry_/?hl=en" },
    { name: "Instagram (Producer)", handle: "@prodbyspidey", url: "https://www.instagram.com/prodbyspidey/" },
    { name: "TikTok", handle: "@ryowry", url: "https://www.tiktok.com/@ryowry" },
    { name: "SoundCloud", handle: "ryowry", url: "https://soundcloud.com/ryowry" },
    { name: "Discord Server", handle: "Join", url: "https://discord.gg/5kbqVWUudX" },
    { name: "Facebook", handle: "ryowryy", url: "https://www.facebook.com/ryowryy" },
    { name: "LinkedIn", handle: "Rohan Rai", url: "https://www.linkedin.com/in/rohan-rai-8806313b0/" },
  ];

  return (
    <section id="socials" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      <p className="text-white uppercase tracking-[0.4em] text-sm">Connect</p>
      <h2 className="mt-4 text-5xl font-bold text-white">Socials</h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-white px-6 py-4 text-white hover:bg-white hover:text-black transition"
          >
            <span className="font-semibold">{social.name}</span>
            <span className="text-sm opacity-70">{social.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
