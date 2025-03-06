import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-lg"
                  : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a
              href="#home"
              className="flex items-center gap-2 text-emerald-400 font-mono text-xl font-bold"
              aria-label="Retour à l'accueil"
          >
            <Terminal size={24} aria-hidden="true" />
            <span>dev@backend</span>
          </a>

          {/* Navigation principale */}
          <nav role="navigation" aria-label="Navigation principale">
            <ul className="hidden md:flex items-center gap-8">
              {[
                { href: "home", label: "Accueil" },
                { href: "about", label: "À propos" },
                { href: "skills", label: "Compétences" },
                { href: "experience", label: "Expériences" },
                { href: "contact", label: "Contact" }
              ].map((item, index) => (
                  <li key={index}>
                    <a
                        href={`#${item.href}`}
                        className="text-slate-300 hover:text-emerald-400 transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <button
              className="md:hidden text-slate-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                        ? "M6 18L18 6M6 6l12 12" // Icône de fermeture (croix)
                        : "M4 6h16M4 12h16M4 18h16" // Icône hamburger (menu)
                  }
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile (ouvert/fermé selon l'état) */}
        {isMenuOpen && (
            <nav
                role="navigation"
                aria-label="Menu mobile"
                className="md:hidden bg-slate-800 shadow-lg"
            >
              <ul className="container mx-auto px-4 py-3 flex flex-col gap-4">
                {[
                  { href: "home", label: "Accueil" },
                  { href: "about", label: "À propos" },
                  { href: "skills", label: "Compétences" },
                  { href: "experience", label: "Expériences" },
                  { href: "contact", label: "Contact" }
                ].map((item, index) => (
                    <li key={index}>
                      <a
                          href={`#${item.href}`}
                          className="text-slate-300 hover:text-emerald-400 transition-colors py-2 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                ))}
              </ul>
            </nav>
        )}
      </header>
  );
};

export default Header;
