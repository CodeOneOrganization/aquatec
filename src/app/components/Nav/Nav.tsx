'use client'

import styles from './Nav.module.css'
import gsap from 'gsap'


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

    return (

        <>

            <nav className={styles.nav}>
                <img src="/logo.png" alt="logo" />

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
                    <li>SERVIÇOS</li>
                    <li>SOBRE</li>
                    <li>CONTATO</li>
                    <li>LOCALIZAÇÃO</li>
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