import Image from "next/image";
import style from "./page.module.css";
import CarroselDepoimentos from "./components/carroselDepoimentos/CarroselDepoimentos";

export default function Home() {
  return (
    <div className={style.page}>
      <main className={style.main}>
        {/* Stripe */}
        <div className={style.stripe}></div>

        <section className={style.informationArea}>
          <Image
            className={style.bannerPrincipal}
            width={800}
            height={800}
            src={'/bannerPrincipal.jpg'}
            alt="Banner principal"
          />

          {/* Area 2 */}
          <div className={style.area2}>
            <Image
              className={style.background}
              width={800}
              height={800}
              src={'/background.jpg'}
              alt="Background"
            />
            <h1>Conheça nossas principais propostas</h1>
            <ul>
              <li>1. Propor a criação do Sistema Integrado de Emprego Municipal, o “Emprega Teresina”, oportunizando suporte ao trabalhador/a, passando pela elaboração do currículo, entrevista de emprego, qualificação profissional, bem como outros serviços;</li>
              <li className={style.type2}>2. Apoio ao Banco Popular de Teresina, disponibilizando acessos a linha de crédito e orientações que atendam às necessidades dos micros e pequenos negócios, tanto na zona rural quanto na urbana de Teresina;</li>
              <li>3. Propor e apoiar leis e ações que incentivem os jovens ao primeiro emprego e facilitem o acesso de mães, PCDs e pessoas com mais idade no mundo do trabalho;</li>
              <li className={style.type2}>4. Incentivar a geração de emprego e renda aliada ao desenvolvimento sustentável com criação de “Empregos Verdes”, buscando apoiar empreendedores e cooperativas que trabalhem com a reciclagem de resíduos sólidos produzidos em Teresina;</li>
              <li>5. Propor políticas de atenção e assistência a trabalhadores e trabalhadoras por aplicativos de mobilidade, seja de transporte e/ou alimentação; (Exemplo são os pontos de apoio)</li>
              <li className={style.type2}>6. Propor a criação de um aplicativo de ouvidoria/denúncia - "Escuta Vereador”, um canal de conexão entre os parlamentares e a população teresinense, para que possa ouvir as demandas das comunidades;</li>
              <li>7. Propor a criação de um Plano Municipal de Segurança e um Comitê de Segurança Municipal Comunitária, para que esteja em consonância com a Guarda Municipal de Teresina promovendo ações de prevenção, defesa e proteção à sociedade teresinense;</li>
              <li className={style.type2}>8. Incentivar a promoção de eventos, ações e projetos voltados à Economia Solidária, Startups, Cultura Digital, E-SPORT, Cultura GEEK e o Empreendedorismo;</li>
              <li>9. Apresentar leis e iniciativas visando a conscientização da população teresinense sobre a doação de órgãos e tecidos, aliado à criação do Comitê Municipal de Proteção a Pessoas Transplantadas;</li>
              <li className={style.type2}>10. Propor a criação de Unidades Básicas de Saúde Veterinária (UBSVs), que servirão como pontos de atendimento primário para animais domésticos e animais de rua;</li>
              <li>11. Incentivar e fortalecer ações que contemplem a qualificação profissional, trabalho, emprego e renda a pessoas com as mais diversas deficiências;</li>
              <li className={style.type2}>12. Defesa do transporte público de qualidade e que atenda todas as zonas (urbanas e rurais), bairros e vilas de Teresina.</li>
            </ul>

            <CarroselDepoimentos />
          </div>

          {/* Area 3 */}
          <div className={style.area3}>
            <Image
              className={style.bannerPrincipal}
              width={800}
              height={800}
              src={'/ponte.png'}
              alt="Ponte Figura"
            />
          </div>
        </section>
      </main>
        
    </div>
  );
}
