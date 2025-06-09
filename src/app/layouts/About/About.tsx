import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.upper}>
                <h2>NOSSO <br /> TRABALHO</h2>

                <div className={styles.paragraphs}>
                    <p>
                        Na AquaTec, transformamos problemas em soluções. <br />
                        Somos uma empresa especializada em desentupimento <br />
                        e manutenção preventiva de tubulações, atuando com <br />
                        eficiência, rapidez e respeito ao seu ambiente.
                    </p>
                    <p>
                        Atendemos residências, comércios e indústrias, sempre <br />
                        prezando pela qualidade e pela confiança em cada <br />
                        serviço realizado.

                        <br />
                        <br />
                        
                        <strong>Precisou, chamou. AquaTec resolve.</strong>
                    </p>
                </div>

            </div>

            <div className={styles.bottom}>

                <div className={styles.card}>
                    <span>+</span>
                    <h3>100</h3>
                    <span>CLIENTES</span>
                </div>

                <div className={styles.card}>
                    <span>%</span>
                    <h3>99</h3>
                    <span>SATISFAÇÃO</span>
                </div>
                
                <div className={styles.card}>
                    <span>+</span>
                    <h3>120</h3>
                    <span>TRABALHOS</span>
                </div>
                
            </div>
        </section>
    )
}