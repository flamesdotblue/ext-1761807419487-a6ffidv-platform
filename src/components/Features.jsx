import { Rocket, Cpu, Monitor } from 'lucide-react';

const features = [
  {
    title: 'Real-time 3D',
    description:
      'Interact with a high-fidelity Spline scene rendered directly in the browser.',
    Icon: Monitor,
  },
  {
    title: 'Optimized Performance',
    description:
      'Vite-powered dev experience and smart bundling keep things fast and responsive.',
    Icon: Cpu,
  },
  {
    title: 'Launch-Ready UI',
    description:
      'Tailwind styling and sensible components for a clean, minimal, corporate look.',
    Icon: Rocket,
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why this cube?</h2>
        <p className="mt-3 text-white/70">
          A focused stack for immersive 3D experiences with modern frontend ergonomics.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
