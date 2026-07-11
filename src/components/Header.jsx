import { useState } from "react";
import MiniCarrinho from "./MiniCarrinho";
import HeaderLogo from "./header/HeaderLogo";
import HeaderSearch from "./header/HeaderSearch";
import HeaderActions from "./header/HeaderActions";
import DesktopMenu from "./header/DesktopMenu";
import TopBar from "./header/TopBar";

export default function Header() {

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <>

      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-zinc-800/70

          bg-zinc-950/70
          backdrop-blur-2xl

          shadow-[0_0_60px_rgba(124,58,237,.08)]
        "
      >

        <div
          className="
            max-w-[1700px]
            mx-auto

            px-4
            md:px-8
            xl:px-12
          "
        >

          <div
  className="
    flex
    flex-col
    lg:flex-row
    lg:items-center
    gap-5
    py-5
  "
>

  {/* Linha 1 */}
  <div className="flex items-center justify-between gap-4">

    <HeaderLogo />

    <div className="lg:hidden">
      <HeaderActions
        abrirCarrinho={() =>
          setCarrinhoAberto(true)
        }
      />
    </div>

  </div>

  {/* Linha 2 */}
  <div className="flex-1">

    <HeaderSearch />

  </div>

  {/* Desktop */}
  <div className="hidden lg:block">

    <HeaderActions
      abrirCarrinho={() =>
        setCarrinhoAberto(true)
      }
    />

  </div>

</div>

          <DesktopMenu />

        </div>

        <TopBar />
        
      </header>

      <MiniCarrinho
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />

    </>
  );
}