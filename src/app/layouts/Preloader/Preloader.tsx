'use client'

import gsap from "gsap"
import styles from './Preloader.module.css'
import { useEffect } from "react"


export default function Preloader() {


    useEffect(() => {



        gsap.to(`.${styles.preloader} img`, {
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut'
        })

        gsap.to(`.${styles.preloader} img`, {
            width: '0vw',
            opacity: 1,
            duration: 3.5,
            ease: 'power2.inOut',
            delay: .4
        })


        gsap.to(`.${styles.blocksBlue}`, {
            bottom: '0',
            duration: 2,
            stagger: 0.1,
            ease: 'power2.inOut',
            delay: .8
        })

        gsap.to(`.${styles.blocksWhite}`, {
            bottom: '0',
            duration: 2,
            stagger: 0.1,
            ease: 'power2.inOut',
            delay: 1.3,

        })

        gsap.to(`.${styles.preloader}`, {
            height: '0',
            duration: 2,
            ease: 'power2.inOut',
            delay: 1.3,
        })



    }, [])

    return (
        <section className={styles.preloader}>
            <img src="/logo.png" alt="" />

            <div className={styles.blocksBlue}></div>
            <div className={styles.blocksBlue}></div>
            <div className={styles.blocksBlue}></div>
            <div className={styles.blocksBlue}></div>

            <div className={styles.blocksWhite}></div>
            <div className={styles.blocksWhite}></div>
            <div className={styles.blocksWhite}></div>
            <div className={styles.blocksWhite}></div>
        </section>
    )
}