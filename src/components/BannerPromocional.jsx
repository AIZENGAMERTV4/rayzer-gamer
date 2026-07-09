import { Link } from "react-router-dom";
import banner2 from "../assets/banners/banner2.png";

export default function BannerPromocional() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        group
        my-8
      "
    >
      <img
        src={banner2}
        alt="Promoção"
        className="
          w-full
          h-[180px]
          md:h-[260px]
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/40
          to-transparent
        "
      />

      <div
        className="
          absolute
          left-8
          top-1/2
          -translate-y-1/2
          max-w-xl
        "
      >
        <span className="text-violet-400 font-bold uppercase tracking-[3px]">
          Oferta Especial
        </span>

        <h2
          className="
            text-4xl
            font-black
            text-white
            mt-3
          "
        >
          Até 50% OFF
        </h2>

        <p className="text-zinc-300 mt-3">
          Aproveite nossas promoções por tempo limitado.
        </p>

        <Link
          to="/catalogo"
          className="
            inline-block
            mt-6
            bg-violet-600
            hover:bg-violet-700
            px-8
            py-3
            rounded-xl
            font-bold
            text-white
            transition
          "
        >
          Ver Ofertas
        </Link>
      </div>
    </section>
  );
}