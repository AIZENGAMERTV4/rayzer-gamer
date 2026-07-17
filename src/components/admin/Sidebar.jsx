const menus = [
    "Dashboard",
    "Produtos",
    "Adicionar",
    "Importar"
];

export default function Sidebar({ pagina, setPagina }) {

    return (

        <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-6">

            <h1 className="text-3xl font-black text-purple-500 mb-10">
                RAYZER
            </h1>

            <div className="space-y-3">

                {menus.map(menu => (

                    <button
                        key={menu}
                        onClick={() => setPagina(menu)}
                        className={`w-full text-left px-5 py-4 rounded-xl transition

                        ${
                            pagina === menu
                                ? "bg-purple-600"
                                : "hover:bg-zinc-800"
                        }`}
                    >
                        {menu}
                    </button>

                ))}

            </div>

        </aside>

    );

}