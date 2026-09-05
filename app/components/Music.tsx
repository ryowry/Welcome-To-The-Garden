export default function Music() {
  return (
    <section
      id="music"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-black"
    >
      <p className="text-white uppercase tracking-[0.4em] text-sm">Listen</p>
      <h2 className="mt-4 text-5xl font-bold text-white">Music</h2>

      <div className="mt-16 w-full max-w-2xl">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/4pSeF8f609HyOEtMRr32jO?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}
