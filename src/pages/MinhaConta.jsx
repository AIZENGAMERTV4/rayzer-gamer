import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
    FaBox,
    FaHeart,
    FaMapMarkerAlt,
    FaUserCog,
    FaSignOutAlt,
    FaGift,
    FaShieldAlt
} from "react-icons/fa";

export default function MinhaConta() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    async function sair() {

        await logout();

        navigate("/");

    }

    const nome =
        user?.user_metadata?.nome ||
        "Cliente Rayzer";

    const inicial =
        nome.charAt(0).toUpperCase();

    return (

        <Layout>s

            <div
                className="
                relative
                min-h-screen
                overflow-hidden
                py-10
                px-6
            "
            >

                {/* Glow Roxo */}

                <div
                    className="
                    absolute
                    top-[-220px]
                    left-[-220px]
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-violet-700/20
                    blur-[180px]
                "
                />

                {/* Glow Azul */}

                <div
                    className="
                    absolute
                    bottom-[-250px]
                    right-[-250px]
                    w-[700px]
                    h-[700px]
                    rounded-full
                    bg-cyan-500/15
                    blur-[180px]
                "
                />

                <div className="relative z-10">

                    <div
                        className="
                        max-w-7xl
                        mx-auto
                        grid
                        lg:grid-cols-[340px_1fr]
                        gap-10
                        items-start
                    "
                    ></div>

                    {/* ===================== SIDEBAR ===================== */}

<aside
    className="
    relative
    overflow-hidden
    rounded-[34px]
    bg-white/[0.05]
    backdrop-blur-3xl
    border
    border-white/10
    shadow-[0_0_60px_rgba(139,92,246,.12)]
"
>

    {/* Glow */}

    <div
        className="
        absolute
        -top-24
        -right-20
        w-72
        h-72
        rounded-full
        bg-violet-600/20
        blur-[120px]
    "
    />

    <div
        className="
        relative
        flex
        flex-col
        items-center
        px-8
        py-10
    "
    >

        {/* Avatar */}

        <div className="relative">

            <div
                className="
                absolute
                inset-0
                rounded-full
                bg-violet-600
                blur-3xl
                opacity-40
                animate-pulse
            "
            />

            <div
                className="
                relative
                w-32
                h-32
                rounded-full
                bg-gradient-to-br
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-5xl
                font-black
                border
                border-white/20
                shadow-[0_0_45px_rgba(139,92,246,.45)]
            "
            >

                {inicial}

            </div>

        </div>

        <h2 className="mt-6 text-3xl font-black">

            {nome}

        </h2>

        <p className="text-zinc-400 text-sm mt-2 break-all text-center">

            {user?.email}

        </p>

        {/* Barra de nível */}

        <div className="w-full mt-8">

            <div className="flex justify-between text-xs text-zinc-400 mb-2">

                <span>Cliente Bronze</span>

                <span>35%</span>

            </div>

            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">

                <div
                    className="
                    h-full
                    w-[35%]
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-fuchsia-500
                "
                />

            </div>

            <p className="text-xs text-zinc-500 mt-3 text-center">

                Mais 3 compras para subir para Cliente Prata

            </p>

        </div>

        {/* Menu */}

        <div className="w-full mt-10 space-y-3">

            <button
                onClick={() => navigate("/minha-conta")}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                bg-gradient-to-r
                from-violet-700
                to-fuchsia-600
                font-bold
                hover:scale-[1.02]
                transition
            "
            >
                <FaUserCog size={20} />
                Minha Conta
            </button>

            <button
                onClick={() => navigate("/pedidos")}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                bg-white/5
                hover:bg-white/10
                transition
            "
            >
                <FaBox size={20} />
                Meus Pedidos
            </button>

            <button
                onClick={() => navigate("/favoritos")}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                bg-white/5
                hover:bg-white/10
                transition
            "
            >
                <FaHeart size={20} />
                Favoritos
            </button>

            <button
                onClick={() => navigate("/enderecos")}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                bg-white/5
                hover:bg-white/10
                transition
            "
            >
                <FaMapMarkerAlt size={20} />
                Endereços
            </button>

            <button
                onClick={sair}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-2xl
                px-5
                py-4
                bg-red-600
                hover:bg-red-500
                font-bold
                transition
            "
            >
                <FaSignOutAlt size={20} />
                Sair
            </button>

        </div>

    </div>

</aside>

{/* ===================== CONTEÚDO ===================== */}

<main className="space-y-8">

    {/* Cabeçalho */}

    <section
        className="
        rounded-[34px]
        bg-white/[0.05]
        backdrop-blur-3xl
        border
        border-white/10
        p-10
        overflow-hidden
        relative
    "
    >

        <div
            className="
            absolute
            -right-20
            -top-20
            w-72
            h-72
            rounded-full
            bg-violet-600/20
            blur-[120px]
        "
        />

        <div className="relative z-10">

            <p className="text-zinc-400 uppercase tracking-[5px] text-sm">

                Minha Conta

            </p>

            <h1 className="text-5xl font-black mt-2">

                Olá, {nome} 👋

            </h1>

            <p className="text-zinc-400 mt-4 text-lg">

                Bem-vindo novamente à Rayzer Gamer PC.

            </p>

        </div>

    </section>

    {/* Cards */}

    <section
        className="
        grid
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
    "
    >

        <div
            className="
            rounded-3xl
            bg-white/[0.05]
            border
            border-white/10
            p-7
            hover:scale-[1.03]
            transition
        "
        >

            <FaBox
                size={34}
                className="text-violet-400"
            />

            <h3 className="mt-6 text-3xl font-black">

                12

            </h3>

            <p className="text-zinc-400">

                Pedidos

            </p>

        </div>

        <div
            className="
            rounded-3xl
            bg-white/[0.05]
            border
            border-white/10
            p-7
            hover:scale-[1.03]
            transition
        "
        >

            <FaHeart
                size={34}
                className="text-pink-500"
            />

            <h3 className="mt-6 text-3xl font-black">

                8

            </h3>

            <p className="text-zinc-400">

                Favoritos

            </p>

        </div>

        <div
            className="
            rounded-3xl
            bg-white/[0.05]
            border
            border-white/10
            p-7
            hover:scale-[1.03]
            transition
        "
        >

            <FaGift
                size={34}
                className="text-yellow-400"
            />

            <h3 className="mt-6 text-3xl font-black">

                R$ 85

            </h3>

            <p className="text-zinc-400">

                Cashback

            </p>

        </div>

        <div
            className="
            rounded-3xl
            bg-white/[0.05]
            border
            border-white/10
            p-7
            hover:scale-[1.03]
            transition
        "
        >

            <FaShieldAlt
                size={34}
                className="text-cyan-400"
            />

            <h3 className="mt-6 text-3xl font-black">

                VIP

            </h3>

            <p className="text-zinc-400">

                Status

            </p>

        </div>

    </section>

    {/* ================= ÚLTIMO PEDIDO ================= */}

<section
className="
rounded-[34px]
bg-white/[0.05]
backdrop-blur-3xl
border
border-white/10
p-8
"
>

<div className="flex items-center justify-between mb-8">

<div>

<h2 className="text-3xl font-black">

Último Pedido

</h2>

<p className="text-zinc-400 mt-2">

Acompanhe o status da sua compra.

</p>

</div>

<button
className="
px-5
py-3
rounded-2xl
bg-violet-600
hover:bg-violet-500
transition
font-bold
"
>

Ver Todos

</button>

</div>

<div
className="
grid
lg:grid-cols-[120px_1fr_auto]
gap-6
items-center
rounded-3xl
bg-black/30
border
border-white/10
p-6
"
>

<div
className="
w-24
h-24
rounded-3xl
bg-gradient-to-br
from-violet-600
to-fuchsia-600
flex
items-center
justify-center
text-5xl
"
>

🖥️

</div>

<div>

<h3 className="text-2xl font-bold">

RTX 4060 8GB

</h3>

<p className="text-zinc-400 mt-2">

Pedido #RG20260001

</p>

<div className="mt-5">

<div className="flex justify-between text-sm mb-2">

<span>Entrega</span>

<span>72%</span>

</div>

<div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

<div
className="
w-[72%]
h-full
rounded-full
bg-gradient-to-r
from-violet-500
to-cyan-400
"
/>

</div>

</div>

</div>

<div className="text-right">

<span
className="
inline-block
px-5
py-2
rounded-full
bg-green-500/20
text-green-400
font-bold
"
>

Em transporte

</span>

<p className="mt-5 text-zinc-400">

Entrega prevista

</p>

<h4 className="font-bold text-xl mt-1">

25/07/2026

</h4>

</div>

</div>

</section>

{/* ================= ATIVIDADES ================= */}

<section
className="
grid
xl:grid-cols-2
gap-8
"
>

<div
className="
rounded-[34px]
bg-white/[0.05]
backdrop-blur-3xl
border
border-white/10
p-8
"
>

<h2 className="text-2xl font-black mb-6">

Atividade Recente

</h2>

<div className="space-y-5">

<div className="flex gap-4">

<div className="w-4 h-4 rounded-full bg-green-500 mt-1"/>

<div>

<p className="font-semibold">

Pedido enviado

</p>

<span className="text-zinc-500 text-sm">

Hoje às 09:42

</span>

</div>

</div>

<div className="flex gap-4">

<div className="w-4 h-4 rounded-full bg-cyan-500 mt-1"/>

<div>

<p className="font-semibold">

Pagamento aprovado

</p>

<span className="text-zinc-500 text-sm">

Ontem

</span>

</div>

</div>

<div className="flex gap-4">

<div className="w-4 h-4 rounded-full bg-yellow-400 mt-1"/>

<div>

<p className="font-semibold">

Produto separado

</p>

<span className="text-zinc-500 text-sm">

Ontem

</span>

</div>

</div>

</div>

</div>

<div
className="
rounded-[34px]
bg-white/[0.05]
backdrop-blur-3xl
border
border-white/10
p-8
"
>

<h2 className="text-2xl font-black mb-6">

Resumo da Conta

</h2>

<div className="space-y-5">

<div className="flex justify-between">

<span className="text-zinc-400">

Pedidos

</span>

<strong>

12

</strong>

</div>

<div className="flex justify-between">

<span className="text-zinc-400">

Favoritos

</span>

<strong>

8

</strong>

</div>

<div className="flex justify-between">

<span className="text-zinc-400">

Cashback

</span>

<strong className="text-green-400">

R$ 85,00

</strong>

</div>

<div className="flex justify-between">

<span className="text-zinc-400">

Nível

</span>

<strong className="text-yellow-400">

Monarka Supremo

</strong>

</div>

</div>

</div>

</section>

{/* ================= FIM DO MAIN ================= */}

</main>

{/* FIM GRID */}

</div>

{/* FIM RELATIVE */}

</div>

{/* FIM CONTAINER */}

</Layout>


);

}