import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

export default function HeaderLogo() {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        shrink-0
        transition
        duration-300
        hover:scale-105
      "
    >
      <img
        src={logo}
        alt="Rayzer Gamer"
        className="
          h-16
          md:h-20
          lg:h-24
          object-contain
          drop-shadow-[0_0_25px_rgba(124,58,237,.35)]
        "
      />
    </Link>
  );
}