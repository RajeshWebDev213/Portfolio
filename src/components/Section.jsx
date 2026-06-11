import { motion } from 'framer-motion';

export default function Section({ id, className = '', children, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`py-20 md:py-32 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </motion.section>
  );
}
