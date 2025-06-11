'use client'

import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

type IProps = {
    children: React.ReactNode;
};

export default function SmoothScroll({ children }: IProps) {

    useEffect(() => {

        gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

        ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',

            smooth: 2,
            smoothTouch: 0.5
        });

    }, [])

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}