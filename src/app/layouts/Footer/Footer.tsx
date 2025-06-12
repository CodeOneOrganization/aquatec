'use client'
import { Smooth } from '@/app/Services/Smooth'
import styles from './Footer.module.css'

export default function Footer() {

    const goToWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?phone=8191293041&text=olá, gostaria de saber sobre os serviços.`, '_blank')
    }

    const scrollTo = (location: string) => {

        const smooth = new Smooth()

        smooth.ScrollTo(location)
    }

    return (
        <footer className={styles.footer} id='footer'>

            <div className={styles.navigation}>
                <menu>
                    <h3>CONTATO</h3>
                    <li onClick={() => goToWhatsApp()}>(81)9 9129-3041</li>
                </menu>

                <menu>
                    <h3>LOCALIZAÇÃO</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.2033531382356!2d-34.92666142566169!3d-8.092640491937675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1eeba6be7b7f%3A0xba028cc3a82eead6!2sAv.%20Tapaj%C3%B3s!5e0!3m2!1spt-BR!2sbr!4v1718230326979!5m2!1spt-BR!2sbr"
                        width="98%"
                        height="200vw"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    <li>Av tapajó 719 bairro areias / Recife - PE</li>
                    <li>disponivel 24Horas</li>
                </menu>

                <menu>
                    <h3>SITE MAP</h3>

                    <li onClick={() => scrollTo('#services')}>serviço</li>
                    <li onClick={() => scrollTo('#about')}>nosso trabalho</li>
                </menu>
            </div>

            <h1 className={styles.title}><span>A</span>QUATEC</h1>

            <h4>AQUATEC. TODOS OS DIREITOS RESERVADOS 2025</h4>
            <span className={styles.creator}>DESENVOLVIDO POR: DOUGLAS RODRIGUES</span>
        </footer>
    )
}