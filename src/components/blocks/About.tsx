import { Section } from "../layout/Section"
import { Button } from "../ui/Button"

export function About() {
    return (
        <Section id="about" className="bg-background text-foreground border-t-2 border-border">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="sticky top-32">
                    <h2 className="text-[clamp(3rem,8vw,8rem)] font-bold uppercase tracking-tighter leading-[0.8] mb-8">
                        We are <br /> <span className="text-accent">Axeron</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8">
                        We don't just write code. We engineer dominance. Our team of systems architects and design fundamentalists build digital products that scale to the moon and look good doing it.
                    </p>
                    <Button variant="outline">Our Culture</Button>
                </div>

                <div className="space-y-32">
                    {[
                        { label: "Speed", desc: "We ship faster than you can schedule a meeting." },
                        { label: "Scale", desc: "Systems built to handle millions, not thousands." },
                        { label: "Style", desc: "Brutalism that demands attention." },
                        { label: "Impact", desc: "We don't build shelf-ware. We build profit centers." }
                    ].map((item, i) => (
                        <div key={i} className="border-t-2 border-border pt-8">
                            <span className="text-accent text-lg font-bold uppercase tracking-widest mb-4 block">0{i + 1}</span>
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">{item.label}</h3>
                            <p className="text-xl text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
