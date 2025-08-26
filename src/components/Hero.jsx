import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import cyber1 from "/assets/cyber-img/bt.jpg";
import cr1 from "/assets/cyber-img/cr1.jpg";
import cr2 from "/assets/cyber-img/cr2.jpg";
import cr3 from "/assets/cyber-img/cr3.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const sectionsRef = useRef([]);

    useGSAP(() => {
        gsap.fromTo("#logo", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power4.inOut', delay: 0.5 })
    }, [])

    useGSAP(() => {
        let getRatio = (el) =>
            window.innerHeight / (window.innerHeight + el.offsetHeight);

        sectionsRef.current.forEach((section, i) => {
            let bg = section.querySelector(".bg");

            gsap.fromTo(
                bg,
                {
                    backgroundPosition: () =>
                        i
                            ? `50% ${-window.innerHeight * getRatio(section)}px`
                            : "50% 0px",
                },
                {
                    backgroundPosition: () =>
                        `50% ${window.innerHeight * (1 - getRatio(section))}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: () => (i ? "top bottom" : "top top"),
                        end: "bottom top",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });
    }, []);



    return (
        <>
            {/* First Hero Section 1*/}
            <section
                ref={(el) => (sectionsRef.current[0] = el)}
                className="relative h-screen flex items-center justify-center"
            >
                <div
                    className="bg absolute top-0 left-0 w-full h-full -z-10"
                    style={{ backgroundImage: `url(${cyber1})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <div className="mb-20">
                    <img
                        id="logo"
                        src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/GameSection/cyberpunk.png?updatedAt=1746880811691"
                        alt="logo"
                    />
                </div>
            </section>

            {/* Section 2 */}
            <section
                ref={(el) => (sectionsRef.current[1] = el)}
                className="relative h-screen flex items-center justify-center"
            >
                <div
                    className="bg absolute top-0 left-0 w-full h-full -z-10"
                    style={{ backgroundImage: `url(${cr1})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <h1 className="text-[10vw] font-semibold text-center z-10 text-white">
                    Hey look, a title
                </h1>
            </section>

            {/* Section 3 */}
            <section
                ref={(el) => (sectionsRef.current[2] = el)}
                className="relative h-screen flex items-center justify-center"
            >
                <div
                    className="bg absolute top-0 left-0 w-full h-full -z-10"
                    style={{ backgroundImage: `url(${cr2})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <h1 className="text-[10vw] font-semibold text-center z-10 text-white">
                    So smooth
                </h1>
            </section>

            {/* Section 4 */}
            <section
                ref={(el) => (sectionsRef.current[3] = el)}
                className="relative h-screen flex items-center justify-center"
            >
                <div
                    className="bg absolute top-0 left-0 w-full h-full -z-10"
                    style={{ backgroundImage: `url(${cr3})`, backgroundSize: "cover", backgroundPosition: "center" }}
                ></div>
                <h1 className="text-[10vw] font-semibold text-center z-10 text-white">
                    Nice, right?
                </h1>
            </section>
        </>
    );
};
