import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout({
  children,
  fullWidth,
}) {
  return (
    <div
  className="
    relative
    min-h-screen
    overflow-hidden
    text-white
    bg-transparent
  "
>

      {/* Luz Roxa */}
      <div
  className="
    absolute
    -top-52
    -left-52
    w-[700px]
    h-[700px]
    rounded-full
    bg-violet-600/25
    blur-[220px]
    pointer-events-none
  "
/>

      {/* Luz Azul */}
      <div
  className="
    absolute
    bottom-[-180px]
    right-[-180px]
    w-[650px]
    h-[650px]
    rounded-full
    bg-cyan-400/20
    blur-[220px]
    pointer-events-none
  "
/>

      {/* Grid Cyber */}
<div
  className="
    absolute
    inset-0
    opacity-[0.04]
    pointer-events-none
    z-0
  "
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>

      {/* Luz Central */}
      <div
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[900px]
    h-[900px]
    rounded-full
    bg-fuchsia-600/10
    blur-[250px]
    pointer-events-none
  "
/>

      <div className="relative z-10">

        <Header />

        {fullWidth}

        <main
  className="
    max-w-[1700px]
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    pt-8
    md:pt-10
    pb-12
    space-y-14
    lg:space-y-20
  "
>
  {children}
</main>

<Footer />

      </div>

    </div>
  );
}