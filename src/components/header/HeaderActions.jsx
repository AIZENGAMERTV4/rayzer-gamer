import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import GlowIcon from "../ui/GlowIcon";

import { useLoja } from "../../context/LojaContext";

export default function HeaderActions({
  abrirCarrinho,
}) {

  const { carrinho } = useLoja();

  return (

    <div className="flex items-center gap-2 sm:gap-3">

      <Link to="/favoritos">

        <GlowIcon>

          <FaHeart size={18} />

        </GlowIcon>

      </Link>

      <GlowIcon
        onClick={abrirCarrinho}
        badge={carrinho.length}
      >

        <FaShoppingCart size={18} />

      </GlowIcon>

      <Link to="/login">

        <GlowIcon>

          <FaUserCircle size={18} />

        </GlowIcon>

      </Link>

    </div>

  );

}