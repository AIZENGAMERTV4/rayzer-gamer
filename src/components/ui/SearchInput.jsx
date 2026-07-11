import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Pesquisar produtos..."
}) {
  return (
    <div className="relative w-full">
      {/* Glow */}
      <div
        className="
          absolute
          -inset-[1px]
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-500
          to-cyan-400
          opacity-25
          blur-md
        "
      />

      <div
        className="
          relative
          flex
          items-center
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900/90
          backdrop-blur-xl
          overflow-hidden
          transition-all
          duration-300

          focus-within:border-cyan-400
          focus-within:shadow-[0_0_35px_rgba(0,200,255,.35)]

          h-12
          md:h-14
        "
      >
        <FaSearch
          className="
            ml-4
            md:ml-5
            text-zinc-400
            text-base
            md:text-lg
          "
        />

        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            flex-1
            bg-transparent

            px-3
            md:px-4

            text-sm
            md:text-base

            outline-none
            text-white
            placeholder:text-zinc-500
          "
        />
      </div>
    </div>
  );
}