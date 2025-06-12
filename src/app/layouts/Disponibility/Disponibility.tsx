import styles from './Disponibility.module.css'

export default function Disponibility() {
    return (
        <section className={styles.disponibility}>
            <div className={styles.texts}>
                <h2>
                    DISPONIVEL <br />
                    24 HORAS!
                </h2>

                <p>
                    Conte com a nossa equipe especializada 24 horas por dia, <br />
                    7 dias por semana. Sabemos que imprevistos não têm hora <br />
                    para acontecer, por isso estamos sempre prontos para <br />
                    atender você a qualquer momento. Seja de madrugada, <br />
                    finais de semana ou feriados — quando precisar, estaremos <br />
                    disponíveis para oferecer um serviço rápido, seguro e de
                    qualidade.
                </p>
            </div>

            <img src="/creditCards.png" alt="" />
        </section>
    )
}