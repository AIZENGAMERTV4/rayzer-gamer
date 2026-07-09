import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaPix,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Loja */}

          <div>

            <h2 className="text-3xl font-black text-violet-500">
              Rayzer Gamer
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Sua loja especializada em periféricos e acessórios gamers.
              Qualidade, desempenho e os melhores preços.
            </p>

          </div>



          {/* Atendimento */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Atendimento
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>📞 (00) 00000-0000</li>

              <li>📧 contato@rayzergamer.com</li>

              <li>🕒 Seg a Sex • 09h às 18h</li>

            </ul>

          </div>



          {/* Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Links
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>Início</li>

              <li>Catálogo</li>

              <li>Promoções</li>

              <li>Contato</li>

            </ul>

          </div>



          {/* Redes */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Redes Sociais
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-violet-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            <div className="flex gap-4 mt-8 text-4xl text-zinc-500">

              <FaPix />

              <FaCcVisa />

              <FaCcMastercard />

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">

          <p className="text-zinc-500">
            © 2026 Rayzer Gamer. Todos os direitos reservados.
          </p>

          <p className="text-zinc-600">
            Desenvolvido com ❤️ por Rayzer Gamer
          </p>

        </div>

      </div>

    </footer>
  );
}