import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  fullWidth,
}) {
  return (
    <div className="min-h-screen bg-black text-white">

      <Header />

      {fullWidth}

      <main className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-10 space-y-12 md:space-y-20">

        {children}

      </main>

      <Footer />

    </div>
  );
}