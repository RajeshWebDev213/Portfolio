import { image } from 'framer-motion/client';
import Section from './Section';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    // {
    //   title: "Flipkart Dashboard Clone",
    //   description: "A comprehensive analytics and management dashboard mimicking Flipkart's seller interface with interactive data visualization.",
    //   tech: ["React.js", "CSS3"],
    //   image: "./public/flipkart.jpg",
    //   demo: "#",
    //   github: "#"
    // },
    {
      title: "Fullstack E-Commerce",
      description: "A complete end-to-end shopping platform with user authentication, product catalog, cart management, and secure payment processing.",
      tech: ["React.js","Node.js","Express.js","MySQL"],
      image:"/e-commerce.jpg",
      demo: "https://browear.vercel.app/",
      github: "https://github.com/RajeshWebDev213/Browear-Frontend.git"
    },
    {
      title: "Media Vault",
      description: "A paid media locker application that secures digital content behind a paywall, integrating seamless monetization flows.",
      tech: ["Node.js", "Express", "PostreSQL", "React","Prisma"],
      image:"/media-vault.jpg",
      demo: "https://media-vault-frontend-eight.vercel.app/",
      github: "https://github.com/RajeshWebDev213/media-vault-frontend.git"
    },
    {
      title: "Task Manager",
      description: "A productivity tool for organizing tasks, tracking progress, and managing daily workflows with a clean UI.",
      tech: ["React.js", "CSS", "Local Storage"],
      image: "/task-management.jpg",
      demo: "#",
      github: "https://github.com/RajeshWebDev213/task-manager-frontend.git"
    },
    {
      title: "Weather Application",
      description: "A real-time weather forecasting app utilizing third-party APIs to display accurate climate data for any location.",
      tech: ["JavaScript", "OpenWeather API", "CSS3"],
      image:"/wheather.jpg",
      demo: "https://weather-seven-sigma-14.vercel.app/",
      github: "https://github.com/RajeshWebDev213/Skytrackerapp.git"
    }
  ];

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] overflow-hidden transition-all hover:shadow-md"
          >
            {/* Image placeholder */}
         <div className="aspect-video bg-slate-100 dark:bg-slate-400 flex items-center justify-center border-b border-slate-200 dark:border-slate-800 overflow-hidden">
         <img src={project.image}  alt={project.title} className="w-full h-full object-cover" />
        </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a 
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon size={16} /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
