import { Section } from "../layout/Section"
import { Button } from "../ui/Button"

export function Contact() {
    return (
        <Section id="contact" className="bg-muted text-foreground" fullWidth>
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-[clamp(3rem,10vw,12rem)] font-bold uppercase tracking-tighter leading-[0.8] mb-16 text-center">
                    Let's <span className="text-outline-active">Talk</span>
                </h2>

                <form className="max-w-4xl mx-auto space-y-12">
                    <div className="group relative">
                        <input
                            type="text"
                            placeholder="NAME"
                            className="w-full h-24 bg-transparent border-b-2 border-border text-2xl md:text-4xl font-bold uppercase tracking-tighter placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="group relative">
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className="w-full h-24 bg-transparent border-b-2 border-border text-2xl md:text-4xl font-bold uppercase tracking-tighter placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="group relative">
                        <textarea
                            rows={1}
                            placeholder="PROJECT DETAILS"
                            className="w-full min-h-[6rem] bg-transparent border-b-2 border-border text-2xl md:text-4xl font-bold uppercase tracking-tighter placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none pt-8"
                        />
                    </div>

                    <div className="flex justify-end pt-12">
                        <Button size="lg" className="w-full md:w-auto text-xl">
                            Send Request
                        </Button>
                    </div>
                </form>
            </div>
        </Section>
    )
}
