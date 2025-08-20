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
        gsap.fromTo("#logo", {
            opacity: 0,
            y: -50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#logo",
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: false,
            }
        });
    })

    useGSAP(() => {
        let getRatio = (el) =>
            window.innerHeight / (window.innerHeight + el.offsetHeight);

        sectionsRef.current.forEach((section, i) => {
            let bg = section.querySelector(".bg");

            // Use imported cyber images
            const cyberImages = [cr1, cr2, cr3];
            bg.style.backgroundImage = `url(${cyberImages[i]})`;
            bg.style.backgroundSize = "cover";
            bg.style.backgroundPosition = "center";
            bg.style.backgroundRepeat = "no-repeat";

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
                        scrub: 1,
                        invalidateOnRefresh: true,
                        markers: false,
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <section
                className="relative h-screen flex items-center justify-center shadow-black"
                style={{
                    backgroundImage: `url(${cyber1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)'
                }}
            >
                {/* <h1 className="text-[10vw] font-semibold text-center z-10 text-white">
                    Simple parallax sections
                </h1> */}
                <div className="mb-20">
                    <img id="logo" src="https://ik.imagekit.io/c2zxrxqp6/CyberPunk/GameSection/cyberpunk.png?updatedAt=1746880811691" alt="logo" />
                </div>
            </section>

            {["Hey look, a title", "So smooth", "Nice, right?"].map((text, i) => (
                <section
                    key={i}
                    ref={(el) => (sectionsRef.current[i] = el)}
                    className="relative h-screen flex items-center justify-center section"
                >
                    <div className="bg absolute top-0 left-0 w-full h-full -z-10"></div>
                    <h1 className="text-[10vw] font-semibold text-center z-10 text-white">{text}</h1>
                </section>
            ))}
        </>
    );
};
