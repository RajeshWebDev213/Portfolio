export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Rajesh Podilapu. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a href="https://github.com/RajeshWebDev213" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="www.linkedin.com/in/rajesh-podilapu" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:rajeshpodilapu87@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
