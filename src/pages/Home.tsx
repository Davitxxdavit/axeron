import { Hero } from "../components/blocks/Hero"
import { Services } from "../components/blocks/Services"
import { About } from "../components/blocks/About"
import { Contact } from "../components/blocks/Contact"
// import { Marquee } from "../components/blocks/Marquee" // I integrated this into Footer, but maybe add one mid-page?

export function Home() {
    return (
        <main className="w-full bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
            <Hero />
            <Services />
            <About />
            <Contact />
        </main>
    )
}
