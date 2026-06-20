import Section from './Section';
import { Mail, Download } from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">Get In Touch</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="mailto:rajeshpodilapu87@gmail.com"
            className="flex items-center gap-2 px-6 py-3 w-full sm:w-auto rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors justify-center"
          >
            <Mail size={18} />
            Say Hello
          </a>
 <a
  href="/Rajesh_Podilapu_Full_Stack_Developer_Resume.pdf"
  download="Rajesh_Podilapu_Full_Stack_Developer_Resume.pdf"
  className="flex items-center gap-2 px-6 py-3 w-full sm:w-auto rounded-lg bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors justify-center shadow-sm"
>
  <Download size={18} />
  Download Resume
</a>
        </div>
        
        <div className="flex items-center justify-center gap-6">
          <a href="www.linkedin.com/in/rajesh-podilapu" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://github.com/RajeshWebDev213" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="mailto:rajeshpodilapu87@gmail.com" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
}
