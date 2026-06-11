import Section from "./Section";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Development",
      description:
        "Building full-stack web applications using React.js, Node.js, Express.js, PostgreSQL, Prisma, and modern web technologies.",
      year: "Present",
    },
    {
      title: "Backend Development",
      description:
        "Learning REST APIs, authentication, databases, file uploads, and server-side development with Node.js and Express.js.",
      year: "2025",
    },
    {
      title: "React.js Development",
      description:
        "Developed interactive user interfaces using React.js, component-based architecture, hooks, routing, and state management.",
      year: "2025",
    },
    {
      title: "Frontend Development",
      description:
        "Built responsive and modern web applications using HTML, CSS, JavaScript, and Tailwind CSS.",
      year: "2024",
    },
    {
      title: "Programming Fundamentals",
      description:
        "Started programming journey by learning Java fundamentals, object-oriented programming concepts, and problem-solving techniques.",
      year: "2024",
    },
  ];

  return (
    <Section id="journey">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-12">
          Learning Journey
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white dark:border-[#0a0a0a] bg-slate-200 dark:bg-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-2 h-2 rounded-full bg-slate-500 dark:bg-slate-400"></div>
              </div>

              <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>

                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {exp.year}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}