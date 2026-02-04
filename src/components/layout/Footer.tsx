import Marquee from "react-fast-marquee"
import { Section } from "./Section"
import { Button } from "../ui/Button"

export function Footer() {
    return (
        <footer className="bg-background border-t-2 border-border overflow-hidden">
            {/* Marquee layer */}
            <div className="py-12 border-b-2 border-border bg-accent text-background">
                <Marquee autoFill speed={80}>
                    <span className="text-[10vw] font-bold uppercase leading-none tracking-tighter px-8">
                        Create. Innovate. Dominate.
                    </span>
                    <span className="text-[10vw] font-bold uppercase leading-none tracking-tighter px-8 text-transparent stroke-text" style={{ WebkitTextStroke: '2px black' }}>
                        Axeron
                    </span>
                </Marquee>
            </div>

            <Section className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="col-span-1 lg:col-span-2 space-y-8">
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8]">
                        Let's <br /> <span className="text-accent">Build</span>
                    </h2>
                    <Button size="lg">Start a Project</Button>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">Socials</h3>
                    <ul className="space-y-2">
                        {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map((link) => (
                            <li key={link}>
                                <a href="#" className="text-2xl font-bold uppercase hover:text-accent transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">Contact</h3>
                    <p className="text-xl">
                        hello@axeron.com<br />
                        +1 (555) 012-3456
                    </p>
                    <p className="text-xl text-muted-foreground">
                        123 Innovation Dr<br />
                        Tech City, TC 90210
                    </p>
                </div>
            </Section>

            <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between px-4 md:px-8 text-sm uppercase text-muted-foreground tracking-widest">
                <span>© 2024 Axeron Inc.</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-foreground">Privacy</a>
                    <a href="#" className="hover:text-foreground">Terms</a>
                </div>
            </div>
        </footer>
    )
}
