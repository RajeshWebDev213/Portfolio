import Section from './Section';

export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", 
    "Tailwind CSS", "Git & GitHub", "Node.js", 
    "Express.js", "MongoDB","MySql","PostgreSql","Prisma"
  ];

  return (
    <Section id="skills">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Technical Skills</h2>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] text-slate-700 dark:text-slate-300 font-medium hover:border-slate-400 dark:hover:border-slate-600 transition-colors shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
