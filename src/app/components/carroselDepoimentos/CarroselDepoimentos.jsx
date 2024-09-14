import style from './CarroselDepoimentos.module.css'

export default function CarroselDepoimentos() {
    return(
        <section className={style.container}>
            {/* Title */}
            <h2 className={style.title}>A População está com ele!</h2>

            {/* Roll Container */}
            <div className={style.rollContainer}>
                {/* Slide Container */}
                <div className={style.SlideContainer}>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://f.i.uol.com.br/fotografia/2023/08/25/169299396464e909ac19018_1692993964_3x2_md.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://www.cartacapital.com.br/wp-content/uploads/2019/11/cancerdemama-mulheres.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://assets-blog.pagseguro.uol.com.br/wp-content/2022/08/Auxilio-Taxista.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://static.ndmais.com.br/2023/11/pedreiro-brincalhao-600x800.png" alt="" />
                    </article>
                    
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://www.camara.leg.br/midias/image/2023/10/img20231026113029739-768x473.jpg" alt="" />
                    </article>

                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://f.i.uol.com.br/fotografia/2023/08/25/169299396464e909ac19018_1692993964_3x2_md.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://www.cartacapital.com.br/wp-content/uploads/2019/11/cancerdemama-mulheres.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://assets-blog.pagseguro.uol.com.br/wp-content/2022/08/Auxilio-Taxista.jpg" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://static.ndmais.com.br/2023/11/pedreiro-brincalhao-600x800.png" alt="" />
                    </article>
                    {/* Card */}
                    <article className={style.card}>
                        <img src="https://www.camara.leg.br/midias/image/2023/10/img20231026113029739-768x473.jpg" alt="" />
                    </article>

                </div>
            </div>

        </section>
    )
}