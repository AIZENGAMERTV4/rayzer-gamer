import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  fullWidth,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Luz Roxa */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-700/15
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Luz Azul */}
      <div
        className="
          absolute
          bottom-0
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Luz Central */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-violet-500/5
          blur-[220px]
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