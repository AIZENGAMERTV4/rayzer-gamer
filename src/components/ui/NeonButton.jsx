import { motion } from "framer-motion";

export default function NeonButton({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      type={type}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        bg-zinc-900
        border
        border-violet-500/40
        shadow-[0_0_25px_rgba(124,58,237,.18)]
        hover:border-cyan-400
        hover:shadow-[0_0_35px_rgba(0,200,255,.35)]
        ${className}
      `}
    >
      <span
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-r
          from-violet-600/20
          via-fuchsia-500/10
          to-cyan-400/20
        "
      />

      <span className="relative flex items-center justify-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  );
}