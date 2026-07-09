import { useEffect, useState } from "react";

export default function Countdown() {

  const destino = new Date();

  destino.setHours(destino.getHours() + 48);

  const calcular = () => {

    const agora = new Date();

    const diferenca = destino - agora;

    const horas = Math.floor(diferenca / 1000 / 60 / 60);

    const minutos = Math.floor((diferenca / 1000 / 60) % 60);

    const segundos = Math.floor((diferenca / 1000) % 60);

    return { horas, minutos, segundos };

  };

  const [tempo, setTempo] = useState(calcular());

  useEffect(() => {

    const timer = setInterval(() => {

      setTempo(calcular());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (

    <div className="flex gap-4 mt-6">

      <div className="bg-zinc-900 rounded-xl px-5 py-3 border border-zinc-800">

        <h2 className="text-3xl font-black text-violet-500">

          {tempo.horas}

        </h2>

        <p className="text-zinc-400 text-sm">

          Horas

        </p>

      </div>

      <div className="bg-zinc-900 rounded-xl px-5 py-3 border border-zinc-800">

        <h2 className="text-3xl font-black text-violet-500">

          {tempo.minutos}

        </h2>

        <p className="text-zinc-400 text-sm">

          Min

        </p>

      </div>

      <div className="bg-zinc-900 rounded-xl px-5 py-3 border border-zinc-800">

        <h2 className="text-3xl font-black text-violet-500">

          {tempo.segundos}

        </h2>

        <p className="text-zinc-400 text-sm">

          Seg

        </p>

      </div>

    </div>

  );

}