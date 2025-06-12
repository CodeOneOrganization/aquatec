import Button from '../Button/Button'
import styles from './Card.module.css'

import { useEffect, useState } from 'react';

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';


interface Iprops {
    title: string,
    url: string,
    paragraph: string
}

export default function Card({ title, url, paragraph }: Iprops) {

    const goToWhatsApp = (message: string) => {
        window.open(`https://api.whatsapp.com/send?phone=8191293041&text=${message}.`, '_blank')
    }

    const animationCard = () => {

        gsap.to(`.${styles.card}`, {
            y: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: 'power2.inOut',
        })
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: `.${styles.services}`,
            onEnter: () => animationCard(),


            start: '55% 100%'
        })

        return () => { ScrollTrigger.killAll(); gsap.killTweensOf(`.${styles.card}`) }
    }, [])


    return (
        <article className={styles.card}>

            <div>

                <h3>{title}</h3>
                <p>{paragraph}</p>
                <picture><img src={url} alt="" /></picture>
            </div>

            <div onClick={() => goToWhatsApp(`olá, gostaria de solicitar o serviço de: ${paragraph}`)}>
                <Button text='SOLICITAR SERVIÇO' backGround='#0B5294' color='#fff' />
            </div>
        </article>
    )
}