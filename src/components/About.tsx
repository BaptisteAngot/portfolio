import { Server } from 'lucide-react';
import baptisteAngot from '../assets/baptisteangot.jpg';

const About = () => {
  return (
      <section role="region" aria-labelledby="about-title" id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">À propos de moi</h2>
            <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Développeur backend passionné, spécialisé dans la conception d’API sécurisées et évolutives, ainsi que l’optimisation des architectures serveur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Qui suis-je ?</h3>
              <p className="text-slate-300 mb-4">
                Développeur backend avec une expertise en <span className="font-bold">Java Spring, DevOps et sécurisation des APIs</span>, je conçois des solutions robustes et scalables adaptées aux besoins métiers. Mon expérience inclut la gestion et l’évolution d’un <span className="font-bold">parc d’APIs</span>, l’<span className="font-bold">automatisation de processus métier</span>, ainsi que la <span className="font-bold">mise en place de bonnes pratiques de sécurité</span> (OAuth2, JWT, CSP, ISO 27001).
              </p>
              <p className="text-slate-300 mb-6">
                Passionné par la <span className="font-bold">résolution de problèmes complexes</span>, j’accorde une importance particulière à la <span className="font-bold">fiabilité et à la performance</span> des systèmes. J’ai également une forte appétence pour le <span className="font-bold">monitoring et l’observabilité</span>, avec la mise en place de solutions permettant d’anticiper et de gérer efficacement les incidents.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="font-bold text-emerald-400 text-xl mb-1">4+</div>
                  <div className="text-slate-300 text-sm">Années d'expérience</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="font-bold text-emerald-400 text-xl mb-1">50+</div>
                  <div className="text-slate-300 text-sm">Projets réalisés</div>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <div className="font-bold text-emerald-400 text-xl mb-1">15+</div>
                  <div className="text-slate-300 text-sm">Technologies maîtrisées</div>
                </div>
              </div>

              <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Échanger avec moi
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative z-10 shadow-xl">
                <img
                    src={baptisteAngot}
                    alt="Photo de Baptiste Angot, développeur backend"
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute top-4 -left-4 w-full h-full border-2 border-emerald-400 rounded-2xl -z-10"></div>

              <div className="absolute -bottom-6 -right-6 bg-slate-700 p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <Server className="text-emerald-400" size={24} />
                  <div>
                    <div className="text-white font-medium">Spécialiste Backend</div>
                    <div className="text-slate-400 text-sm">Sécurisation & Performance API</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
