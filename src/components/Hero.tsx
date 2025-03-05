import { useState, useEffect } from 'react';
import { Terminal, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Développeur Backend & API Designer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full mb-6">
            <Terminal size={16} className="text-emerald-400" />
            <span className="text-slate-300 font-mono">Prêt à concevoir des systèmes robustes</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Baptiste Angot
          </h1>
          
          <div className="h-8 mb-8">
            <h2 className="text-xl md:text-2xl font-mono text-emerald-400">
              {text}<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h2>
          </div>
          
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Concevoir des API sécurisées, performantes et évolutives pour des applications modernes, fiables et prêtes à l’échelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Me Contacter
            </a>
            <a 
              href="#experience"
              className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Voir Mes Expériences
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-emerald-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;