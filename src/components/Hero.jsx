import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../assets/banners/banner1.png";
import banner2 from "../assets/banners/banner2.png";
import banner3 from "../assets/banners/banner3.png";

export default function Hero() {
  const banners = [banner1, banner2, banner3];

  return (
    <section
  className="
    w-full
    rounded-[32px]
    overflow-hidden
    border
    border-zinc-800
    glow
    shadow-2xl
    shadow-violet-900/30
  "
>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[280px] sm:h-[420px] md:h-[600px] lg:h-[680px]">

              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/95
                  via-black/60
                  to-transparent
                "
              />

              <div
  className="
    absolute
    left-8
    sm:left-12
    md:left-20
    lg:left-28
    top-1/2
    -translate-y-1/2
    max-w-lg
    lg:max-w-xl
  "
>
                <span className="uppercase tracking-[4px] text-violet-400 font-bold">
                  RAYZER GAMER
                </span>

                <h1 className="text-white text-3xl
sm:text-5xl
md:text-6xl
lg:text-7xl
                leading-tight font-black mt-3">
                  Monte seu Setup Gamer
                </h1>

                <p className="mt-8 text-zinc-300 text-base md:text-xl leading-8 max-w-xl">
                  Os melhores periféricos, componentes e acessórios
                  gamers com entrega para todo o Brasil.
                </p>

                <div className="flex gap-4 mt-10 flex-wrap">

                  <Link
                    to="/catalogo"
                    className="
                      bg-violet-600
                      hover:bg-violet-700
                      px-5
                      sm:px-8
                      py-3
                      sm:py-4
                      rounded-xl
                      font-bold
                      text-white
                      transition
                    "
                  >
                    Comprar Agora
                  </Link>

                  <Link
                    to="/catalogo"
                    className="
                      border
                      border-white/30
                      hover:border-violet-500
                      hover:bg-white/10
                      px-8
                      py-4
                      rounded-xl
                      text-white
                      transition
                    "
                  >
                    Ver Catálogo
                  </Link>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}