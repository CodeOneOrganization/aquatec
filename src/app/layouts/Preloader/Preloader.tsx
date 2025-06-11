'use client'

import gsap from "gsap"
import styles from './Preloader.module.css'
import { useEffect } from "react"


export default function Preloader() {

    useEffect(() => {
        const imgSelector = `.${styles.preloader} img`;
        const blocksBlueSelector = `.${styles.blocksBlue}`;
        const blocksWhiteSelector = `.${styles.blocksWhite}`;
        const preloaderSelector = `.${styles.preloader}`;

        gsap.to(imgSelector, {
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut'
        });

        gsap.to(imgSelector, {
            width: '0vw',
            opacity: 1,
            duration: 3.5,
            ease: 'power2.inOut',
            delay: 0.4
        });

        gsap.to(blocksBlueSelector, {
            bottom: '0',
            duration: 2,
            stagger: 0.1,
            ease: 'power2.inOut',
            delay: 0.8
        });

        gsap.to(blocksWhiteSelector, {
            bottom: '0',
            duration: 2,
            stagger: 0.1,
            ease: 'power2.inOut',
            delay: 1.3
        });

        gsap.to(preloaderSelector, {
            height: '0',
            duration: 2,
            ease: 'power2.inOut',
            delay: 1.3
        });

        // Cleanup - remove animações ativas se o componente desmontar
        return () => {
            gsap.killTweensOf(imgSelector);
            gsap.killTweensOf(blocksBlueSelector);
            gsap.killTweensOf(blocksWhiteSelector);
            gsap.killTweensOf(preloaderSelector);
        };
    }, []);

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