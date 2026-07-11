import { motion } from "framer-motion";

export default function GlowIcon({
  children,
  onClick,
  className = "",
  badge,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={onClick}
      className={`
        relative
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-2xl
        border
        border-violet-500/30
        bg-zinc-900/80
        backdrop-blur-xl
        text-white
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(0,200,255,.35)]
        hover:bg-zinc-800
        ${className}
      `}
    >
      {children}

      {badge > 0 && (
        <span
          className="
            absolute
            -top-2
            -right-2
            w-6
            h-6
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-red-500
            text-white
            text-xs
            font-bold
            flex
            items-center
            justify-center
            shadow-lg
          "
        >
          {badge}
        </span>
      )}
    </motion.button>
  );
}