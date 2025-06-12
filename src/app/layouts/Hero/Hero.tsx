'use client'

import Button from '@/app/components/Button/Button'
import styles from './Hero.module.css'
import { Smooth } from '@/app/Services/Smooth'

export default function Hero() {

    const scrollTo = (location: string) => {

        const smooth = new Smooth()

        smooth.ScrollTo(location)
    }

    return (
        <section className={styles.hero}>
            <h1 className={styles.title}><span>A</span>QUATEC</h1>

            <div className={styles.middle}>

                <div onClick={() => scrollTo('#services')}>
                    <Button text='serviços' backGround='#0B5294' color='#fff' />
                </div>



                <p>
                    A AquaTec é especializada em desentupimentos rápidos,<br />
                    limpos e sem quebrar nada. Com equipe treinada e <br />
                    equipamentos modernos, oferecemos soluções eficientes <br />
                    para residências, comércios e indústrias.
                </p>
            </div>

            <div className={styles.image}>
                <img src="/ilustr1.jpg" alt="" />
            </div>
        </section>
    )
}