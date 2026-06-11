import { ArrowRight, Download } from 'lucide-react';
import Section from './Section';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-900 dark:text-slate-100"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Full Stack Developer Building <span className="text-slate-500 dark:text-slate-400">Scalable & Modern</span> Web Applications
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Hi, I'm Rajesh Podilapu. I specialize in building end-to-end web applications using React, Node.js, Express.js, MongoDB, and modern web technologies. I create fast, responsive, and user-friendly solutions, handling everything from intuitive frontend interfaces to robust backend systems and APIs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
    <div className="relative">
  <div className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-sm">
    <img
      src="/profile.png"
      alt="Rajesh Podilapu"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>
    </Section>
  );
}
