'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import styles from './Services.module.css'
import Card from '@/app/components/Card/Card';
import { useEffect, useState } from 'react';

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';

export default function Services() {

    const [slidesPerView, setSlidesPerView] = useState(1);


    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth > 700 ? 3 : 1);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={styles.services} id='services'>
            <div className={styles.texts}>
                <p>
                    A Aquatec é especialista em desentupimento de tudo, <br />
                    oferecendo serviços completos para residências, <br />
                    comércios, indústrias e condomínios. Trabalhamos com <br />
                    tecnologia moderna, equipe qualificada e atendimento <br />
                    ágil para resolver qualquer tipo de entupimento, <br />
                    garantindo segurança, limpeza e eficiência.
                </p>
                <h2>SERVIÇOS</h2>
            </div>


            <span className={styles.help}>role para a direita para ver os serviços</span>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                className={styles.slides}
            >
                <SwiperSlide className={styles.slide}><Card title='Desentupimento' url='/card1.jpg' paragraph='Limpeza e desobstrução de vazos sanitarios' /></SwiperSlide>
                <SwiperSlide className={styles.slide}><Card title='Desentupimento' url='/card2.jpg' paragraph='Limpeza e desobstrução de pias' /></SwiperSlide>
                <SwiperSlide className={styles.slide}><Card title='Hidrojateamento' url='/card3.jpg' paragraph='Melhor hidrojateamento do estado' /></SwiperSlide>
                <SwiperSlide className={styles.slide}><Card title='Desentupimento' url='/card4.jpg' paragraph='Limpeza e desobstrução de fossas sépticas' /></SwiperSlide>
                <SwiperSlide className={styles.slide}><Card title='Desentupimento' url='/card5.jpg' paragraph='Limpeza e desobstrução de ralos' /></SwiperSlide>
                <SwiperSlide className={styles.slide}><Card title='Outros' url='/card1.jpg' paragraph='Mande uma mensagem especifica' /></SwiperSlide>

            </Swiper>
        </section>
    )
}