'use client'
import { useEffect } from 'react';
import styles from './About.module.css'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';

export default function About() {

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
            trigger: `.${styles.about}`,
            onEnter: () => animationCard(),

            start: '55% 100%'
        })

        return() => {ScrollTrigger.killAll(); gsap.killTweensOf(`.${styles.card}`)}
    }, [])

    return (
        <section className={styles.about} id='about'>
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