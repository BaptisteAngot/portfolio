import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <a
                  href="#"
                  className="flex items-center gap-2 text-emerald-400 font-mono text-xl font-bold mb-4"
                  aria-label="Retour en haut de la page"
              >
                <Terminal size={24} aria-hidden="true" />
                <span>dev@backend</span>
              </a>
              <p className="text-slate-300 mb-6 max-w-md">
                Développeur backend passionné, spécialisé dans la conception d'architectures systèmes et d'API robustes et évolutives.
              </p>
              <div className="flex gap-4">
                <a
                    href="https://github.com/BaptisteAngot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mon profil GitHub"
                    className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Github size={20} aria-hidden="true"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/baptiste-angot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mon profil LinkedIn"
                    className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
                <a
                    href="mailto:contact@angotbaptiste.com"
                    aria-label="M'envoyer un email"
                    className="bg-slate-800 hover:bg-slate-700 w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <a
                          href={`#${item.toLowerCase()}`}
                          className="text-slate-300 hover:text-emerald-400 transition-colors"
                      >
                        {item === "Home" ? "Accueil" :
                            item === "About" ? "À propos" :
                                item === "Skills" ? "Compétences" :
                                    item === "Experience" ? "Expérience" :
                                        item === "Contact" ? "Contact" : item}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  'Développement API',
                  'Conception de base de données',
                  'Architecture système',
                  'Optimisation des performances',
                  'Consulting DevOps',
                  'Audits de sécurité'
                ].map((item, index) => (
                    <li key={index}>
                      <a
                          href="#contact"
                          className="text-slate-300 hover:text-emerald-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Baptiste Angot. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
