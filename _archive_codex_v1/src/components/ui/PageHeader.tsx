import { motion, useReducedMotion } from "framer-motion";

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHeader({ label, title, description }: PageHeaderProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-slate-800/80 pb-10 pt-6"
    >
      <p className="system-label mb-4">{label}</p>
      <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-50 md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">{description}</p>
    </motion.header>
  );
}
