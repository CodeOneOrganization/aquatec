import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export class Smooth {

    public SmoothVariable!: ScrollSmoother

    constructor() {
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger)


        this.SmoothVariable = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',

            smooth: 1,
            smoothTouch: 0.5
        });
    }

    ScrollTo(location: string) {
        this.SmoothVariable.scrollTo(`${location}`, true, 'top 100px')
    }


}