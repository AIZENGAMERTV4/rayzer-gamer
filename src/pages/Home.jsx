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
import Section from "../components/ui/Section";

export default function Home() {
  return (
    <Layout fullWidth={<Hero />}>
      <div className="space-y-12 lg:space-y-26">

        <FadeUp>
          <Section>
            <Categories />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <Ofertas />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <ProductGrid />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <BannerPromocional />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <Estatisticas />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <Marcas />
          </Section>
        </FadeUp>

        <FadeUp>
          <Section>
            <Beneficios />
          </Section>
        </FadeUp>

      </div>
    </Layout>
  );
}