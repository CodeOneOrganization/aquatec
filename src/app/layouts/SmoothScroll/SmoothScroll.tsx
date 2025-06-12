'use client'

import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";
import { Smooth } from "@/app/Services/Smooth";


type IProps = {
    children: React.ReactNode;
};

export default function SmoothScroll({ children }: IProps) {

    useEffect(() => {

        const smooth = new Smooth()

    }, [])

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                {children}
            </div>
        </div>
    )
}