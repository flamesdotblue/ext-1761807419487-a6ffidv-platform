function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          Glossy Cube
        </a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#explore" className="hover:text-white">Explore</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#get-started"
          className="rounded-md bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
