import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z4mFOe-VPbTX4W76/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            A cube of cubes. Futuristic. Minimal. Interactive.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Explore a glossy 3D cube composed of micro-cubes against a deep, dark canvas.
            Built with Spline, Vite, and Tailwind for a smooth, modern experience.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#features"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              See Features
            </a>
            <a
              href="#explore"
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/5"
            >
              Explore Scene
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
