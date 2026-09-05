export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <p className="text-green-400 uppercase tracking-[0.4em] text-sm">
          About
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          ryowry
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Music Producer • Sound Designer • Composer
        </p>

        <p className="mt-8 text-gray-400 leading-8">
          <strong>ryowry</strong> is a music producer, composer, and sound
          designer who turns ideas into sound. Inspired by nature and fantasy,
          he creates music that feels like stepping into another world—where
          every melody, texture, and atmosphere tells a story.
        </p>
      </div>
    </section>
  );
}