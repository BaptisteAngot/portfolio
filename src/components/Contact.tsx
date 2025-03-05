import { Mail, Github, Linkedin, MapPin, Phone, CalendarDays } from "lucide-react";

const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-slate-800" role="region" aria-labelledby="contact-title">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="contact-title" className="text-3xl font-bold mb-4 text-white">Me Contacter</h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Actuellement à la recherche d'opportunités <span className="font-bold">en CDI (full remote uniquement)</span> ainsi que <span className="font-bold">de missions en freelance</span>.
              N’hésitez pas à me contacter pour échanger sur vos projets et besoins.
            </p>
          </div>

          {/* Informations de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coordonnées */}
            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Mes Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-emerald-400" size={24} aria-hidden="true" />
                  <span className="text-slate-300">Localisé entre Rouen et Le Havre</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400" size={24} aria-hidden="true" />
                  <a href="tel:+33612345678" className="text-slate-300 hover:text-emerald-400 transition-colors">
                    +33 6 12 34 56 78
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-400" size={24} aria-hidden="true" />
                  <a href="mailto:contact@angotbaptiste.com" className="text-slate-300 hover:text-emerald-400 transition-colors">
                    contact@angotbaptiste.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-emerald-400" size={24} aria-hidden="true" />
                  <span className="text-slate-300">Disponible pour CDI (full remote) et missions freelance</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Retrouvez-moi sur</h3>
              <div className="flex flex-col space-y-4">
                <a
                    href="https://www.linkedin.com/in/baptiste-angot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mon profil LinkedIn"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-slate-600 p-3 rounded-lg text-white transition-colors"
                >
                  <Linkedin className="text-emerald-400" size={24} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/BaptisteAngot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mon profil GitHub"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-slate-600 p-3 rounded-lg text-white transition-colors"
                >
                  <Github className="text-emerald-400" size={24} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;