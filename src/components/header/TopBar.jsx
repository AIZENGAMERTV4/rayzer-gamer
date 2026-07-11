import { FaBolt, FaGift, FaCreditCard } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="
        relative
        overflow-hidden
        border-b
        border-violet-500/20
        bg-gradient-to-r
        from-violet-700
        via-fuchsia-600
        to-cyan-500
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          blur-3xl
          bg-white
        "
      />

      <div
        className="
          relative
          max-w-[1700px]
          mx-auto
          px-4
          py-2
          flex
          justify-center
          gap-10
          text-xs
          md:text-sm
          font-semibold
          text-white
          flex-wrap
        "
      >
        <span className="flex items-center gap-2">
          <FaBolt />
          Frete Grátis acima de R$199
        </span>

        <span className="flex items-center gap-2">
          <FaGift />
          PRIMEIRA10 na primeira compra
        </span>

        <span className="flex items-center gap-2">
          <FaCreditCard />
          PIX com 10% OFF
        </span>
      </div>
    </div>
  );
}