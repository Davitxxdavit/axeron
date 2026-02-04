import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50)
    })

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 transition-all duration-300 border-b-2 border-transparent",
                scrolled ? "h-20 bg-background/80 backdrop-blur-md border-border" : "h-24 md:h-32 bg-transparent"
            )}
        >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-accent flex items-center justify-center font-bold text-xl text-black">
                    A
                </div>
                <span className="text-2xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">
                    Axeron
                </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {["Services", "Work", "About", "Insights"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                        {item}
                    </a>
                ))}
                <Button size="sm" variant="primary">
                    Let's Talk
                </Button>
            </nav>

            {/* Mobile Menu Toggle (Placeholder) */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
                <span className="w-8 h-0.5 bg-foreground"></span>
                <span className="w-8 h-0.5 bg-foreground"></span>
            </button>
        </motion.header>
    )
}
