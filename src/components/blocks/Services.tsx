import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Section } from "../layout/Section"

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "High-performance websites built with modern frameworks. We don't do templates.",
        tags: ["React", "Next.js", "WebGL"]
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "Brutalist interfaces that prioritize bold typography and motion.",
        tags: ["Figma", "Motion", "System"]
    },
    {
        id: "03",
        title: "Backend Systems",
        description: "Scalable architecture that powers your growth without breaking a sweat.",
        tags: ["Node.js", "Python", "Cloud"]
    },
    {
        id: "04",
        title: "DevOps",
        description: "CI/CD pipelines and infrastructure as code for velocity.",
        tags: ["AWS", "Docker", "K8s"]
    }
]

function ServiceCard({ service, index, range, targetScale, progress }: any) {
    const container = useRef(null)
    const { scrollYProgress: _scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(10% + ${index * 25}px)` }}
                className="relative flex flex-col p-8 md:p-16 w-full max-w-4xl h-[60vh] bg-muted border-2 border-border origin-top transition-colors duration-500 hover:bg-accent group"
            >
                <div className="flex justify-between items-start mb-8">
                    <span className="text-6xl md:text-8xl font-bold opacity-20 group-hover:text-black group-hover:opacity-100 transition-all">{service.id}</span>
                    <div className="flex gap-2">
                        {service.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 border border-border rounded-full text-xs uppercase tracking-widest group-hover:border-black group-hover:text-black transition-colors">{tag}</span>
                        ))}
                    </div>
                </div>

                <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6 group-hover:text-black transition-colors">
                    {service.title}
                </h3>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl group-hover:text-black/80 transition-colors">
                    {service.description}
                </p>

                <div className="mt-auto pt-8 border-t border-border group-hover:border-black/20 w-full flex justify-end">
                    <button className="text-sm font-bold uppercase tracking-widest group-hover:text-black transition-colors">Learn More &rarr;</button>
                </div>
            </motion.div>
        </div>
    )
}

export function Services() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <Section id="services" className="bg-background relative" fullWidth>
            <div ref={container} className="relative">
                {services.map((service, i) => {
                    const targetScale = 1 - ((services.length - i) * 0.05)
                    return (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={i}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                        />
                    )
                })}
            </div>
        </Section>
    )
}
