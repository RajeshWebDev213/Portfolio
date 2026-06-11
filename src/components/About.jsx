import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">About Me</h2>
        
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Hi, I'm Rajesh Podilapu, a Full Stack Developer and B.Tech CSE (AI/ML) student passionate about building scalable, user-friendly web applications.
          </p>
          
          <p>
     I specialize in JavaScript, React.js, Node.js, Express.js, PostgreSQL, Prisma, and modern web technologies. I enjoy turning ideas into real-world products and have built projects ranging from e-commerce platforms to full-stack media management applications. 
          </p>
          
          <p>
          Currently, I am focused on strengthening my skills in backend development, databases, system design, and Data Structures & Algorithms. My goal is to build impactful software solutions while continuously learning and growing as a developer.
          </p>
          <p>
            I'm actively seeking opportunities to apply my skills, collaborate with teams, and gain industry experience through internships and real-world projects.
          </p>
        </div>
      </div>
    </Section>
  );
}
