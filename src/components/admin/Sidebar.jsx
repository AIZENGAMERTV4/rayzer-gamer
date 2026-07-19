import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Upload,
  ClipboardList,
  Users,
  TicketPercent,
  Settings,
} from "lucide-react";

const menus = [
  {
    nome: "Dashboard",
    icone: <LayoutDashboard size={20} />,
  },
  {
    nome: "Produtos",
    icone: <Package size={20} />,
  },
  {
    nome: "Adicionar",
    icone: <PlusCircle size={20} />,
  },
  {
    nome: "Importar",
    icone: <Upload size={20} />,
  },
  {
    nome: "Pedidos",
    icone: <ClipboardList size={20} />,
  },
  {
    nome: "Clientes",
    icone: <Users size={20} />,
  },
  {
    nome: "Cupons",
    icone: <TicketPercent size={20} />,
  },
  {
    nome: "Configurações",
    icone: <Settings size={20} />,
  },
];

export default function Sidebar({ pagina, setPagina }) {
  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col">

      <h1 className="text-3xl font-black text-purple-500 mb-10">
        RAYZER
      </h1>

      <div className="space-y-3">

        {menus.map((menu) => (

          <button
            key={menu.nome}
            onClick={() => setPagina(menu.nome)}
            className={`
              w-full
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-xl
              transition-all
              duration-300
              font-semibold

              ${
                pagina === menu.nome
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }
            `}
          >

            {menu.icone}

            {menu.nome}

          </button>

        ))}

      </div>

    </aside>
  );
}