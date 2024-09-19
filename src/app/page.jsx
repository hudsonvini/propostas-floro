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
          {/* Logo */}
          <img className={style.logo} src="/logo pdt.png" alt="Logo" />
          {/* Cnpj */}
          <p className={style.cnpj}>CNPJ DO CANDIDATO: 56.230.294/0001-00</p>

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
              <li>1. Propor a criação do Sistema Integrado de Emprego Municipal, o &quot;Emprega Teresina&ldquo;, oportunizando suporte ao trabalhador/a, passando pela elaboração do currículo, entrevista de emprego, qualificação profissional, bem como outros serviços;</li>
              <li className={style.type2}>2. Apoio ao Banco Popular de Teresina, disponibilizando acessos a linha de crédito e orientações que atendam às necessidades dos micros e pequenos negócios, tanto na zona rural quanto na urbana de Teresina;</li>
              <li>3. Propor e apoiar leis e ações que incentivem os jovens ao primeiro emprego e facilitem o acesso de mães, PCDs e pessoas com mais idade no mundo do trabalho;</li>
              <li className={style.type2}>4. Incentivar a geração de emprego e renda aliada ao desenvolvimento sustentável com criação de &quot;Empregos Verdes&ldquo;, buscando apoiar empreendedores e cooperativas que trabalhem com a reciclagem de resíduos sólidos produzidos em Teresina;</li>
              <li>5. Propor políticas de atenção e assistência a trabalhadores e trabalhadoras por aplicativos de mobilidade, seja de transporte e/ou alimentação; (Exemplo são os pontos de apoio)</li>
              <li className={style.type2}>6. Propor a criação de um aplicativo de ouvidoria/denúncia - &quot;Escuta Vereador&ldquo;, um canal de conexão entre os parlamentares e a população teresinense, para que possa ouvir as demandas das comunidades;</li>
              <li>7. Propor a criação de um Plano Municipal de Segurança e um Comitê de Segurança Municipal Comunitária, para que esteja em consonância com a Guarda Municipal de Teresina promovendo ações de prevenção, defesa e proteção à sociedade teresinense;</li>
              <li className={style.type2}>8. Incentivar a promoção de eventos, ações e projetos voltados à Economia Solidária, Startups, Cultura Digital, E-SPORT, Cultura GEEK e o Empreendedorismo;</li>
              <li>9. Apresentar leis e iniciativas visando a conscientização da população teresinense sobre a doação de órgãos e tecidos, aliado à criação do Comitê Municipal de Proteção a Pessoas Transplantadas;</li>
              <li className={style.type2}>10. Propor a criação de Unidades Básicas de Saúde Veterinária (UBSVs), que servirão como pontos de atendimento primário para animais domésticos e animais de rua;</li>
              <li>11. Incentivar e fortalecer ações que contemplem a qualificação profissional, trabalho, emprego e renda a pessoas com as mais diversas deficiências;</li>
              <li className={style.type2}>12. Defesa do transporte público de qualidade e que atenda todas as zonas (urbanas e rurais), bairros e vilas de Teresina.</li>
            </ul>

            <CarroselDepoimentos />

            <h1>Nosso Jingle</h1>
            <div className={style.buttonsArea}>
              <a className={style.buttonJingle} href="https://www.youtube.com/watch?v=OBkAsh2LXeI">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z" fill="#28B061"/>
                </svg>
                Ouvir agora
              </a>
              <a className={`${style.buttonJingle} ${style.type2}`} href="Jingle Floro Themos Vagas.mp4" download="/Jingle Floro Themos Vagas.mp4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_91_362)">
                  <path d="M4 20H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14V4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14L16 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 14L8 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_91_362">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Baixar
              </a>
            </div>

            <h1 className={style.urnaTitle}>Vote na Renovação</h1>
            <Image
              className={style.urna}
              width={800}
              height={800}
              src={'/urna.jpg'}
              alt="Vote na Renovação"
            />
          </div>

          {/* Area 3 */}
          <div className={style.area3}>
            <Image
              className={style.toComOFloro}
              width={350}
              height={800}
              src={'/tocomfloro.png'}
              alt="to com o floro"
            />

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
