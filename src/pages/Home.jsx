import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Ofertas from "../components/Ofertas";
import ProductGrid from "../components/ProductGrid";
import Beneficios from "../components/Beneficios";
import Marcas from "../components/Marcas";
import Estatisticas from "../components/Estatisticas";
import BannerPromocional from "../components/BannerPromocional";
import FadeUp from "../components/animations/FadeUp";
import TrustBar from "../components/TrustBar";

export default function Home() {
  return (

  <Layout
    fullWidth={<Hero />}
  >

    <FadeUp>
      <TrustBar />
    </FadeUp>

    <FadeUp>
      <Estatisticas />
    </FadeUp>

    <FadeUp>
      <Beneficios />
    </FadeUp>

    <FadeUp>
      <Marcas />
    </FadeUp>

    <FadeUp>
      <BannerPromocional />
    </FadeUp>

    <FadeUp>
      <Categories />
    </FadeUp>

    <FadeUp>
      <Ofertas />
    </FadeUp>

    <FadeUp>
      <section className="section-dark">
        <ProductGrid />
      </section>
    </FadeUp>

  </Layout>

 );
}