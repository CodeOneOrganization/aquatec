'use client'

import { Smooth } from '@/app/Services/Smooth';
import styles from './Nav.module.css'
import gsap from 'gsap'
import ScrollSmoother from "gsap/ScrollSmoother";

export default function Nav() {

    const openOverlay = () => {
        console.log('click')

        gsap.to(`.${styles.overlay}`, {
            y: 0,
            duration: 1,
            ease: "power2.inOut",
        })
    }

    const closeOverlay = () => {
        gsap.to(`.${styles.overlay}`, {
            y: '-110%',
            duration: 1,
            ease: "power2.inOut",
        })
    }

    const scrollTo = (location: string) =>{

        const smooth = new Smooth()

        smooth.ScrollTo(location)

    }


    return (

        <>

            <nav className={styles.nav}>
                <img src="/logo.png" alt="logo" onClick={() => scrollTo('0')}/>

                <button className={styles.menuButton} onClick={() => openOverlay()}>
                    menu
                    <div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </button>

            </nav>

            <div className={styles.overlay}>
                <menu>
                    <li onClick={() => {scrollTo('#services'); closeOverlay()}}>SERVIÇOS</li>
                    <li onClick={() => {scrollTo('#about'); closeOverlay()}}>NOSSO TRABALHO</li>
                    <li onClick={() => {scrollTo('#footer'); closeOverlay()}}>CONTATO</li>
                    <li onClick={() => {scrollTo('#footer'); closeOverlay()}}>LOCALIZAÇÃO</li>
                </menu>

                <button className={styles.menuButtonClose} onClick={()=> closeOverlay()}>
                    menu
                    <div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </button>

            </div>
        </>
    )
}