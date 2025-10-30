function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/80 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} Glossy Cube. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
