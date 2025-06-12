'use client'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {

    const goToWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?phone=8191293041&text=olá, gostaria de saber sobre os serviços.`, '_blank')
    }

    return (
        <button className={styles.button} onClick={()=> goToWhatsApp()}>
            <img src="/whats.png" alt="" />
        </button>
    )
}