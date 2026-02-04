import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "../ui/Button"

export function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center">
            {/* Background Noise/Grid (Optional) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 text-center flex flex-col items-center gap-8"
            >
                <div className="flex flex-col items-center leading-none">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(4rem,15vw,16rem)] font-bold uppercase tracking-tighter text-foreground mix-blend-difference"
                    >
                        Axeron
                    </motion.h1>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(2rem,6vw,6rem)] font-bold uppercase tracking-tighter text-transparent"
                        style={{ WebkitTextStroke: '1px #FAFAFA' }}
                    >
                        Tech Services
                    </motion.span>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-xl text-lg md:text-2xl text-muted-foreground text-center"
                >
                    We build digital experiences that refuse to be ignored.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Button size="lg" className="mt-8">
                        Start Project
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground uppercase text-xs tracking-widest"
            >
                Scroll to Explore
            </motion.div>
        </section>
    )
}
