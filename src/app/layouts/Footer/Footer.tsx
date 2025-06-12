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
                    <li>Rua tal, bairro, cidade / PE</li>
                    <li>disponivel 24Horas</li>
                </menu>

                <menu>
                    <h3>SITE MAP</h3>

                    <li onClick={()=> scrollTo('#services')}>serviço</li>
                    <li onClick={()=> scrollTo('#about')}>nosso trabalho</li>
                </menu>
            </div>

            <h1 className={styles.title}><span>A</span>QUATEC</h1>

            <h4>AQUATEC. TODOS OS DIREITOS RESERVADOS 2025</h4>
            <span className={styles.creator}>DESENVOLVIDO POR: DOUGLAS RODRIGUES</span>
        </footer>
    )
}