'use client'

import Button from '@/app/components/Button/Button'
import styles from './Message.module.css'
import { useState } from 'react'

interface message{
    service: string | undefined,
    details: string | undefined
}

export default function Message() {

    const [message, setMessage] = useState<message>(
        {
            service: undefined,
            details: undefined
        }
    )

    const submit = () => {
        if (message.service != undefined && message.details != undefined) {
            window.open(`https://api.whatsapp.com/send?phone=8191293041&text=Olá, gostaria de solicitar um serviço de: ${message.service}, ${message.details}.`, '_blank')
        } else {

            alert('preencha todos os campos')
        }

    }

    return (
        <section className={styles.message}>
            <h2>FALE CONOSCO</h2>


            <form>

                <div className={styles.serviceDiv}>
                    <label htmlFor="service">TIPO DE SERVIÇO</label>
                    <input onChange={(e) => setMessage({ service: e.target.value, details: message.details })} type="text" name='service' id='service' />
                </div>


                <div className={styles.messageDiv}>
                    <label htmlFor="message">DETALHES/MENSAGEM</label>
                    <textarea name="message" id='message' onChange={(e) => setMessage({ service: message.service, details: e.target.value })}></textarea>
                </div>
            </form>

            <div onClick={() => submit()}>
                <Button text='enviar' backGround='#fff' color='#0B5294' />
            </div>

        </section>
    )
}