export default function SectionTitle({

titulo,
subtitulo

}){

return(

<div className="text-center mb-14">

<div className="w-28 h-1 rounded-full bg-violet-600 mx-auto mb-6"/>

<h2 className="text-4xl lg:text-5xl font-black text-white">

{titulo}

</h2>

<p className="mt-4 text-zinc-400 text-lg">

{subtitulo}

</p>

</div>

)

}